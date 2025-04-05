type LinkProps = {
  site: string;
  url: string;
};

function Link({ site, url }: LinkProps) {
  // Use the appropriate icon
  let icon: string = "";
  if (site === "Spotify") icon = "/social-logos/social-sp.png";
  else if (site === "Apple Music") icon = "/social-logos/social-am.png";
  else if (site === "SoundCloud") icon = "/social-logos/social-sc.png";
  else if (site === "YouTube") icon = "/social-logos/social-yt.png";
  else if (site === "Bandcamp") icon = "/social-logos/social-bc.png";
  else if (site === "Free Download") icon = "/social-logos/social-dl.png";

  return (
    <>
      <a
        href={url}
        rel="noreferrer"
        className="h-16 w-full
                hover:bg-slate-800 bg-slate-900 bg-opacity-0
                  flex place-items-center
                  cursor-pointer
                  hover:border-l-8 border-blue-500 transition-all"
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
