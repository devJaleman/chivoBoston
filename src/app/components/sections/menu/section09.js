'use client'
import Title from "./title.js"



export default function Section09() {
  	return (
    	<div className="w-full py-20  px-5 bg-amber-50 flex  flex-col justify-center items-center relative ">

      
			<div className="w-full flex flex-col justify-center items-center">
            <div><Title title="Tamales" /></div>
            <div className="text-slate-800 my-5 text-2xl HoarseSolid text-center max-w-[1000px] ">
            Corn dough wrapped in a plantain leaf, filled with
            chicken and potatoes.
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-5">

               <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                           $4.99
               </div>

            </div>
         </div>
         
    	</div>
  	)
}
