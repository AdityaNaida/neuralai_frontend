export default function WhatDo() {
  return (
    <div className="py-10 md:py-20">
      <div className=" p-3 md:p-10 max-w-5xl gap-10  mx-auto  ">
        <div className="space-y-4">
          <p className="font-semibold text-3xl md:text-5xl text-left">
            Your go-to tool for solving complex problem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              using AI.
            </span>
          </p>
          <p className="text-gray-600">
            Understanding your question before you finish asking, surfacing
            insights before you even know you need them, and delivering answers
            that keep you focused, curious, and in flow.
          </p>
        </div>

        <div className="flex items-center flex-wrap md:flex-nowrap mt-6 gap-4">
          <div
            className="w-full md:w-[30%] h-auto md:h-60 py-14 md:py-10 p-6 space-y-8 flex justify-center flex-col items-center md:space-y-7 border border-purple-100 "
            style={{ borderRadius: `10px` }}
          >
            <div className="flex items-center gap-2 -rotate-12">
              <div className="bg-purple-50 w-fit p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                  />
                </svg>
              </div>
              <p className="text-sm px-12 md:px-6 py-2 bg-purple-50 w-fit rounded-2xl">
                Analyse Image
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm px-12 md:px-6 py-2 shadow-lg shadow-purple-500/50 bg-gradient-to-b from-pink-200 text-white to-purple-600 w-fit rounded-2xl">
                Ask Anything
              </p>
              <div className="bg-gradient-to-b from-pink-200 text-white to-purple-600 w-fit p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2 -rotate-12">
              <div className="bg-purple-50 w-fit p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <p className="text-sm px-12 md:px-6 py-2 bg-purple-50 w-fit rounded-2xl">
                Solve Doubts
              </p>
            </div>
          </div>
          <div
            className="w-full md:w-[40%] p-6 h-64 md:h-60 border border-purple-100 relative flex items-center justify-between flex-col"
            style={{ borderRadius: `10px` }}
          >
            <div className="w-full h-[1px] bg-gradient-to-br from-pink-400 to-purple-500 mt-10"></div>
            <div
              className="h-24 w-24 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-600 absolute"
              style={{ padding: `1px` }}
            >
              <div className="h-full w-full bg-white rounded-full p-2">
                <div className="bg-gradient-to-br shadow-lg shadow-purple-500/50 from-pink-200 to-purple-600 h-full w-full rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="text-white h-10 w-10 animate-bounce"
                  >
                    <path
                      fill="currentColor"
                      d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-3xl font-semibold">
              Your AI-powered problem{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                solver
              </span>
            </p>
          </div>
          <div
            className="w-full md:w-[30%] p-6 h-auto flex flex-col gap-2 md:h-60 border border-purple-100"
            style={{ borderRadius: `10px` }}
          >
            <p className="text-xs font-medium">
              Neural{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                2.0 Pro
              </span>
            </p>
            <div
              className="h-12 w-18 bg-purple-50 border border-purple-100 self-end flex items-center justify-center"
              style={{ borderRadius: `4px` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>

            <div
              className="text-xs w-fit self-end bg-purple-50 px-3 py-1"
              style={{ borderRadius: `8px` }}
            >
              what is this?
            </div>

            <p className="text-xs text-gray-600">
              The image shows a red Puma shoe with the Ferrari logo on the side.
              It has white accents along the sides and the sole.
            </p>

            <div
              className="bg-gray-200/60 h-14 mt-2 flex items-center justify-between px-3"
              style={{ borderRadius: `6px` }}
            >
              <p className="text-xs text-gray-500">Ask me anything...</p>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-gray-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div
            className="h-auto md:h-72 py-14 md:py-10 p-6 space-y-4 flex justify-center flex-col border border-purple-100 "
            style={{ borderRadius: `10px` }}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-14 md:size-8 text-purple-600 "
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-3xl font-semibold">
                Turn your Text into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Code
                </span>
              </p>
            </div>

            <p className="text-left text-lg font-medium">
              Write your #Prompt in your language
            </p>
            <div
              className="px-3 py-2 bg-purple-50 text-sm"
              style={{ borderRadius: `10px` }}
            >
              React में useState और useEffect हुक का उपयोग क्यों किया जाता है?
              इन्हें किसी कॉम्पोनेन्ट में कैसे इस्तेमाल करेंगे और TypeScript में
              इनका टाइप कैसे सेट करेंगे?
            </div>
            <button className="ring-1 py-2 ring-purple-500 flex items-center justify-center gap-2 shadow-lg shadow-purple-100 rounded-2xl text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="size-5"
              >
                <path
                  fill="currentColor"
                  d="M17.5 9a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m-3.07-.85L2 20.59L3.41 22L15.85 9.57c-.6-.33-1.09-.82-1.42-1.42M13 5l.63-1.37L15 3l-1.37-.63L13 1l-.62 1.37L11 3l1.38.63zm8 0l.63-1.37L23 3l-1.37-.63L21 1l-.62 1.37L19 3l1.38.63zm0 4l-.62 1.37L19 11l1.38.63L21 13l.63-1.37L23 11l-1.37-.63z"
                ></path>
              </svg>{" "}
              Generate
            </button>
          </div>
          <div
            className=" h-auto md:h-72 py-14 md:py-10 p-6 flex justify-center flex-col items-center  space-y-4 border border-purple-100 "
            style={{ borderRadius: `10px` }}
          >
            <p className="text-sm px-12 md:px-6 py-2 bg-purple-50 w-fit rounded-2xl">
              Unlock Deeper Insights
            </p>
            <p className="text-sm px-12 md:px-6 py-2 bg-gradient-to-b shadow-lg shadow-purple-500/50 from-pink-200 text-white to-purple-600  w-fit rounded-2xl">
              Go beyond surface-level answers
            </p>
            <p className="text-sm px-12 md:px-6 py-2 bg-purple-50 w-fit rounded-2xl">
              This builds on "surfacing insights before you even know you need
              them" from the main headline, emphasizing the AI's analytical
              depth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
