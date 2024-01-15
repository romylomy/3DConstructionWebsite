"use client"
import {links} from "@/lib/data"
import Navigation from "./navigation"
import Menu from "./menu"
import{ Bars3Icon} from "@heroicons/react/24/solid"
import { useState } from "react"

export default function Header(){
    
    const [navbarOpen, setnavbarOpen ] = useState(false)

    function toggleOff(){
      setnavbarOpen(false)
    }
    
    return(
        <header className='z-[999] relative '>
            <div className='mobile-menu block fixed right-[2rem]  top-[1.7rem] py-0 sm:hidden '>
            {
              !navbarOpen ? (
                <button onClick={()=> setnavbarOpen(true)} className=' z-[1000] flex items-center px-3 order rounded border-slate-700 text-slate-100  bg-slate-700 hover:text-white hover:border-white '>
                  <Bars3Icon className='h-6 w-6'/>
                </button>
              ) : (
                <Menu toggleOff={toggleOff}/> 
              )
            }

          </div>
           
               
                    <div  className=" py-5 px-9 sm:px-24 flex justify-between w-full fixed left-1/2 -translate-x-1/2 lg:-translate-x-4/5 top-[0] h-[initial]  bg-slate-50">
                       
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                      
                        <ul className=" menu hidden sm:flex w-full sm:items-center sm:justify-center sm:gap-y-1 sm:text-[0.9rem] sm:font-medium sm:text-gray-500 sm:w-[initial]  sm::gap-5">
                            {
                                links.map((link)=>(
                                <Navigation {...link} key={link.hash} />
                                )  
                            )}
                        </ul>

                    </div>
            
           
          

        </header>
    )
}