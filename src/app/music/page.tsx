import { Metadata } from "next";
import MusicPage from "./musicpage";

export const metadata: Metadata = {
  title: "Music - Similar Outskirts",
  description: "View the entire dicography of Similar Outskirts.",
};

function Music() {
  return <MusicPage />;
}

export default Music;
