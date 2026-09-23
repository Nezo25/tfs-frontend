import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Methodology } from "@/components/Methodology";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Methodology />
      <Contact />
    </>
  );
}
