'use client'
import Link from 'next/link'


export default function Section06() {

   let title = "ORDER HERE";
   let textBtn1 = "DELIVERY";
   let textBtn2 = "TO PICK UP";
   let textBtn3 = "ORDER";

  	return (
    	<div className="w-full  bg_01 bg-cover bg-center  flex flex-col   justify-center items-center sm:py-10  xl:py-10 ">

         <div className="w-full flex justify-center items-center my-10  max-w-[660px]">
            <div className="text-amber-50 HoarseSolid text-6xl text-center md:w-60" >{title}</div>
         </div>

         <div className="w-full flex flex-col px-10 md:px-0 text-amber-50 SunMore text-3xl  max-w-[660px]">

            <div className="w-full flex flex-col md:flex-row md:justify-between">
               <Link  href="/order" className="w-full md:w-[300px] h-32 border-4 border-amber-50 rounded-3xl mb-8 flex justify-center items-center cursor-pointer">
                  {textBtn1}
               </Link>
               <a target="_blank" href="https://www.clover.com/online-ordering/chivo-taqueria-cambridge" className="w-full md:w-[300px] h-32 border-4 border-amber-50 rounded-3xl mb-8 flex justify-center items-center cursor-pointer">
                  {textBtn2}
               </a>
            </div>
            <Link  href="/order" className="w-full h-32 border-4 border-amber-50 rounded-3xl mb-8 flex justify-center items-center cursor-pointer">
                  {textBtn3}
            </Link>
         </div>

    
         
    
    	</div>
  	)
}
