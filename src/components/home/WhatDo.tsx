export default function WhatDo() {
  return (
    <div className="py-20 px-3">
      <div
        className="border p-6 md:p-10 max-w-5xl gap-10  mx-auto border-gray-300 grid md:grid-cols-2"
        style={{ borderRadius: `14px` }}
      >
        <div className="space-y-4">
          <p className="text-2xl font-semibold">
            Where your curiosity meets real conversation.
          </p>
          <p className="text-gray-600">
            Understanding your question before you finish asking, surfacing
            insights before you even know you need them, and delivering answers
            that keep you focused, curious, and in flow.
          </p>
        </div>
        <div className=" gap-6">
          <div
            className="border border-gray-300 h-full p-6 cursor-pointer hover:border-purple-500 hover:border-2 hover:inset-shadow-2xs hover:shadow-purple-200 hover:shadow-md"
            style={{ borderRadius: `10px` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
