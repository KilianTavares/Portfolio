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
  { name: "project", image: "https://picsum.photos/400/100?random=1" },
  { name: "project", image: "https://picsum.photos/400/100?random=2" },
  { name: "project", image: "https://picsum.photos/400/100?random=3" },
];

const projects = [
  {
    name: "IoT Dashboard",
    image: (
      <Image
        src="https://cdn.sanity.io/images/kixov3wn/production/9bb656fa64cf18864469192e664c04f194b61bac-1640x924.png"
        alt="IoT Dashboard"
        width={600}
        height={400}
      />
    ),
  },
  {
    name: "E-Commerce Platform",
    image: (
      <Image
        src="https://picsum.photos/600/400?random=10"
        alt="E-Commerce Platform"
        width={600}
        height={400}
      />
    ),
  },
  {
    name: "Task Management App",
    image: (
      <Image
        src="https://picsum.photos/600/400?random=11"
        alt="Task Management App"
        width={600}
        height={400}
      />
    ),
  },
  {
    name: "Weather Dashboard",
    image: (
      <Image
        src="https://picsum.photos/600/400?random=12"
        alt="Weather Dashboard"
        width={600}
        height={400}
      />
    ),
  },
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
            <ImageCarousel images={projects} perPage={3} />
            <button className="border-1 p-2 text-lg border-dashed  cursor-pointer">
              View all
            </button>
          </CenterContentBox>
          <FlexWrapBox header="Trusted by">
            {carouselImages.map((src, index) => (
              <div key={index} className="">
                <Image
                  src={src.image}
                  alt={`Trusted by ${index + 1}`}
                  width={250}
                  height={100}
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
