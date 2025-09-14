import Image from "next/image";
import StatsCard from "@/components/StatsCard";
import Sidebar from "@/components/Sidebar";
import { Content } from "next/font/google";
import TwoByTwoContainer from "@/components/TwoByTwoContainer";
import TwoColumnContent from "@/components/TwoColumnContent";
import CenterContentBox from "@/components/CenterContentBox";
import ImageCarousel from "@/components/ImageCarousel";
import FlexWrapBox from "@/components/FlexWrapBox";
import Header from "@/components/Header";

const carouselImages = [
  "https://picsum.photos/200/100?random=1",
  "https://picsum.photos/200/100?random=2",
  "https://picsum.photos/200/100?random=3",
];

export default function Home() {
  return (
    <main className="text-white flex  flex-col items-center justify-between px-14 py-7 ">
      <Sidebar />
      <section className="self-end w-6/7 px-4  ">
        <Header />
        <TwoByTwoContainer>
          <TwoByTwoContainer>
            <StatsCard
              {...{
                heading: "Places of employment",
                content: "I am a software engineer",
              }}
            />
            <StatsCard {...{ heading: "Engineer", content: "Fullstack" }} />
            <StatsCard {...{ heading: "Tenure", content: "5+ Years" }} />
            <StatsCard
              {...{ heading: "Country", content: "Sydney, Australia" }}
            />
          </TwoByTwoContainer>
          <TwoColumnContent
            leftContent={"Resume"}
            leftBtn={"Email"}
            rightContent={"Get in touch"}
            rightBtn={"Download"}
          />
          <CenterContentBox>
            <h5 className="text-3xl">Featured Projects</h5>
            <ImageCarousel images={carouselImages} perPage={1} />
            <button className="border-1 p-2 text-lg border-dashed  cursor-pointer">
              View all
            </button>
          </CenterContentBox>
          <FlexWrapBox header="Trusted by">
            {carouselImages.map((src, index) => (
              <div key={index} className="m-4">
                <Image
                  src={src}
                  alt={`Trusted by ${index + 1}`}
                  width={290}
                  height={150}
                  className=""
                />
              </div>
            ))}
          </FlexWrapBox>
        </TwoByTwoContainer>
      </section>
    </main>
  );
}
