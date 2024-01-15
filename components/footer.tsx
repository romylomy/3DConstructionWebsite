import Contact from "@/components/contact"

export default function Footer(){
    return(
             

        <footer className="bg-slate-50 rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">3D Construction</span>
                    </a>
                <div className="sm:flex sm:items-center justify-between">
                    
                    <div className=" p-3 rounded-lg">
                        <p>Phone: 403-969-8984</p>
                        <p>Toll free: 855-850-9256</p>
                        <p>Fax: 855-850-9256</p>
                        

                    </div>
                    <div className="bg-slate-100 p-3 rounded-lg">
                        <h2>Hours</h2>
                        <div className="flex items-center gap-x-2 ">
                        
                            <ul className="text-slate-700 dark:text-slate-700 font-medium">
                            
                                <li>Monday</li>
                                <li>Tuesday</li>
                                <li>Wednesday</li>
                                <li>Thursday</li>
                                <li>Friday</li>
                                <li>Saturday</li>
                                <li>Sunday</li>
                            </ul> 
                            <ul className="text-slate-700 dark:text-slate-700 font-medium">
                            
                                <li>8:00am-9pm</li>
                                <li>8:00am-9pm</li>
                                <li>8:00am-9pm</li>
                                <li>8:00am-9pm</li>
                                <li>8:00am-9pm</li>
                                <li>Close</li>
                                <li>Close</li>                           
                            </ul>    
                        </div>

                    </div>
                    
                   
            </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>

   






        
    )
}