import { Metadata } from "next";
import ButtonPrimary from "./components/buttonprimary";

export const metadata: Metadata = {
  title: {
    absolute: "Error 404",
  },
  description: "No page found.",

  openGraph: {
    title: "Error 404",
    description: "No page found.",
    url: "https://similaroutskirts.com",
    siteName: "Similar Outskirts",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1280,
        height: 720,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

function NotFound() {
  return (
    <>
      {/* Background */}
      <div
        className="h-screen w-screen bg-[url(/backgrounds/bg-home.jpg)] animate-fadeIn blur-lg fixed -z-50  
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

          <ButtonPrimary title="Return Home" link="/" newTab={false} />
        </div>
      </div>
    </>
  );
}

export default NotFound;
