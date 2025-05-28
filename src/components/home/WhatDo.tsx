export default function WhatDo() {
  return (
    <div className="py-20">
      <div
        className=" p-6 md:p-10 max-w-5xl gap-10  mx-auto  "
        style={{ borderRadius: `14px` }}
      >
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
            className="w-full md:w-[30%] py-14 md:py-10 p-6 space-y-8 flex justify-center flex-col items-center md:space-y-7 border border-purple-100 "
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
              <p className="text-sm px-12 md:px-6 py-2 bg-gradient-to-b from-pink-200 text-white to-purple-600 w-fit rounded-2xl">
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
            className="w-[40%] p-6 border border-purple-100 "
            style={{ borderRadius: `10px` }}
          >
            <div className="w-full h-[1px] bg-gradient-to-br from-pink-400 to-purple-500"></div>
            <div className="h-20 w-20 rounded-full bg-gray-400"></div>
          </div>
          <div
            className="w-[30%] p-6 border border-purple-100 bg-purple-50"
            style={{ borderRadius: `10px` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
