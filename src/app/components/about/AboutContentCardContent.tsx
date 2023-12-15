import Image from "next/image";
import Heading from "../Heading";

type AboutContentCardContentPropType = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  ltr: Boolean;
};

export default function AboutContentCardContent({
  title,
  text,
  imageSrc,
  imageAlt,
  ltr,
}: AboutContentCardContentPropType) {
  if (ltr)
    return (
      <>
        <div className="row-start-2 row-end-[-1] lg:row-start-1  flex flex-col items-center justify-center px-12  pb-4 lg:gap-4 gap-2">
          <Heading as="h2" styles="text-white">
            {title}
          </Heading>
          <p className="text-white ">{text}</p>
        </div>
        <figure className="relative row-start-1 row-end-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </figure>
      </>
    );

  return (
    <>
      <figure className="relative row-start-1 row-end-2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="row-start-2 row-end-[-1] lg:row-start-1 bg-[url(/about/desktop/bg-pattern-hero-about-desktop.svg)] bg-cover bg-[120%] flex flex-col items-center justify-center px-12 lg:gap-4 gap-2 pb-4 ">
        <Heading as="h2" styles="text-white capitalize">
          {title}
        </Heading>
        <p className="text-white">{text}</p>
      </div>
    </>
  );
}
