import Image from "next/image";

interface ReferenceBoxProps {
  name: string;
  image: string;
  referenceText: string;
}

export default function ReferenceBox({
  name,
  image,
  referenceText,
}: ReferenceBoxProps) {
  return (
    <div className="border border-white/20 rounded-lg p-4 bg-white/10 backdrop-blur-md text-white">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <h3 className="">{name}</h3>
      </div>
      <p className="text-white/80 leading-relaxed">{referenceText}</p>
    </div>
  );
}
