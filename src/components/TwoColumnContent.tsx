export default function TwoColumnContent({
  leftContent,
  leftBtn,
  rightContent,
  rightBtn,
  bgColor = "none",
}: {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}) {
  return (
    <div className="bg-black/80 text-white backdrop-blur-md rounded-2xl border border-gray-800/50 flex justify-around items-center gap-3 lg:gap-4 transition-all ease-in duration-100 lg:hover:shadow-[0_20px_50px_rgba(0,_97,_166,_1)] min-h-[18dvh] lg:min-h-[20dvh] p-3 lg:p-4 font-semibold">
      <div className="w-1/2 p-4 text-center flex flex-col justify-around items-center gap-8">
        <h6 className="text-4xl">{leftContent}</h6>
        <button className=" border-1 p-2 text-lg border-dashed  cursor-pointer">
          {leftBtn}
        </button>
      </div>
      <div className="border-l-2 border border-white border-solid h-1/2 "></div>
      <div className="w-1/2 p-4 text-center  flex flex-col justify-around items-center gap-8">
        <h6 className="text-4xl">{rightContent}</h6>{" "}
        <button className=" border-1 p-2 text-lg border-dashed  cursor-pointer">
          {rightBtn}
        </button>
      </div>
    </div>
  );
}
