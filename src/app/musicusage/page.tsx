import { Metadata } from "next";
import PageTitle from "../components/pagetitle";
import ParagraphSection from "../components/paragraphsection";
import { MusicUsageData } from "./musicusagedata";
import FAQsection from "./FAQsection";
import { FAQdata } from "./FAQdata";
import Divider from "../components/divider";

export const metadata: Metadata = {
  title: "Music Usage",
  description:
    "Learn how you can use music by Similar Outskirts in your projects and works.",

  openGraph: {
    title: "Music Usage | Similar Outskirts",
    description:
      "Learn how you can use music by Similar Outskirts in your projects and works.",
    url: "https://similaroutskirts.com/musicusage",
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

function MusicUsage() {
  return (
    <>
      {/* Background */}
      <div
        className="h-screen w-screen bg-[url(/backgrounds/bg-musicusage.jpg)] fixed -z-50 animate-fadeIn
                   bg-cover bg-no-repeat bg-[70%] md:bg-center"
      />
      <div className="grid place-items-center animate-fadeInSlide mb-16">
        {/* Title */}
        <PageTitle title={"Music Usage"} />

        {/* General Info */}
        <ParagraphSection
          title={MusicUsageData[0].title}
          text={MusicUsageData[0].text}
          code={MusicUsageData[0].code}
        />

        <Divider />

        {/* How To Credit */}
        <ParagraphSection
          title={MusicUsageData[1].title}
          text={MusicUsageData[1].text}
          code={MusicUsageData[1].code}
        />

        <Divider />

        {/* Custom Maps/Charts for Rhythm Games */}
        <ParagraphSection
          title={MusicUsageData[2].title}
          text={MusicUsageData[2].text}
          code={MusicUsageData[2].code}
        />

        <Divider />

        {/* FAQ */}
        <div
          className="w-96 sm:w-[36rem] md:w-[42rem] lg:w-[60rem]
                    px-4 grid my-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">FAQ</h2>
          {FAQdata.map((faq) => (
            <FAQsection
              question={faq.question}
              answer={faq.answer}
              key={faq.question}
            />
          ))}
        </div>

        <div className="h-28" />
      </div>
    </>
  );
}

export default MusicUsage;
