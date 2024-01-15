import Image from 'next/image'
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import SectionDivider from "@/components/sectionDivider"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Showcase from "@/components/showcase"

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className='sm:p-24'>
        <Header/>
        <Hero/>
        <SectionDivider/>
        <Services/>
        <SectionDivider/>
        <Showcase/>
      
      </div>
     

      <div className=' w-full bg-slate-50'>
        <Contact/>
        <Footer/> 
      </div>
      
    </main>
  )
}
