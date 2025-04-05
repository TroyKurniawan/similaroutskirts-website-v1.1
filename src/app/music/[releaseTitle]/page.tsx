import { Metadata } from "next";
import React from "react";
import { MusicData } from "../musicdata";
import Link from "./link";
import NotFound from "@/app/not-found";

export const metadata: Metadata = {
  title: "Music",
  description: "View the entire dicography of Similar Outskirts.",
};

async function SmartLink({
  params,
}: {
  params: Promise<{ releaseTitle: string }>;
}) {
  // Search for the right page
  const releaseTitle = (await params).releaseTitle;
  let song = MusicData[0];
  let found = false;
  for (const release of MusicData) {
    if (release.title.replace(/\s/g, "").toLowerCase() === releaseTitle) {
      song = release;
      found = true;
      break;
    }
  }

  // const full_title = song.title + " " + song.subtitle;
  // const full_url =
  //   "https://similaroutskirts.vercel.app/music/" +
  //   song.title.replace(/\s/g, "").toLowerCase();

  if (found)
    return (
      <>
        {/* Background */}
        <img
          src={song.art}
          className="fixed h-screen w-screen blur-xl opacity-40 -z-10"
          alt={song.title}
        />

        <div className="w-screen mt-8 grid justify-center place-content-center">
          {/* Main Box */}
          <div
            className="w-80 grid justify-center py-4 my-16 shadow-xl
                        border-4 border-slate-800 bg-slate-900 backdrop-blur bg-opacity-80 space-y-4
                        animate-fadeInSlide"
          >
            {/* Art */}
            <img className="size-72" src={song.art} alt={song.title} />

            {/* Title */}
            <div className="w-full h-16 grid place-items-center">
              <h1 className="font-black text-2xl">{song.title}</h1>
              <h2 className="font-bold text-gray-500">{song.subtitle}</h2>
            </div>

            <span className="w-full h-[3px] bg-slate-800" />

            {/* Links */}
            <div>
              {song.spotify && <Link site="Spotify" url={song.spotify} />}
              {song.apple_music && (
                <Link site="Apple Music" url={song.apple_music} />
              )}
              {song.soundcloud && (
                <Link site="SoundCloud" url={song.soundcloud} />
              )}
              {song.youtube && <Link site="YouTube" url={song.youtube} />}
              {song.bandcamp && <Link site="Bandcamp" url={song.bandcamp} />}
              {song.download && (
                <Link site="Free Download" url={song.download} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  else return <NotFound />;
}

export default SmartLink;
