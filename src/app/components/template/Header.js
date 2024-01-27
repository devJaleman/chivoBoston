'use client'
import Link from 'next/link'
import { motion } from "framer-motion"
import Image from 'next/image'
import imgLogo from "../../../../public/img/company/logoChivo.webp"
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from 'react';
export default function Header() {
   const [isOpen, setIsOpen] = useState(false)
   const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
   }
   const chageMenu = () => {
      setIsOpen(isOpen => !isOpen)
   };
   return (
      <>
         <div className="w-full fixed z-50 top-0 left-0   bg-amber-50">
            <div className="md:hidden w-full h-20 flex flex-row justify-between relative">
               <div className="w-[220px] h-full flex justify-center items-center">
                  <div className="w-[180px]">
                     <Image
                        src={imgLogo}
                        width={170}
                        alt="chivo boston"
                     />
                  </div>
               </div>
               <div className="w-[60px] h-full  flex justify-center items-center">
                  <BiMenu onClick={chageMenu} className={`${isOpen ? 'hidden' : ''} text-3xl text-orange-700 cursor-pointer `} />
                  <BiX onClick={chageMenu} className={`${isOpen ? '' : 'hidden'}  text-4xl text-orange-700 cursor-pointer `} />
               </div>
               <motion.nav
                  animate={isOpen ? "open" : "closed"}
                  variants={variants}
                  className={`w-full h-[calc(100vh-80px)] bg-amber-50 absolute top-20   `}>
                  <div className="w-full h-full flex justify-center items-center">
                     <div className="flex flex-col pb-10 text-center text-orange-700 SunMore text-3xl">
                        <Link className="mt-6 mb-6" onClick={chageMenu} href="/" >HOME     </Link>
                        <Link className="mt-6 mb-6" onClick={chageMenu} href="/about" >ABOUT    </Link>
                        <Link className="mt-6 mb-6" onClick={chageMenu} href="/menu" >MENU     </Link>
                        <Link className="mt-6 mb-6" onClick={chageMenu} href="/order" >ORDER    </Link>
                        <Link className="mt-6 mb-6" onClick={chageMenu} href="/contact" >CONTACT  </Link>
                     </div>
                  </div>   
               </motion.nav>
            </div>
            <div className="hidden md:flex flex-row w-full h-[100px] justify-center items-center ">
               <div className='flex flex-row h-[100px] w-full lg:w-[1000px] xl:w-[1200px] items-center justify-between px-10 xl:px-0 text-orange-700 SunMore '>
                  <Link className="underline-hover"  href="/about" >ABOUT    </Link>
                  <Link className="underline-hover"  href="/menu" >MENU     </Link>
                  <div className="w-[220px] h-full flex justify-center items-center">
                     <Link href="/" className="w-[180px]">
                        <Image
                           src={imgLogo}
                           width={170}
                           alt="chivo boston"
                        />
                     </Link>
                  </div>
                  <Link className="underline-hover"  href="/order" >ORDER    </Link>
                  <Link className="underline-hover"  href="/contact" >CONTACT  </Link>
               </div>
            </div>
         </div>
         <div className="w-full h-20  md:h-[100px]"></div>
      </>
      
   )
}
