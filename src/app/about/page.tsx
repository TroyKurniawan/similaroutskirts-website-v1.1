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
                For over 10 years, Troy Kurniawan has built up the Similar
                Outskirts project out of his love and passion for dance music.
                While some artists focus on catchy melodic anthems, and others
                focus on bass-heavy bangers, Kurniawan aims to find the perfect
                balance of both. He has created an extensive discography to
                cement himself as an early promoter of the colour bass movement,
                backed by big acts like Chime, Tokyo Machine, Ace Aura, and
                Hyper Potions, as well as labels like Disciple and Rushdown.
                After taking a step back to reflect on what his next creative
                direction would be, he turned to his younger days filled with
                whimsy and nostalgia.
              </p>
              <p>
                Growing up in the San Francisco Bay Area, Kurniawan was exposed
                to many different cultures, especially Japanese media. Fueled by
                video game soundtracks, anime art styles, 2000s pop media, and
                the early internet space, he's tackling a familiar yet fresh
                sound of dance music that throws listeners back to the good old
                days. This was the main inspiration for his latest body of work
                NOISE24. Without abandoning the love he has for his old music,
                he's adopted a new mindset for making future music, one that has
                a single requirement: have fun.
              </p>
              <p>
                After playing shows in cities across America and Japan,
                Kurniawan is thrilled to dive into the Japanese club music space
                with his original music and anisong remixes/mashups. The success
                of his Pretty Rave Girl cover with Kasane Teto has opened up new
                opportunities to share his love of both dance music and online
                media with the community. With more tracks on the way, he is
                ready to show the world how fun bass music can really be if you
                truly tap into your interests and open your heart to an
                audience.
              </p>
              <p>🔻 TETO DANCE MUSIC 🔻</p>
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
