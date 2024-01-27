'use client'
import Image from 'next/image'
import BtnInt from '../../buttons/BtnInt';
import img01 from '../../../../../public/img/index/section03img01.webp';
import img02 from '../../../../../public/img/index/section03img02.webp';
import img03 from '../../../../../public/img/index/section03img03.webp';

export default function Section03() {

   let title = "Menu";
   let subTitle = "discover everything we have for you:";
   let text1 = "BURRITOS";
   let text2 = "TACOS";
   let text3 = "EXTRAS";
   let textBtn = "VIEW ALL";

  	return (
    	<div className="w-full  bg-amber-50 flex  flex-col  justify-center items-center">


			<div className="w-full flex flex-col items-center justify-center text-slate-800 mt-10 mb-10 md:mt-20 md:mb-16 ">

            <div className="w-full text-center HaydonBrush text-9xl text-orange-700">{title}</div>
            <div className="w-full text-center SunMore text-3xl font-bold">{subTitle}</div>

         </div>

         <div className="w-full flex flex-col md:flex-row justify-center items-center">

            <div className="w-[300px] h-[300px] flex flex-col  justify-center items-center mb-16">

               <Image  
                  className="w-full mb-5"
						src={img01}
						alt=""
					/>
               <div className="SunMore text-orange-700 text-3xl" >{text1}</div>

            </div>
            <div className="w-[300px] h-[300px] flex flex-col  justify-center items-center mb-16 lg:mx-5 xl:mx-10">

               <Image  
                  className="w-full mb-5"
						src={img02}
						alt=""
					/>
               <div className="SunMore text-orange-700 text-3xl">{text2}</div>
               
            </div>
            <div className="w-[300px] h-[300px] flex flex-col  justify-center items-center mb-16">

               <Image  
                  className="w-full mb-5"
						src={img03}
						alt=""
					/>
               <div className="SunMore text-orange-700 text-3xl">{text3}</div>
            </div>


            
         </div>


         <div className="mt-10 mb-10 md:mt-16 md:mb-16">
            <BtnInt title={textBtn} url="/menu"  />
         </div>


    	</div>
  	)
}
