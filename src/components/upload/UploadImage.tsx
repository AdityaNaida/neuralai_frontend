/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { upload } from "@imagekit/react";

interface UploadImageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setImage: any;
  setUploadProgress: React.Dispatch<React.SetStateAction<number>>;
}

const UploadImage = ({ setImage, setUploadProgress }: UploadImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const authenticator = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/auth");
      if (!response.ok) throw new Error("Authentication failed");
      return await response.json();
    } catch (err) {
      setError("Failed to get upload credentials");
      throw err;
    }
  };

  const handleUpload = async (
    file: File,
    inlineData: { inlineData: { data: string; mimeType: string } }
  ) => {
    setIsUploading(true);
    setError("");
    setUploadProgress(0);

    // Set isLoading to true immediately when upload process starts
    setImage((prev: any) => ({
      ...prev,
      isLoading: true,
      error: "",
      aiData: inlineData, // Store the inline data here
    }));

    try {
      const { signature, expire, token, publicKey } = await authenticator();

      const uploadResponse = await upload({
        file,
        fileName: file.name,
        publicKey,
        signature,
        expire,
        token,
        onProgress: (progress) => {
          setUploadProgress(
            Math.round((progress.loaded / progress.total) * 100)
          );
        },
      });

      console.log(uploadResponse);

      setImage((prev: any) => ({
        ...prev,
        isLoading: false,
        dbData: uploadResponse, // This seems to store the ImageKit response
        aiData: inlineData, // Keep the inline data even after upload success
      }));
      setUploadProgress(100);
    } catch (err) {
      setError("Failed to upload image");
      setImage((prev: any) => ({
        ...prev,
        error: "Failed to upload image",
        isLoading: false,
        aiData: null, // Clear inline data on error if desired
      }));
      console.error("Upload error:", err);
    } finally {
      // isUploading is set to false here, which is fine.
      // Reset file input to allow re-uploading the same file
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Optional: Add file size validation
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        setError("File size must be less than 10MB");
        setImage((prev: any) => ({
          ...prev,
          error: "File size must be less than 10MB",
        }));
        return;
      }

      // Optional: Add file type validation
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!allowedTypes.includes(file.type)) {
        setError("Please select a valid image file (JPEG, PNG, GIF, or WebP)");
        setImage((prev: any) => ({
          ...prev,
          error: "Please select a valid image file (JPEG, PNG, GIF, or WebP)",
        }));
        return;
      }

      // --- FileReader logic similar to your image ---
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          // Fixed: Wrap data and mimeType in inlineData object
          const inlineData = {
            inlineData: {
              data: reader.result.split(",")[1], // Base64 content without the "data:image/png;base64," prefix
              mimeType: file.type,
            },
          };
          // Call handleUpload with both the file and inline data
          handleUpload(file, inlineData);
        } else {
          setError("Failed to read file content.");
          setImage((prev: any) => ({
            ...prev,
            error: "Failed to read file content.",
            isLoading: false,
          }));
        }
      };
      reader.onerror = () => {
        setError("Error reading file.");
        setImage((prev: any) => ({
          ...prev,
          error: "Error reading file.",
          isLoading: false,
        }));
      };
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  };

  return (
    <div className="upload-container">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        hidden
      />

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        className={isUploading ? "uploading" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-gray-600 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
          />
        </svg>
      </button>

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default UploadImage;
