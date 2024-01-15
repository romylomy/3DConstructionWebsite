import Image from "next/image"
import heroimage from "@/public/heroimage.jpg";
import { Button } from "@/components/ui/button"
import kitchen3 from "@/public/kitchen3.jpg";
import kitchen2 from "@/public/kitchen2.jpg";



export default function Showcase(){
    return (
        <div id="projects" className="scroll-mt-20">
          <div className="flex justify-center">
             <div className="text-center">
                <h1 className="text-7xl text-slate-700"> PROJECTS</h1>
                <p>Our portfolio reflects the excellence of our work.  Explore the gallery below and witness 
                    the  <br/>  artistry, expertise, and dedication that define 3D Construction.</p>
             </div>
            </div> 
          <div className="pt-10">
            <div className=" flex justify-center  gap-x-4">
                

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                    <Image 
                                    src={heroimage}
                                    className="rounded-lg"
                                    width={670}
                                    height={300}
                                    alt="Picture of the author"/>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Home Renovation in Calgary</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This project encompassed a comprehensive overhaul, breathing new life into every corner of the house.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                    <Image 
                                    src={kitchen3}
                                    className="rounded-lg"
                                    width={670}
                                    height={300}
                                    alt="Picture of the author"/>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Home Renovation in Chestermere</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A remarkable transformation of a Kitsilano home as the living room, bathroom, and kitchen underwent a captivating renovation.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image 
                                        src={kitchen2}
                                        className="rounded-lg"
                                        width={670}
                                        height={300}
                                        alt="Picture of the author"/>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kitchen Renovation in <br/> Airdrie</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Elegant interior design and meticulous attention to detail create an atmosphere of professionalism and sophistication.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    
                </div>


            </div>
          </div>
          
        
         
             
             
        </div> 

        
   
    )
}