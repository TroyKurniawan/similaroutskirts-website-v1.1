import Divider from "../components/divider";

type LiveShowsEntryProps = {
  event: {
    video: string;
    title: string;
    date: string;
    venue: string;
    city: string;
    description: string;
    host: string;
    host_link: string;
  };
};

function LiveShowsEntry({ event }: LiveShowsEntryProps) {
  // Render final white line divider
  let end = false;
  if (event.title === "Dual FX") end = true;

  return (
    <div className="grid place-items-center">
      <div
        className="grid lg:flex w-[24rem] sm:w-[36rem] md:w-[42rem] lg:w-[60rem]
                    justify-center
                    my-4 md:my-8 lg:space-x-8 place-items-start transition-all"
      >
        <iframe
          width="560"
          height="315"
          src={event.video}
          title={event.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-48 lg:h-80 md:h-72 w-80 lg:w-[50%] md:w-full "
        />
        {/* Text Box */}
        <div className="grid w-80 md:w-[28rem] lg:w-[50%] mt-4 lg:mt-0">
          {/* Date */}
          <p className="text-sm text-gray-500 sm:text-base lg:text-lg lg:mb-2 mb-0">
            {event.date}
          </p>
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black lg:mb-2 mb-0">
            {event.title}
          </h2>
          {/* Location */}
          <h3 className="text-base lg:text-lg mb-8">
            {event.venue} • {event.city}
          </h3>
          {/* <div className="text-gray-500 mb-4 lg:mb-8">
            <p className="text-base sm:text-lg lg:text-xl font-extrabold">
              {event.date}
            </p>
            <p className="text-sm sm:text-md lg:text-lg font-bold">
              {event.venue} • {event.city}
            </p>
          </div> */}
          {/* Description */}
          <div className="text-sm">
            <p>{event.description}</p>
            <a
              href={event.host_link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Hosted by: {event.host}
            </a>
          </div>
        </div>
      </div>
      {!end && <Divider />}
    </div>
  );
}

export default LiveShowsEntry;
