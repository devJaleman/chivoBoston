'use client'
import Title from "./title.js"
import Image from 'next/image'
import img01 from '../../../../../public/img/index/section05img02.webp'


export default function Section11() {
  	return (
    	<div className="w-full py-20  px-5 bg-amber-50 flex  flex-col justify-center items-center relative ">

         <div className="w-[280px] h-[280px] hidden xl:block absolute right-0 top-0">
            <Image  
               className="w-full"
               src={img01}
               alt=""
            />
         </div>

         

			<div className="w-full flex flex-col justify-center items-center">
            <div className="w-full text-center mb-10"><Title title="House Drinks" /></div>
      
            <div className="w-full flex flex-col justify-center items-center mt-5">

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[150px] flex justify-center items-center">
                        maranon
                        cashew
                     </div>
                 
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $3.50
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] lg:w-[300px] SunMore text-center text-orange-700 text-3xl  min-h-[150px] flex justify-center items-center">
                        Flor de jamaica/
                        hibiscus flower
                     </div>
       
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $3.50
                     </div>
                  </div>



                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] lg:w-[300px] SunMore text-center text-orange-700 text-3xl min-h-[150px] flex justify-center items-center ">
                        HORCHATA
                        iced latte

                     </div>
                    
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $4.99
                     </div>
                  </div>


               </div>

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center  items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] lg:w-[300px] SunMore text-center text-orange-700 text-3xl min-h-[150px] flex justify-center items-center">
                     Pina colada
                     </div>
                     
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                     $4.99
                     </div>
                    
                  </div>

               </div>

            </div>
         </div>
         
    	</div>
  	)
}
