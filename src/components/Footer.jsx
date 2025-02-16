import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 mb-[50px]">
    <div className="container mx-auto">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-y-7">
      
          <a className='flex flex-col items-center justify-center' href="mailto:mouradboumazough@gmail.com" target='__black'>
            <BiMailSend className='hover:scale-150 cursor-pointer w-[30px] h-[30px]'/>
            <h4>Email</h4>
            <h5>mouradboumazough@gmail.com</h5>
        
          </a>
          <a className='flex flex-col items-center justify-center'
          href="https://www.linkedin.com/in/boumazough-morad/" target='__black'>
            <FaLinkedinIn  className='hover:scale-150 cursor-pointer w-[30px] h-[30px]'/>
            <h4>Linkden</h4>
            <h5>morad boumazough</h5>
          
          </a>
          <a className='flex flex-col items-center justify-center' href="https://api.whatsapp.com/send?phone=+212649952417" target='__black'>
            <FaWhatsapp className='hover:scale-150 cursor-pointer w-[30px] h-[30px]'/>
            <h4>Whatsapp</h4>
            <h5>+212 6 49 95 24 17</h5>
          
          </a>
   


            {/* Button */}
           
        </div>
    </div>
</footer>
  )
}
