export default function FlexWrapBox({
  children,
  header,
  blueOnHover = true,
}: {
  children: React.ReactNode;
  header: string;
  blueOnHover?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-8 w-full ${blueOnHover ? "blueOnHover" : ""} bg-black/80  text-white  p-8 backdrop-blur-md rounded-2xl border border-gray-800/50`}
    >
      <h5 className="text-4xl">{header}</h5>
      <div className="flex flex-wrap gap-4 items-center justify-around w-full flex-grow">
        {children}
      </div>
    </div>
  );
}
