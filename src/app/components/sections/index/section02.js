'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/index/section02img01.webp';


export default function Section02() {
	let textTitle = "Welcome to chivo";
	let textSubTitle1 = "WE ARE NOW OPEN";
   let textSubTitle2 = "Monday through Sunday";
   let textSubTitle3 = "8am to 11pm";
  	return (
    	<div className="w-full  bg-orange-700 flex  flex-col md:flex-row">

         <div className="w-full h-[300px]  flex justify-center items-center md:w-1/2 md:h-[500px] xl:justify-end xl:mr-[5%]">
            <div className="w-[300px] h-[240px] md:hidden">
               <Image  
						className="w-full"
						loading="lazy"
						src={img01}
						alt="Picture of the author"
					/>
            </div>

            <div className="w-[350px] h-[280px] hidden md:block">
               <Image  
						width={350}
						height={280}
						loading="lazy"
						src={img01}
						alt="Picture of the author"
					/>
            </div>
         </div>
         <div className="w-full h-[400px]  flex justify-center items-center md:w-1/2 md:h-[500px] xl:justify-start xl:ml-[5%]">

            <div className="w-full p-5 flex justify-center items-center md:w-[400px] ">

               <div className="w-full  flex flex-col justify-center items-center text-amber-50 ">
                  <div className=" w-full HoarseSolid text-6xl text-center mb-5">{textTitle}</div>
                  <div className=" w-full text-2xl ">
                     <div className="flex justify-center items-cente flex-row text-center">¡<div className="RockGrotesk">{textSubTitle1}</div>!</div>
                     <div className="RockGrotesk text-center">{textSubTitle2}</div>
                     <div className="RockGrotesk text-center">{textSubTitle3}</div>
                  </div>
               </div>

            </div>

         </div>
			
    	</div>
  	)
}
