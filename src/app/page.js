
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Skills from "@/components/Services";

import Work from "@/components/Worker";

export default function Home() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden flex flex-col gap-10'>
         <Header />
         <Banner />
         <Nav/>
         <About/>
         <Education/>
         <Experience/>
         <Skills/>
         <Work/>
         <Contact />
         <Footer />
    </div>
  );
}
