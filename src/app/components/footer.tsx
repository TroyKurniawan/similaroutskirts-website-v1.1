import SocialMediaButton from "./socialmediabutton";

const sc_link = "https://soundcloud.com/similar-outskirts";
const yt_link = "https://www.youtube.com/SimilarOutskirts/";
const sp_link =
  "https://open.spotify.com/artist/1EheS355QusAVqx9Pux9No?si=oS6DBwRDQZa2GmwRkY3TTw";
const am_link =
  "https://music.apple.com/ca/artist/similar-outskirts/1073747592";
const tw_link = "https://x.com/Sim_Out_";
const ig_link = "https://instagram.com/similaroutskirts";
const tt_link = "https://www.tiktok.com/@similaroutskirts";
const bc_link = "https://similaroutskirts.bandcamp.com";

const Footer = () => {
  return (
    <div
      className="w-screen h-12 md:h-16 bottom-0 fixed
                bg-black
                grid content-center"
    >
      <div className="flex justify-center scale-90">
        <SocialMediaButton link={sc_link} icon="/social-logos/social-sc.png" />
        <SocialMediaButton link={yt_link} icon="/social-logos/social-yt.png" />
        <SocialMediaButton link={sp_link} icon="/social-logos/social-sp.png" />
        <SocialMediaButton link={am_link} icon="/social-logos/social-am.png" />
        <SocialMediaButton link={bc_link} icon="/social-logos/social-bc.png" />
        <SocialMediaButton link={tw_link} icon="/social-logos/social-tw.png" />
        <SocialMediaButton link={ig_link} icon="/social-logos/social-ig.png" />
        <SocialMediaButton link={tt_link} icon="/social-logos/social-tt.png" />
      </div>
    </div>
  );
};

export default Footer;
