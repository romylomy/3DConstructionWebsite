import Image from "next/image"
import kitchen from "@/public/kitchen.webp";
import bathroom from "@/public/bathroom.webp";
import basement from "@/public/basement.png";

export default function Services(){
    return(
        <section id="services" className=" w-full justify-around items-center my-15  scroll-mt-28">
            <div className="bg-blue-300 p-5">
                    <div className="flex items-center  px-5 pt-5 pb-5 rounded-lg"> 
                    
                    <div className="flex flex-col gap-y-5"> 
                            <div className=" flex flex-col gap-y-2"> 
                                <h1 className=" text-6xl lg:text-7xl text-slate-700">SERVICES</h1>
                                <div className="w-5/6">
                                    <p className="text-lg text-slate-500">"your trusted home renovation experts"</p>
                                </div>
                                
                            </div>
                    </div>

                

                </div>
                <div className="flex items-center ">
                    <div className="px-2 lg:w-1/2">
                        <p>Specializing in general contracting, bathroom and kitchen renovations, Damon’s hands-on approach ensures meticulous attention to detail 
                                and a seamless construction process.From design to permits, his goal is to streamline every aspect, keeping projects on time, on budget, and exceeding client expectations.
                            With a focus on open communication and real-time progress updates, Damon invites clients to witness their vision come to life.
                        </p>
                    </div>
                
                
                </div>

            </div>
           
            <div className="grid lg:grid-cols-3 my-10 gap-x-2 gap-y-2">
                <div className="p-3  rounded-lg border-slate-700 border-2 "> 
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl">Kitchen</h2>
                        <Image 
                                    src={kitchen}
                                    className="rounded-lg"
                                    width={70}
                                    height={70}
                                    alt="Picture of the author"/>
                    </div>
                    <p className="py-2">We specialize in transforming outdated kitchens into stylish and functional
                     spaces that enhance your cooking experience and elevate the heart of your home.
                    </p>
                </div>
                <div className="p-3   rounded-lg border-slate-700 border-2">
                   <div className="flex items-center justify-between ">
                        <h2 className="text-2xl">Bathroom</h2>
                        <Image 
                                    src={bathroom}
                                    className="rounded-lg"
                                    width={70}
                                    height={70}
                                    alt="Picture of the author"/>
                    </div>
                    <p className="py-2">From refreshing powder rooms to creating luxurious spa-like retreats, we excel in delivering 
                        personalized bathroom renovations that combine aesthetics and functionality to suit your unique style and needs.
                    </p>
                </div>

                <div className="p-3  rounded-lg border-slate-700 border-2">
                <div className="flex items-center justify-between ">
                        <h2 className="text-2xl">Basement</h2>
                        <Image 
                                    src={basement}
                                    className="rounded-lg"
                                    width={70}
                                    height={70}
                                    alt="Picture of the author"/>
                    </div>
                    <p className="py-2">We oversee every aspect of your construction project, ensuring seamless coordination, exceptional craftsmanship, and timely completion.
                    </p>
                </div>
            
            </div>
           
           

        </section>
    )
}