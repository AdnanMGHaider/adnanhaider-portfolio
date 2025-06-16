import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
    // <Hero />
    // <main className="min-h-screen bg-green-50 flex items-center justify-center">
    //   <h1 className="text-3xl font-bold text-green-800">
    //     Tailwind is alive! 🎉
    //   </h1>
    // </main>
  );
}
