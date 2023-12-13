import Link from "next/link";
import Heading from "./Heading";
import Image from "next/image";

type GraphicLinkPropType = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  linkHref: string;
};

export default function GraphicLink({
  imageSrc,
  imageAlt,
  title,
  linkHref,
}: GraphicLinkPropType): React.ReactNode {
  return (
    <div className="w-full h-full rounded-xl object-cover overflow-hidden relative hover:shadow hover:translate-y-px hover:shadow-black">
      <Link href={linkHref}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{
            objectFit: "cover",
            zIndex: 0,
            backgroundBlendMode: "normal",
          }}
          quality={100}
        />
        <div className="absolute inset-0  bg-gradient-to-r from-slate-600" />
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center gap-2">
          <Heading
            as="h2"
            styles="text-white tracking-widest hover:text-peach uppercase"
          >
            {title}
          </Heading>

          <Heading
            as="h3"
            styles="text-white tracking-[0.5em] capitalize text-sm  hover:text-peach tracking-xs"
          >
            VIEW PROJECTS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              className="inline"
            >
              <path d="M1 1L5 5L1 9" stroke="#E7816B" stroke-width="2" />
            </svg>
          </Heading>
        </div>
      </Link>
    </div>
  );
}
