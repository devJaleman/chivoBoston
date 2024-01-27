'use client'
import Title from "./title.js"



export default function Section04() {
  	return (
    	<div className="w-full pt-20  px-5 bg-amber-50 flex  flex-col justify-center items-center relative ">

     
			<div className="w-full flex flex-col justify-center items-center">
            <div className="w-full text-center"><Title title="Mexican delights" /></div>

            <div className="w-full flex flex-col justify-center items-center mt-5">

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[72px] flex justify-center items-center">QUESADILLAS</div>
                     
                     <div className="w-full md:h-[140px]  text-slate-800  flex justify-center items-start text-center text-lg">
                        Includes 5 toppings: cheese,
                        choice of protein, beans, pico de
                        gallo, onion with cilantro and your
                        choice of salsa
                     </div>
                     
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        SMALL $9.99
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        SMALL $9.99
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px]   ">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[72px] flex justify-center items-center">NACHOS</div>
                     <div className="w-full   md:h-[140px] text-slate-800  flex justify-center items-start text-center text-lg">
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        LARGE $10.99
                     </div>
                  </div>



                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between ">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[72px] flex justify-center items-center">torta</div>
                     <div className="w-full   md:h-[140px] text-slate-800  flex justify-center items-start text-center text-lg">
                        Mexican sandwich on a soft roll with
                        choice of protein, refried beans,
                        cheese, chipotle sauce, avocado,
                        tomato, salsa, and lettuce.
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
