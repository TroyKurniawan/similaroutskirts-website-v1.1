import SocialMediaButton from "./socialmediabutton";

let sc_link = "https://soundcloud.com/similar-outskirts";
let yt_link = "https://www.youtube.com/SimilarOutskirts/";
let sp_link =
  "https://open.spotify.com/artist/1EheS355QusAVqx9Pux9No?si=oS6DBwRDQZa2GmwRkY3TTw";
let am_link = "https://music.apple.com/ca/artist/similar-outskirts/1073747592";
let tw_link = "https://x.com/Sim_Out_";
let ig_link = "https://instagram.com/similaroutskirts";
let tt_link = "https://www.tiktok.com/@similaroutskirts";
let bc_link = "https://similaroutskirts.bandcamp.com";

const Footer = () => {
  return (
    <div
      className="w-screen h-12 md:h-16 bottom-0 fixed
                bg-black
                grid content-center"
    >
      <div className="flex justify-center scale-90">
        <SocialMediaButton link={sc_link} icon="social-sc.png" />
        <SocialMediaButton link={yt_link} icon="social-yt.png" />
        <SocialMediaButton link={sp_link} icon="social-sp.png" />
        <SocialMediaButton link={am_link} icon="social-am.png" />
        <SocialMediaButton link={bc_link} icon="social-bc.png" />
        <SocialMediaButton link={tw_link} icon="social-tw.png" />
        <SocialMediaButton link={ig_link} icon="social-ig.png" />
        <SocialMediaButton link={tt_link} icon="social-tt.png" />
      </div>
    </div>
  );
};

export default Footer;
