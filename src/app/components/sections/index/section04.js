'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/index/section04img01.webp';
import BtnInt from '../../buttons/BtnInt.js';


export default function Section04() {

   let title = "ABOUT CHIVO"; 
   let subTitle = "Chivo taqueria is an authentic Mexican Restaurant serving up Boston's best tacos,   burritos, pupusas, bowls and quesadillas.";
   let textBtn = "VIEW ALL";

  	return (
    	<div className="w-full  bg-pink-300 flex  flex-col md:flex-row  justify-center items-center lg:px-10 xl:px-20">

         <div className="w-full  py-5 md:hidden ">
            <div className="w-full   flex justify-center items-center">
               <div className="w-full max-w-[500px] px-5">
                  <Image  className="w-full" 
                     src={img01}
                     alt=""
                  />
               </div>
            </div>
         </div>


         <div className="w-full md:w-2/5 py-5 flex justify-center items-center">

            <div className="w-full flex flex-col justify-center items-center px-6">

               <div className="HoarseSolid text-orange-700 text-6xl text-center">{title}</div>
               <div className="RockGrotesk text-slate-900 text-xl text-justify mt-10 max-w-[500px]">{subTitle}</div>
               

            </div>

         </div>


         <div className="hidden w-3/5  py-5 md:block ">
            <div className="w-full   flex justify-center items-center">
               <div className="w-full  max-w-[800px] px-5 ">
                  <Image  className="w-full" 
                     src={img01}
                     alt=""
                  />
               </div>
            </div>
         </div>

			

        




    	</div>
  	)
}
