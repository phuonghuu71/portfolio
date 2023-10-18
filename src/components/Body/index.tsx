import Hero from "../Hero";
import About from "../About";
import Projects from "../Projects";
import Skills from "../Skills";
import Experience from "../Experience";
import Contact from "../Contact";

export default function Body() {
  return (
    <main className="w-full flex justify-center">
      <div className="lg:max-w-4xl m-2">
        {/* Hero Section */}
        <Hero />

        {/* About me */}
        <About />

        {/* Projects */}
        <Projects />

        {/* Skills */}
        <Skills />

        {/* Experience */}
        <Experience />

        {/* Contact */}
        <Contact />
      </div>
    </main>
  );
}
