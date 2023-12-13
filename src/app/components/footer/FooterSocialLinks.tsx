import Image from "next/image";
import Link from "next/link";

export default function FooterSocialLinks() {
  const data = [
    {
      key: "facebook",
      src: "/shared/desktop/icon-facebook.svg",
      alt: "facebook logo",
    },
    {
      key: "twitter",
      src: "/shared/desktop/icon-twitter.svg",
      alt: "twitter logo",
    },
    {
      key: "instagram",
      src: "/shared/desktop/icon-instagram.svg",
      alt: "instagram logo",
    },
    {
      key: "youtube",
      src: "/shared/desktop/icon-youtube.svg",
      alt: "youtube logo",
    },
    {
      key: "pinterest",
      src: "/shared/desktop/icon-pinterest.svg",
      alt: "pinterest logo",
    },
  ];
  return (
    <div className="flex gap-8 bg-transparent items-end ">
      {data.map((i) => (
        <Link href="/" key={i.key}>
          <Image src={i.src} alt={i.alt} width={20} height={20} />
        </Link>
      ))}
    </div>
  );
}
