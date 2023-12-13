import Image from "next/image";
import Link from "next/link";
// import logoDark from "public/shared/logo-dark.png";

type LogoPropType = {
  imageSource: string;
};
export default function Logo({
  imageSource = "/shared/desktop/logo-dark.png ",
}: LogoPropType) {
  return (
    <Link href="/">
      <Image
        alt="a simple text logo that spells  Designo"
        src={imageSource}
        height={10}
        width={200}
      />
    </Link>
  );
}
