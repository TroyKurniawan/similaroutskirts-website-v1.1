"use client";

import React, { useState } from "react";
import EmailForm from "./emailform";
import PageTitle from "../components/pagetitle";

function ContactPage() {
  const [successIcon, setSuccessIcon] = useState(true);

  // Notify user of email status
  function emailNotification(success: boolean) {
    document.getElementById("notification")?.classList.remove("hidden");
    document.getElementById("notification")?.classList.add("animate-popup");

    // Success
    if (success) {
      setSuccessIcon(true);
      document.getElementById("noti-text")!.innerHTML = "Message sent!";
    }
    // Fail
    else {
      setSuccessIcon(false);
      document.getElementById("noti-text")!.innerHTML =
        "Message failed to send. Please try again.";
    }

    // Add "hidden" class after 4.9s
    setTimeout(() => {
      document
        .getElementById("notification")
        ?.classList.remove("animate-popup");
      document.getElementById("notification")?.classList.add("hidden");
    }, 4900);
  }

  return (
    <>
      {/* Background */}
      <div
        className="bg-[url(/backgrounds/bg-contact.jpg)] h-screen w-screen fixed -z-50
                   bg-cover bg-no-repeat bg-[70%] md:bg-bottom"
      />

      {/* Email Notification */}
      <div
        className="z-50 pl-6 pr-8 py-4 fixed place-content-center
                    bottom-14 right-3
                    bg-blue-500 border-blue-400 border-4
                    text-xl font-black m-8 hidden"
        id="notification"
      >
        <div className="flex space-x-2 place-content-center place-items-center">
          {successIcon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
            >
              <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          )}
          {!successIcon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
            >
              <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          )}
          <p id="noti-text">Message sent!</p>
        </div>
      </div>

      <div
        className="w-screen grid place-items-center justify-center text-white mb-32
                        space-y-4 animate-fadeInSlide"
      >
        <PageTitle title={"Contact"} />
        {/* Text */}
        <div className="w-96 md:w-[30rem] lg:w-auto grid space-y-4 place-items-center text-center">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
            For all formal inquiries, bookings, and more, contact me using the
            form:
          </h1>
          <h2 className="w-96 md:w-[30rem] text-sm md:text-base lg:text-xl text-gray-500 text-center">
            Note: Song collaboration requests are not accepted.
          </h2>
        </div>

        <div className="h-4" />

        {/* Form */}
        <EmailForm emailNotification={emailNotification} />
      </div>
    </>
  );
}

export default ContactPage;
