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
import ProjectDisplayBox from "@/components/ProjectDisplayBox";
import ReferenceBox from "@/components/ReferenceBox";
import ContactForm from "@/components/ContactForm";
import AnimatedMemoji from "@/components/AnimatedMemoji";

export default function About() {
  return (
    <main className=" flex flex-col items-center  justify-between text-white">
      <Sidebar />
      <section className="self-end w-6/7 px-14 py-7 h-screen ">
        <Header />
        <div className="my-10 flex ">
          <div>
            <h1 className="text-5xl mb-4">
              Let's get in contact <AnimatedMemoji memoji="🚀" />
            </h1>
            <div className="max-w-2xl">
              <p className="text-xl mb-4">
                I'm always open to new opportunities that challenge me and
                expand my expertise. Whether you're looking to collaborate on an
                exciting project or have a role that could be the perfect fit,
                I'd love to connect.
              </p>
              <p className="text-lg text-white/80">
                Drop me a message below and let's discuss how we can work
                together! 🤝
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
