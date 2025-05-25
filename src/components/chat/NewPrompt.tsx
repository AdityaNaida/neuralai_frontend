/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import UploadImage from "../upload/UploadImage";
import { Image, ImageKitProvider } from "@imagekit/react";

export default function NewPrompt() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [image, setImage] = useState<any>({
    isLoading: false,
    error: "",
    dbData: {},
  });

  const endChatRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (endChatRef.current) {
      endChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      {image.isLoading && uploadProgress && (
        <div className="h-40 w-60 bg-gray-100 flex items-center justify-center gap-2 place-self-end-safe">
          <p className="text-sm text-gray-600">
            File Uploading...{uploadProgress}%
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="animate-spin text-gray-500"
          >
            <path
              fill="currentColor"
              d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75v-2.437A7.312 7.312 0 1 1 19.313 12h2.437c0-5.384-4.366-9.75-9.75-9.75"
            ></path>
          </svg>
        </div>
      )}

      {image.dbData?.filePath && (
        <div className="place-self-end-safe max-w-96">
          <ImageKitProvider
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
          >
            <Image
              src={image.dbData?.filePath}
              width={600}
              height={400}
              transformation={[{ radius: 100 }]}
            />
          </ImageKitProvider>
        </div>
      )}

      <div className="" />
      <form
        action=""
        className="w-1/2 absolute bottom-2 bg-gray-200 left-1/2 p-4 flex items-center justify-between gap-2"
        style={{ transform: `translate(-50%,0%)`, borderRadius: `10px` }}
      >
        <input
          type="text"
          placeholder="Ask me anything..."
          className="text-sm w-4/5 outline-none"
          required
        />

        <div className="flex items-center gap-2">
          <UploadImage
            setImage={setImage}
            setUploadProgress={setUploadProgress}
          />
          <button type="submit">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 text-gray-600"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}
