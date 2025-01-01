import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Projects2 from "@/components/Projects2";
import { ProjectSection } from "@/components/ProjectSection";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingDock } from "@/components/ui/floating-dock";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  IconHome,
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const navItems = [
  { title: "Home", icon: <IconHome />, href: "/" },
  {
    title: "GitHub",
    icon: <IconBrandGithub />,
    href: "https://github.com/anhpls/",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin />,
    href: "https://www.linkedin.com/in/anhpls/",
  },
  { title: "Contact", icon: <IconMail />, href: "/contact" },
];

export default function Home() {
  return (
    <>
      {" "}
      <TracingBeam>
        <main className="flex min-h-screen flex-col bg-zinc-200">
          <Navbar />

          <div className="container mx-auto px-12 py-4">
            <Hero />
          </div>
          {/* <BackgroundBeams /> */}
          <FloatingDock items={navItems} />
          <About />
          <ProjectSection />
        </main>{" "}
      </TracingBeam>
    </>
  );
}
