import { Metadata } from "next";
import MusicPage from "./musicpage";

export const metadata: Metadata = {
  title: "Music",
  description: "View the entire discography of Similar Outskirts.",

  openGraph: {
    title: "Music | Similar Outskirts",
    description: "View the entire discography of Similar Outskirts.",
    url: "https://similaroutskirts.com/music",
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

function Music() {
  return <MusicPage />;
}

export default Music;
