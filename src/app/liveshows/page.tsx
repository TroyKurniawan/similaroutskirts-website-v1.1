import { Metadata } from "next";
import { LiveShowsData } from "./liveshowsdata";
import LiveShowsEntry from "./liveshowsentry";
import PageTitle from "../components/pagetitle";

export const metadata: Metadata = {
  title: "Live Shows",
  description: "Check out live performances by Similar Outskirts.",

  openGraph: {
    title: "Live Shows | Similar Outskirts",
    description: "Check out live performances by Similar Outskirts.",
    url: "https://similaroutskirts.com/liveshows",
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

function LiveShows() {
  return (
    <>
      {/* Background */}
      <div
        className="h-screen w-screen bg-[url(/backgrounds/bg-liveshows.jpg)] fixed -z-50 animate-fadeIn
                   bg-cover bg-no-repeat bg-[70%] md:bg-bottom"
      />
      <div className="w-screen grid place-items-center text-white animate-fadeInSlide">
        <PageTitle title={"Live Shows"} />
        {/* Container */}
        <div
          className="w-96 sm:w-[36rem] md:w-[42rem] lg:w-[60rem]
                        sm:mt-8 mb-24 grid"
        >
          {/* Map out all show data */}
          {LiveShowsData.map((event) => (
            <LiveShowsEntry event={event} key={event.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LiveShows;
