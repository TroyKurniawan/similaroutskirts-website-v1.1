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

  // Create titles for meta tags
  let full_title1 = metaSong.title; // Example 1: Koki Chant (Remix)
  let full_title2 = metaSong.title; // Example 2: Koki Chant (Similar Outskirts Remix)
  if (metaSong.remix) full_title1 += " (Remix)";
  if (metaSong.subtitle) full_title2 += " (" + metaSong.subtitle + ")";
  else full_title2 += " | Similar Outskirts";

  if (metaFound)
    return {
      title: full_title1,
      description: "Download / Stream 🎶",

      openGraph: {
        title: full_title2,
        description: "Download / Stream 🎶",
        url: "https://similaroutskirts.com",
        siteName: "Similar Outskirts",
        images: [
          {
            url: metaSong.art.replaceAll("200", "500"),
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

  // Use 500x500 version of art
  const art_link = song.art.replaceAll("200", "500");

  // Concat subtitle
  let subtitle = "Similar Outskirts";
  if (song.subtitle) subtitle = song.subtitle;

  // const full_title = song.title + " " + song.subtitle;
  // const full_url =
  //   "https://similaroutskirts.vercel.app/music/" +
  //   song.title.replace(/\s/g, "").toLowerCase();

  // if (screen.width < screen.height) bgImageAdjust = "h-screen";

  if (found)
    return (
      <>
        {/* Background */}
        {/* <div className="fixed h-screen w-screen place-content-center place-items-center">
          <img
            src={song.art}
            className="w-screen blur-2xl opacity-40 -z-10"
            alt={song.title}
          />
        </div> */}
        <div
          className="h-screen w-screen bg-[url(/backgrounds/bg-music.jpg)] fixed top-0 -z-50 animate-fadeIn
                   bg-cover bg-bottom"
        />

        <div className="w-screen mt-8 grid justify-center place-content-center">
          {/* Main Box */}
          <div
            className="w-80 md:w-96 grid justify-center py-4 md:py-6 my-16 shadow-xl
                        border-4 border-slate-800 bg-slate-900 backdrop-blur bg-opacity-80 space-y-4
                        animate-fadeInSlide"
          >
            {/* Art */}
            <img
              className="size-72 md:size-80"
              src={art_link}
              alt={song.title}
            />

            {/* Title */}
            <div className="w-full h-16 grid place-items-center">
              <h1 className="font-black text-2xl md:text-3xl">{song.title}</h1>
              <h2 className="font-bold text-gray-500 md:text-lg">{subtitle}</h2>
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
