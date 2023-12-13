import Image from "next/image";
import Heading from "../Heading";

export default function AboutUsSection() {
  return (
    <section className="grid lg:grid-cols-[1.5fr,1fr] grid-rows-2 bg-peach rounded-2xl overflow-hidden">
      <div className="row-start-2 row-end-[-1] bg-[url(/about/desktop/bg-pattern-hero-about-desktop.svg)] bg-cover bg-[120%] flex flex-col items-start justify-center px-12 lg:gap-4 gap-2">
        <Heading as="h2" styles="text-white">
          About Us
        </Heading>
        <p className="text-white">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <figure className="relative row-start-1 row-end-2">
        <Image
          src="/about/desktop/image-about-hero.jpg"
          alt="People sitting on a office roundtable apper to be working"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
    </section>
  );
}
