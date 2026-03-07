import { Metadata } from "next";
import PageTitle from "../components/pagetitle";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tour",
  description: "Learn about upcoming shows from Similar Outskirts.",

  openGraph: {
    title: "Tour | Similar Outskirts",
    description: "Learn about upcoming shows from Similar Outskirts.",
    url: "https://similaroutskirts.com/tour",
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

function Tour() {
  return (
    <>
      {/* Background */}
      <div
        className="h-screen w-screen bg-[url(/backgrounds/bg-tour.jpg)] fixed -z-50 animate-fadeIn
                   bg-cover bg-no-repeat bg-[70%] md:bg-center"
      />
      <div className="grid place-items-center animate-fadeInSlide mb-16">
        {/* Title */}
        <PageTitle title={"Tour"} />

        {/* Bandsintown Event Widget */}
        <div className="mt-10 w-screen sm:w-[36rem] lg:w-[60rem] 2xl:w-[80rem] border-4 border-slate-800">
          <Script src="https://widgetv3.bandsintown.com/main.min.js" async />
          <a
            className="bit-widget-initializer "
            data-artist-name="id_11685047"
            data-background-color="rgba(15,23,42,1)"
            data-separator-color="rgba(71,71,71,1)"
            data-text-color="rgba(221,221,221,1)"
            data-font="Roboto"
            data-auto-style="true"
            data-button-label-capitalization="uppercase"
            data-header-capitalization="uppercase"
            data-location-capitalization="uppercase"
            data-venue-capitalization="capitalize"
            data-display-local-dates="false"
            data-local-dates-position="tab"
            data-display-past-dates="false"
            data-display-details="false"
            data-display-lineup="false"
            data-display-start-time="false"
            data-social-share-icon="false"
            data-display-limit="all"
            data-date-format="MMM. D, YYYY"
            data-date-orientation="horizontal"
            data-date-border-color="#4A4A4A"
            data-date-border-width="1px"
            data-date-capitalization="capitalize"
            data-date-border-radius="10px"
            data-event-ticket-cta-size="medium"
            data-event-ticket-text="TICKETS"
            data-event-ticket-icon="true"
            data-event-ticket-cta-text-color="rgba(255,255,255,1)"
            data-event-ticket-cta-bg-color="rgba(59,130,246,1)"
            data-event-ticket-cta-border-color="rgba(74,74,74,1)"
            data-event-ticket-cta-border-width="0px"
            data-event-ticket-cta-border-radius="0px"
            data-sold-out-button-text-color="rgba(255,255,255,1)"
            data-sold-out-button-background-color="rgba(74,74,74,1)"
            data-sold-out-button-border-color="rgba(74,74,74,1)"
            data-sold-out-button-clickable="true"
            data-event-rsvp-position="left"
            data-event-rsvp-cta-size="medium"
            data-event-rsvp-only-show-icon="false"
            data-event-rsvp-text="RSVP"
            data-event-rsvp-icon="false"
            data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
            data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
            data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
            data-event-rsvp-cta-border-width="1px"
            data-event-rsvp-cta-border-radius="2px"
            data-follow-section-position="top"
            data-follow-section-alignment="center"
            data-follow-section-header-text="Get updates on new shows, new music, and more"
            data-follow-section-cta-size="medium"
            data-follow-section-cta-text="FOLLOW"
            data-follow-section-cta-icon="false"
            data-follow-section-cta-text-color="rgba(255,255,255,1)"
            data-follow-section-cta-bg-color="rgba(74,74,74,1)"
            data-follow-section-cta-border-color="rgba(74,74,74,1)"
            data-follow-section-cta-border-width="0px"
            data-follow-section-cta-border-radius="2px"
            data-play-my-city-position="bottom"
            data-play-my-city-alignment="center"
            data-play-my-city-header-text="Don’t see a show near you?"
            data-play-my-city-cta-size="medium"
            data-play-my-city-cta-text="REQUEST A SHOW"
            data-play-my-city-cta-icon="false"
            data-play-my-city-cta-text-color="rgba(255,255,255,1)"
            data-play-my-city-cta-bg-color="rgba(74,74,74,1)"
            data-play-my-city-cta-border-color="rgba(74,74,74,1)"
            data-play-my-city-cta-border-width="0px"
            data-play-my-city-cta-border-radius="2px"
            data-language="en"
            data-layout-breakpoint="900"
            data-app-id="72e685c2585231222e08af4b1be4657b"
            data-bit-logo-position="bottomRight"
            data-bit-logo-color="rgba(221,221,221,1)"
          ></a>
        </div>
      </div>
    </>
  );
}

export default Tour;
