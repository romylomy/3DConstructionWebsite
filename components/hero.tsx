import { MdContactPhone } from "react-icons/md";
import heroimage from "@/public/heroimage.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { FaHouseCircleCheck } from "react-icons/fa6";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"



export default function Hero(){

    return(
        <section id="home" className="sm:flex mt-9 sm:mt-none w-full gap-x-4 gap-y-4 justify-around items-center  scroll-mt-28"> 
            <div className="flex items-center border- border-blue-700 px-5 py-10 rounded-lg"> 
            
                <div className="flex flex-col gap-y-5"> 
                        <div className=" flex flex-col gap-y-2"> 
                            <h1 className=" text-6xl lg:text-7xl xl:text-8xl text-slate-700">BUILDING<br/> TRUST, <br/> BUILDING<br/> DREAMS </h1>
                            <div className="w-5/6">
                                <p className="text-lg text-slate-500">Transforming homes through expert renovations & quality Construction</p>
                            </div>
                            
                        </div>
                        <Button variant="destructive" className="w-1/3">Consult <br/> <MdContactPhone /></Button>
                </div>
             

            </div>
            <Carousel>
                    <CarouselContent>
                            <CarouselItem>
                                <Image 
                                    src={heroimage}
                                    className="rounded-lg"
                                    width={670}
                                    height={300}
                                    alt="Picture of the author"/>
                            </CarouselItem>
                            <CarouselItem>...</CarouselItem>
                            <CarouselItem>...</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
            </Carousel>


      
    </section>

    )
    }