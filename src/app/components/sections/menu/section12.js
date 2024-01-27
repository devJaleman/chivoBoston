'use client'
import Title from "./title.js"
import Image from 'next/image'
import img01 from '../../../../../public/img/menu/section12img01.webp'


export default function Section12() {
  	return (
    	<div className="w-full py-20  px-5 bg-amber-50 flex  flex-col justify-center items-center relative ">


         <div className="w-[300px] h-[300px]">
            <Image  
               className="w-full"
               src={img01}
               alt=""
            />
         </div>
         

			<div className="w-full flex flex-col justify-center items-center">
            <div className="w-full text-center "><Title title="Natural juices" /></div>
      
            <div className="w-full flex flex-col justify-center items-center mt-5">

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[150px] flex justify-center items-center">
                        jugo
                        verde
                     </div>

                     <div className="w-full md:h-[80px]  text-slate-800  flex justify-center items-start text-center text-lg">
                        Kale, spinach, celery, cucumber,
                        green apple, orange, ginger
                     </div>
                 
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $7.99
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] lg:w-[300px] SunMore text-center text-orange-700 text-3xl  min-h-[150px] flex justify-center items-center">
                        jugo
                        paraiso
                     </div>
                     <div className="w-full md:h-[80px]  text-slate-800  flex justify-center items-start text-center text-lg">
                        Beets, green apple, carrots,
                        orange, ginger
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $7.99
                     </div>
                  </div>



                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] lg:w-[300px] SunMore text-center text-orange-700 text-3xl min-h-[150px] flex justify-center items-center ">
                        jugo de
                        naranja

                     </div>

                     <div className="w-full md:h-[80px]  text-slate-800  flex justify-center items-start text-center text-lg">
                        Freshly squeezed orange juice
                     </div>
                    
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $5.99
                     </div>
                  </div>


               </div>

              

            </div>
         </div>
         
    	</div>
  	)
}
