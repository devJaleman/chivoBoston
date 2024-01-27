'use client'
import Title from "./title.js"
import Image from 'next/image'
import img01 from '../../../../../public/img/index/section03img01.webp'
import img02 from '../../../../../public/img/index/section05img03.webp'


export default function Section03() {
  	return (
    	<div className="w-full py-20  px-5 bg-amber-50 flex  flex-col justify-center items-center relative ">

         <Image  
				width={300}
			   height={300}
				loading="lazy"
				src={img01}
				alt="Picture of the author"
			/>


         <Image  
            className="hidden xl:block absolute left-0 top-36"
				width={280}
			   height={280}
				loading="lazy"
				src={img02}
				alt="Picture of the author"
			/>
			<div className="w-full flex flex-col justify-center items-center">
            <div><Title title="Burritos" /></div>
            <div className="text-slate-800 my-5 text-2xl HoarseSolid text-center max-w-[1000px] ">
               Includes 5 toppings: rice, beans, lettuce, pico de
               gallo, onion with cilantro and your choice of salsa
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-5">

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[72px] flex justify-center items-center">
                        BURRITOS
                     </div>
                     <div className="w-full md:h-[40px]  text-slate-800  flex justify-center items-start text-center text-lg"></div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        SMALL $9.99
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        LARGE $10.99
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl">HUEVOS RANCHEROS</div>
                     <div className="w-full md:h-[40px]  text-slate-800  flex justify-center items-start text-center text-lg"></div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        LARGE $10.99
                     </div>
                  </div>



                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl">Chivo’s Breakfast</div>
                     <div className="w-full md:h-[40px]   text-slate-800  flex justify-center items-start text-center text-lg">
                        Tortilla: Flour, Spinach or Wheat
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        SMALL $9.99
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        LARGE $10.99
                     </div>
                  </div>




               </div>

            </div>
         </div>
         
    	</div>
  	)
}
