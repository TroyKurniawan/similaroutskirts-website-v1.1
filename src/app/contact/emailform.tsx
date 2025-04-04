"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

type EmailFormProps = {
  emailNotification: (success: boolean) => void;
};

function EmailForm({ emailNotification }: EmailFormProps) {
  const [progress, setProgress] = useState(false);

  // Function to send email
  const sendEmail = (e: React.FormEvent) => {
    // Reference to form
    const form = document.getElementById("form");

    e.preventDefault();
    setProgress(true);

    emailjs
      .sendForm(
        "service_rli3cua",
        "template_e0swfvh",
        form as HTMLFormElement,
        {
          publicKey: "4tKg-TtBv2dKHOvHo",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          emailNotification(true);
          (form as HTMLFormElement).reset();
          setProgress(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          emailNotification(false);
          setProgress(false);
        }
      );
  };

  return (
    <form
      className="grid w-96 md:w-[36rem] lg:w-[48rem]
                bg-slate-900 border-slate-800 border-4 backdrop-blur bg-opacity-80
                p-8 space-y-4 md:space-y-8"
      id="form"
      onSubmit={sendEmail}
    >
      {/* Name / Email */}
      <div className="grid lg:flex space-y-4 md:space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="grid w-full">
          <label className="text-lg md:text-2xl font-bold mb-2">Name</label>
          <input
            className="p-2 bg-slate-800"
            type="text"
            name="user_name"
            required
          />
        </div>

        <div className="grid w-full mt-8 lg:mt-0">
          <label className="text-lg md:text-2xl font-bold mb-2">Email</label>
          <input
            className="p-2 bg-slate-800"
            type="email"
            name="user_email"
            required
          />
        </div>
      </div>

      {/* Subject */}
      <div className="grid w-full">
        <label className="text-lg md:text-2xl font-bold mb-2">Subject</label>
        <input
          className="p-2 bg-slate-800"
          type="text"
          name="subject"
          required
        />
      </div>

      {/* Message */}
      <div className="grid">
        <label className="text-lg md:text-2xl font-bold mb-2">Message</label>
        <textarea className="p-2 h-80 bg-slate-800" name="message" required />
      </div>

      <div className="flex place-content-center">
        {/* Submit */}
        {!progress && (
          <input
            className="font-black text-lg md:text-2xl 
                          h-12 w-24 grid place-content-center
                          bg-blue-500 cursor-pointer
                          hover:bg-white hover:text-blue-500 transition-all"
            type="submit"
            value="Send"
          />
        )}
        {/* Progress Icon */}
        {progress && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="white"
            className="size-12 rounded-full bg-blue-500 hover:bg-blue-400 cursor-progress
                        animate-spin p-2"
          >
            <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
          </svg>
        )}
      </div>

      {/* Test buttons */}
      {/* <div className="space-x-4">
        <button className="bg-blue-500" onClick={() => emailNotification(true)}>
          TEST: True
        </button>
        <button className="bg-red-500" onClick={() => emailNotification(false)}>
          TEST: False
        </button>
      </div> */}
    </form>
  );
}

export default EmailForm;
