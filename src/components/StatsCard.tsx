interface ContentCardProps {
  cardHeading: string;
  content: string;
}

export default function StatsCard(
  { heading, content }: ContentCardProps = {
    heading: "Default Heading",
    content: "Default Content",
  }
) {
  return (
    <div className="bg-black/80 text-white backdrop-blur-md rounded-2xl border border-gray-800/50 flex flex-col justify-around items-center gap-3 lg:gap-4 blueOnHover min-h-[18dvh] lg:min-h-[20dvh] p-3 lg:p-4 font-semibold">
      <p className="text-3xl">{content}</p>
      <h6 className="text-sm">{heading}</h6>
    </div>
  );
}
