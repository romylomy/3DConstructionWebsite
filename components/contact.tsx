import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact(){
    return(
        <section id="contact" className=' flex justify-center scroll-mt-20 py-5'>
          <div className=' mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'>
                
                <h1 className='mb-8 font-semibold text-center text-5xl text-slate-700 md:text-5xl xl:text-7xl'>Contact</h1>
                <p className='text-gray-700'>Please contact me directly at {""} 
                    <a className='underline' href="mailto:corpuz52@gmail.com">
                        corpuz52@gmail.com
                    </a> {""}
                    or through this form.
                </p>
                <div className=" p-3 rounded-lg">
                        <p>Phone: 403-969-8984</p>
                        <p>Toll free: 855-850-9256</p>
                        <p>Fax: 855-850-9256</p>
                        

                </div>

                <form 
                    className='mt-10 flex flex-col'
                >
                    <input 
                        type="email" 
                        className='h-14 px-4 rounded-lg border-2 border-black'
                        placeholder="Your email"
                        name="senderEmail"
                        required
                        maxLength={500} />

                    <textarea 
                        className='h-52 p-4 my-3 rounded-lg border-2 border-black '
                        placeholder="Your message"
                        name="message"
                        required
                        maxLength={500}/>

                    <button type="submit"  className=" group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
                        focus:scale-105
                        hover:scale-110
                        active:scale-105
                        hover:bg-gray-950">
                        Submit <FaPaperPlane className='text-xs  opacity-70 transition-all
                        group-hover:translate-x-1
                        '/>
                    </button>
            


                </form>

            </div>
        
        </section>
    )
}