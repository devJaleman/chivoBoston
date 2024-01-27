'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/index/section07img01.webp';
import img02 from '../../../../../public/img/index/section07img02.webp';
import img03 from '../../../../../public/img/index/section07img03.webp';
import img04 from '../../../../../public/img/index/section07img04.webp';

export default function Section07() {



  	return (
    	<div className="w-full  bg-amber-50  flex flex-col md:flex-row  justify-center items-center py-10  ">




         <div className=" w-full flex flex-col xl:flex-row justify-center items-center xl:mr-3">
            <div className="w-[300px] h-[300px] my-5 drop-shadow-lg">
               <Image  
						className="w-full"
						src={img01}
						alt=""
					/>
            </div>
            <div className="w-[300px] h-[300px] my-5 drop-shadow-lg  xl:ml-5 2xl:ml-10">
               <Image  
						className="w-full"
						src={img02}
						alt=""
					/>
            </div> 
         </div>



         <div className=" w-full flex flex-col xl:flex-row justify-center items-center xl:ml-3">
            <div className="w-[300px] h-[300px] my-5 drop-shadow-lg">
               <Image  
						className="w-full"
						src={img03}
						alt=""
					/>
            </div>
            <div className="w-[300px] h-[300px] my-5 drop-shadow-lg  xl:ml-5 2xl:ml-10">
               <Image  
						className="w-full"
						src={img04}
						alt=""
					/>
            </div> 
         </div>

         

         

    
         
    
    	</div>
  	)
}
