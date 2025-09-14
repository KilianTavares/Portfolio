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

const projects = [
  {
    name: "IoT Dashboard",
    image:
      "https://cdn.sanity.io/images/kixov3wn/production/9bb656fa64cf18864469192e664c04f194b61bac-1640x924.png",
    description:
      "Real-time IoT monitoring dashboard with sensor data visualization",
    techStack: ["React", "Next.js", "TypeScript", "Chart.js"],
    projectUrl: "https://dashboard-iot.onrender.com/",
  },
  {
    name: "E-Commerce Platform",
    image: "https://picsum.photos/600/400?random=10",
    description: "Full-stack e-commerce solution with payment integration",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    projectUrl: "https://example-ecommerce.com",
  },
  {
    name: "Task Management App",
    image: "https://picsum.photos/600/400?random=11",
    description: "Collaborative project management tool with real-time updates",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
  {
    name: "Weather Dashboard",
    image: "https://picsum.photos/600/400?random=12",
    description: "Interactive weather forecasting application",
    techStack: ["React", "OpenWeather API", "CSS3"],
    projectUrl: "https://weather-app-demo.com",
  },
];

export default function Projects() {
  return (
    <main className=" flex flex-col items-center justify-between px-14 py-7  text-white">
      <Sidebar />
      <section className="self-end w-6/7 px-4">
        <Header />
        <section className="grid md:grid-cols-2 min-h-[60dvh] mt-10 gap-4 aos-init aos-animate">
          {projects.map((project, index) => (
            <ProjectDisplayBox
              key={index}
              name={project.name}
              image={project.image}
              description={project.description}
              techStack={project.techStack}
              projectUrl={project.projectUrl}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
