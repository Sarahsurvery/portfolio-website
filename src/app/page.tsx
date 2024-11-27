// import Image from "next/image";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Feedback from "@/components/feedback";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <About />
       <Skills />
       <Feedback />
       <Footer /> 
      
      </main>
    
  );
}
