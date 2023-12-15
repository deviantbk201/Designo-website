import Image from "next/image";

type LocationBoxPropType = {
  imageSrc: string;
  imageAlt: string;
};
export default function LocationMapBox({
  imageSrc,
  imageAlt,
}: LocationBoxPropType) {
  return (
    <>
      <div className="rounded-2xl hidden lg:inline-block relative overflow-hidden">
        <Image src={imageSrc} alt={imageAlt} width={400} height={400} />
      </div>
      <div className="rounded-2xl lg:hidden relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
