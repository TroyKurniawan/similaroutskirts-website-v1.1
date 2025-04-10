type LinkProps = {
  site: string;
  url: string;
};

function Link({ site, url }: LinkProps) {
  // Use the appropriate icon and color
  let icon: string = "";
  let borderVar: string = "border-blue-500";
  if (site === "Spotify") {
    icon = "/social-logos/social-sp.png";
    borderVar = "border-green-500";
  } else if (site === "Apple Music") {
    icon = "/social-logos/social-am.png";
    borderVar = "border-red-400";
  } else if (site === "SoundCloud") {
    icon = "/social-logos/social-sc.png";
    borderVar = "border-orange-500";
  } else if (site === "YouTube") {
    icon = "/social-logos/social-yt.png";
    borderVar = "border-red-500";
  } else if (site === "Bandcamp") {
    icon = "/social-logos/social-bc.png";
    borderVar = "border-cyan-300";
  } else if (site === "Free Download")
    icon = "/social-logos/google-download.svg";

  return (
    <>
      <a
        href={url}
        rel="noreferrer"
        className={`h-16 w-full
                hover:bg-slate-800 bg-slate-900 bg-opacity-0
                  flex place-items-center
                  cursor-pointer
                  hover:border-l-8 ${borderVar} transition-all`}
      >
        {/* Main Box */}
        <div className="w-full flex justify-center">
          <div className="w-full px-6 flex place-items-center justify-between">
            <h1 className="font-bold text-xl">{site}</h1>
            <img src={icon} className="w-6" alt={icon} />
          </div>
        </div>
      </a>
    </>
  );
}

export default Link;
