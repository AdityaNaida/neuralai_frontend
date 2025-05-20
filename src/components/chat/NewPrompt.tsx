/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import UploadImage from "../upload/UploadImage";

export default function NewPrompt() {
  // const [question, setQuestion] = useState<string>("");
  // const [answer, setAnswer] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");

  const endChatRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (endChatRef.current) {
      endChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div ref={endChatRef} />
      <form>
        <UploadImage setImage={setImgUrl} />
      </form>
    </>
  );
}
