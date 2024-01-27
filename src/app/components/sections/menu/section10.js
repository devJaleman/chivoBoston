'use client'
import Title from "./title.js"
import Image from 'next/image'
import img01 from '../../../../../public/img/menu/section10img01.webp'


export default function Section10() {
  	return (
    	<div className="w-full py-20  px-5 bg-amber-50 flex  flex-col justify-center items-center relative ">

         <div className="w-[300px]">
            <Image  
               className="w-full"
               src={img01}
               alt=""
            />
         </div>

         

			<div className="w-full flex flex-col justify-center items-center">
            <div><Title title="Sweets" /></div>
      
            <div className="w-full flex flex-col justify-center items-center mt-5">

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[80px] flex justify-center items-center">
                     flan
                     </div>
                 
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                     $5.99
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl  min-h-[80px] flex justify-center items-center">
                     tres leches  cake
                     </div>
       
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                     $5.99
                     </div>
                  </div>



                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[80px] flex justify-center items-center ">
                     churros
                     </div>
                    
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                     $3.99
                     </div>
                  </div>


               </div>

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center  items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[80px] flex justify-center items-center">
                     sweet quesadillas
                     </div>
                     
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                     SMALL $4.99
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                     LARGE $9.99
                     </div>
                  </div>

               </div>

            </div>
         </div>
         
    	</div>
  	)
}
