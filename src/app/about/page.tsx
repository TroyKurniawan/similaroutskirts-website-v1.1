import { Metadata } from "next";
import PageTitle from "../components/pagetitle";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Similar Outskirts is an Indonesian-American bass music artist from the Bay Area.",

  openGraph: {
    title: "About | Similar Outskirts",
    description:
      "Similar Outskirts is an Indonesian-American bass music artist from the Bay Area.",
    url: "https://similaroutskirts.com/about",
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

function About() {
  return (
    <>
      {/* Background */}
      <div
        className="h-screen w-screen bg-[url(/backgrounds/bg-about.jpg)] fixed -z-50 animate-fadeIn
                   bg-cover bg-no-repeat bg-[30%] md:bg-center"
      />

      <div className="w-screen grid place-items-start text-white space-y-8">
        <PageTitle title={"About"} />
        <div className="w-screen grid justify-center">
          <div
            className="w-96 md:w-[48rem] lg:w-[64rem] px-4 pb-16
                        grid lg:flex place-items-center
                        animate-fadeInSlide"
          >
            {/* Paragraph */}
            <div className="text-sm md:text-lg text-justify space-y-5">
              <p>
                Troy Kurniawan (pka. Similar Outskirts) is an
                Indonesian-American bass music artist from the Bay Area,
                California. His passion for blending bass-heavy and melodic
                styles have gathered support from NGHTMRE, SLANDER, Tokyo
                Machine, Ace Aura, Kotori, Lizzy Jane, Hyper Potions, Synthion,
                and more.
              </p>
              <p>
                Kurniawan was exposed to many facets of music during his
                childhood, from learning piano and drums to joining school music
                groups. As such, he naturally grew interested in music
                production in 2012. With over a decade of experience under his
                belt, he has produced a number of projects including EPs such as
                Titans, Headspace and Generations. Moreover, he has released
                official remixes for artists like Chime, Skybreak, bo en,
                Tenkitsune, Disero, skygate, and foxi. His works have also been
                released with record labels including Disciple, Rushdown,
                Proximity, and Heaven Sent.
              </p>
              <p>
                In recent years, a majority of Kurniawan&apos;s influences have
                come from a new genre movement in the community called Colour
                Bass. This style aims to cohesively combine the aggressive
                elements of bass music and the catchiness/tonality of melodic
                music. Inspiration is also drawn a lot from video games
                soundtracks and Japanese Pop/Rock, namely by Junichi Masuda, Go
                Ichinose & Morikazu Aoki (Pokemon), Yasunori Nishiki (Octopath
                Traveler), Christopher Larkin (Hollow Knight), Sangatsu No
                Phantasia (Kiznaiver), Yorushika (A Whisker Away), and Eve
                (Jujutsu Kaisen, Dororo).
              </p>
            </div>
            {/* Persona Image */}
            <Image
              src="/artworks/so-persona.png"
              className="ml-12 animate-fadeInSlide hidden lg:inline"
              alt="similar outskirts persona"
              width={240}
              height={0}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
