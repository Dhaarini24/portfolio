import {
  About,
  Contact,
  ExperienceSection,
  Hero,
  Projects,
  Publications,
  Skills,
} from "@/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
    </main>
  );
}
