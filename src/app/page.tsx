"use client";

import Nav from "./nav";
import About from "./about/page";
import Home from "./home/page";
import Portfolio from "./portfolio/page";
import Experience from "./experience/page";
import Contact from "./contact/page";


export default function App() {
  return (
    <>
      <div className="fixed px-8 sm:px-20 py-4 flex justify-between z-10 w-full bg-[#0a0a0a] border-b shadow-md shadow-gray-500 h-[70px]">
          <h1 className="text-4xl font-semibold">Sanjog Grg <span className="text-[#22c55e]">.</span></h1>
          
        <Nav/>
      </div>

       <div className="scroll-smooth  lg:px-30">
         <section id="home" className="pt-22">
           <Home />
         </section>
   
         <section id="about" className="pt-10">
           <About />
         </section>
   
         <section id="portfolio" className="pt-10">
           <Portfolio />
         </section>
   
         <section id="experience" className="pt-10">
          <Experience />
         </section>
   
         <section id="contact" className="pt-10">
          <Contact />
         </section>
        </div>
            
    </>
  );
}