"use client";

import { useState } from "react";

type FAQsectionProps = {
  question: string;
  answer: string;
};

function FAQsection({ question, answer }: FAQsectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Question */}
      <div
        className="border-l-8 border-blue-500
                    bg-slate-800 hover:bg-slate-700 cursor-pointer transition-all
                    py-4 px-8 mt-4
                    flex justify-between place-items-center"
        onClick={() => setOpen(!open)}
      >
        <div className="w-[90%] flex place-items-center font-bold text-lg md:text-2xl">
          <p className="mr-6">Q:</p>
          <h2 className="">{question}</h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 -960 960 960"
          width="50px"
          fill="white"
          className={open ? "rotate-180 transition-all" : " transition-all"}
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </div>

      {/* Answer */}
      {open && (
        <div
          className="bg-slate-900 border-l-8 border-blue-500
                    px-16 py-4 flex"
        >
          A: {answer}
        </div>
      )}
    </>
  );
}

export default FAQsection;
