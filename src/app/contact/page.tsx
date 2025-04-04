import { Metadata } from "next";
import ContactPage from "./contactpage";

export const metadata: Metadata = {
  title: "Contact - Similar Outskirts",
  description: "Send an email to Similar Outskirts.",
};

function Contact() {
  return <ContactPage />;
}

export default Contact;
