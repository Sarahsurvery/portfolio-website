// import Image from "next/image";
import Hero from "@/components/Hero"
import About from "@/components/About";
import Skills from "@/components/Skills";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

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
