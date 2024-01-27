'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/index/section05img01.webp';
import img02 from '../../../../../public/img/index/section05img02.webp';


export default function Section05() {

   let title = "Connect";
   let subTitle = "with us";
   let text1 = "Address";
   let subText1 = "hello@chivoboston.com";
   let text2 = "Phone";
   let subText2 = "(857) 242-3343";
   let text3 = "DELIVERY & TAKE OUT";
   let subText3_1 = "OPEN 7 DAYS A WEEK!";
   let subText3_2 = "8am - 11pm";

  	return (
    	<div className="w-full  bg-amber-500 flex flex-col md:flex-row  justify-center items-center  xl:py-8 ">
         <div className="hidden w-2/6 md:block ">
            <div className=" w-full py-10 flex justify-center items-center">

               <div className="w-[400px]">
                  <Image  
                     className="w-full"
                     src={img02}
                     alt=""
                  />

               </div>
               
            </div>
         </div>
         <div className="w-full md:w-2/6 py-10 flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
               <div className="w-full text-center HaydonBrush text-9xl text-orange-700">{title}</div>
               <div className="w-full text-center SunMore text-7xl text-orange-700 mt-5">{subTitle}</div>
               <div className="w-full mt-10">
                  <div className="w-full text-center SunMore text-4xl text-slate-900 ">{text1}</div>
                  <div className="w-full text-center  text-2xl text-slate-900" >{subText1}</div>
               </div>
               <div className="w-full mt-10">
                  <div className="w-full text-center SunMore text-4xl text-slate-900 ">{text2}</div>
                  <div className="w-full text-center  text-2xl text-slate-900" >{subText2}</div>
               </div>
               <div className="w-full my-10">
                  <div className="w-full text-center SunMore text-4xl text-slate-900 ">{text3}</div>
                  <div className="w-full text-center  text-2xl text-slate-900" >{subText3_1}</div>
                  <div className="w-full text-center  text-2xl text-slate-900" >{subText3_2}</div>
               </div>
            </div>
         </div>
         <div className="hidden w-2/6 md:block ">
            <div className=" w-full py-10 flex justify-center items-center">
               <div className="w-[400px]">
                  <Image  
                     className="w-full"
                     src={img01}
                     alt=""
                  />
               </div>
            </div>
         </div>
    	</div>
  	)
}
