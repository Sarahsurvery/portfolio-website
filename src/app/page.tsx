// import Image from "next/image";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Feedback from "@/app/components/Feedback";
import Footer from "@/app/components/Footer";

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
