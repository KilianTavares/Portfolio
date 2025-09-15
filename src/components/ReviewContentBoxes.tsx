export default function ReviewContentBoxes({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-14 flex-1 items-center justify-around p-8 w-full blackOnHover bg-[#0061a6] text-white backdrop-blur-md rounded-2xl border border-gray-800/50">
      {children}
    </div>
  );
}
