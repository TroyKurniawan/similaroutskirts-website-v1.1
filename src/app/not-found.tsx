"use client";

import ButtonPrimary from "./components/buttonprimary";

function NotFound() {
  return (
    <>
      {/* Background */}
      <div
        className="h-screen w-screen bg-[url(/backgrounds/bg-home.jpg)] fixed -z-50  
                   bg-cover bg-no-repeat bg-[70%] md:bg-center"
      />

      {/* Error Message */}
      <div
        className="w-screen h-screen
                    grid content-center
                    text-white"
      >
        <div className="grid place-items-center text-center">
          <h1 className="text-3xl md:text-6xl font-black">
            Error: Page Not Found
          </h1>

          <ButtonPrimary title="Return Home" link="/" />
        </div>
      </div>
    </>
  );
}

export default NotFound;
