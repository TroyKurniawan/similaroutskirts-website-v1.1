import { Metadata } from "next";
import React from "react";
import { MusicData } from "../musicdata";
import Link from "./link";
import NotFound from "@/app/not-found";

type Props = {
  params: Promise<{ releaseTitle: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  // Search for the right page
  const metaReleaseTitle = (await params).releaseTitle;
  let metaSong = MusicData[0];
  let metaFound = false;
  for (const metaRelease of MusicData) {
    if (
      metaRelease.title.replace(/\s/g, "").toLowerCase() === metaReleaseTitle
    ) {
      metaSong = metaRelease;
      metaFound = true;
      break;
    }
  }
  let full_title = "";
  if (metaSong.subtitle)
    full_title += metaSong.title + " (" + metaSong.subtitle + ")";
  // song.art = song.art.replaceAll("500", "1080");

  if (metaFound)
    return {
      title: {
        absolute: full_title,
      },
      description: "Download / Stream 🎶",

      openGraph: {
        title: full_title,
        description: "Download / Stream 🎶",
        url: "https://similaroutskirts.com",
        siteName: "Similar Outskirts",
        images: [
          {
            url: metaSong.art,
            width: 500,
            height: 500,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
  else
    return {
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
            url: "https://similaroutskirts.com/thumbnail.jpg",
            width: 1280,
            height: 720,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
};

async function SmartLink({ params }: Props) {
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
          className="fixed w-screen h-screen blur-2xl opacity-40 -z-10"
          alt={song.title}
        />

        <div className="w-screen mt-8 grid justify-center place-content-center">
          {/* Main Box */}
          <div
            className="w-80 md:w-96 grid justify-center py-4 my-16 shadow-xl
                        border-4 border-slate-800 bg-slate-900 backdrop-blur bg-opacity-80 space-y-4
                        animate-fadeInSlide"
          >
            {/* Art */}
            <img
              className="size-72 md:size-80"
              src={song.art}
              alt={song.title}
            />

            {/* Title */}
            <div className="w-full h-16 grid place-items-center">
              <h1 className="font-black text-2xl md:text-3xl">{song.title}</h1>
              <h2 className="font-bold text-gray-500 md:text-lg">
                {song.subtitle}
              </h2>
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
