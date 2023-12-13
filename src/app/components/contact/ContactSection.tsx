import Heading from "../Heading";
import OrangeCapsule from "../OrangeCapsule";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="grid grid-rows-[60vh ,auto]">
      <div className="grid lg:grid-cols-[2fr_3fr] bg-lightPeach rounded-2xl lg:grid-rows-1 px-4 py-6 grid-rows-2 bg-[url(/contact/desktop/bg-pattern-hero-desktop.svg)] bg-[-50% ,50%] bg-cover">
        <div className="flex flex-col items-center justify-center gap-4">
          <Heading as="h2" styles="text-white">
            Contact Us
          </Heading>
          <p className="text-white text-[1.6rem] px-4">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
