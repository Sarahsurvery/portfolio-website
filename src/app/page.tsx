// import Image from "next/image";
import Hero from "@/components/hero"
import About from "@/components/About";
import Skills from "@/components/Skills";
import Feedback from "@/components/feedback";
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
