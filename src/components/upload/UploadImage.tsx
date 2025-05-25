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

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    setError("");
    setUploadProgress(0);

    try {
      const { signature, expire, token, publicKey } = await authenticator();

      const uploadResponse = await upload({
        file,
        fileName: file.name,
        publicKey,
        signature,
        expire,
        token,
        // Optional: Add progress callback if ImageKit supports it

        onProgress: (progress) => {
          setUploadProgress(
            Math.round((progress.loaded / progress.total) * 100)
          );

          setImage((prev: any) => ({ ...prev, isLoading: true }));
        },
      });

      console.log(uploadResponse);

      // setImage(uploadResponse.url as string);
      setImage((prev: any) => ({
        ...prev,
        isLoading: false,
        dbData: uploadResponse,
      }));
      setUploadProgress(100);
    } catch (err) {
      setError("Failed to upload image");
      setImage((prev: any) => ({ ...prev, error: "Failed to upload image" }));
      console.error("Upload error:", err);
    } finally {
      setImage((prev: any) => ({ ...prev, isLoading: false }));
      setIsUploading(false);
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
        return;
      }

      handleUpload(file);
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
        {/* {isUploading ? (
          `Uploading... ${uploadProgress}%`
        ) : ( */}
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
        {/* )} */}
      </button>

      {/* {selectedFileName && isUploading && (
        <div className="upload-info">Uploading: {selectedFileName}</div>
      )} */}

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default UploadImage;
