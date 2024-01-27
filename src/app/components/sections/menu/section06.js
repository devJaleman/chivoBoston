'use client'
import Title from "./title.js"
import Image from 'next/image'
import img01 from '../../../../../public/img/index/section03img02.webp'
import img02 from '../../../../../public/img/index/section02img01.webp'


export default function Section06() {
  	return (
    	<div className="w-full py-20  px-5 bg-amber-50 flex  flex-col justify-center items-center relative ">

         <div className="w-[300px] h-[300px]">
            <Image  
               className="w-full"
               src={img01}
               alt=""
            />
         </div>

         <div className="w-[280px] h-[280px] hidden xl:block absolute right-0 top-36">
            <Image  
               className="w-full"
               src={img02}
               alt=""
            />
         </div>

         
			<div className="w-full flex flex-col justify-center items-center">
            <div><Title title="Tacos" /></div>
            <div className="text-slate-800 my-5 text-2xl HoarseSolid text-center max-w-[1000px] ">
               Choice of corn or flour tortilla, with 4 toppings in
               cluded: protein, pico de gallo, onions & cilantro with
               a choice of salsa
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-5">

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[72px] flex justify-center items-center">
                        single taco
                     </div>
                     <div className="w-full md:h-[80px]  text-slate-800  flex justify-center items-start text-center text-lg">

                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $3.75
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[72px] flex justify-center items-center">taco combo</div>
                     <div className="w-full md:h-[80px]  text-slate-800  flex justify-center items-start text-center text-lg">
                        3 Tacos with choice of protein,
                        rice and beans.
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $15
                     </div>
                  </div>



                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[72px] flex justify-center items-center">taco salad</div>
                     <div className="w-full md:h-[80px]   text-slate-800  flex justify-center items-start text-center text-lg">
                        Fried flour tortilla shell with lettuce,
                        and your choice of toppings
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $10.99
                     </div>
                  </div>


               </div>

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center  items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[72px] flex justify-center items-center">Tostadas</div>
                     <div className="w-full md:h-[100px]   text-slate-800  flex justify-center items-start text-center text-lg">
                        Crispy fried tortilla with refried
                        beans, choice of protein, lettuce,
                        cheese, crema & choice of salsa
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
