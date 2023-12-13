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
    <div className="rounded-2xl overflow-hidden">
      <Image src={imageSrc} alt={imageAlt} width={400} height={400} />
    </div>
  );
}
