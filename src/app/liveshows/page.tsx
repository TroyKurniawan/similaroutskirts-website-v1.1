import { LiveShowsData } from "./liveshowsdata";
import LiveShowsEntry from "./liveshowsentry";
import PageTitle from "../components/pagetitle";
// import { Helmet } from "react-helmet-async";

function LiveShows() {
  return (
    <>
      {/* <Helmet>
        <title>Live Shows</title>
        <meta
          name="description"
          content="Live show recordings of Similar Outskirts"
        />
        <link rel="canonical" href="/live-shows" />
      </Helmet> */}

      {/* Background */}
      <div
        className="h-screen w-screen bg-[url(/backgrounds/bg-liveshows.jpg)] fixed -z-50
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
            <LiveShowsEntry event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LiveShows;
