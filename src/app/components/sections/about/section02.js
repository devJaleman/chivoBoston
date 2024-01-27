'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/about/section02img01.webp'
import img02 from '../../../../../public/img/about/section02img02.webp'
export default function Section01() {
	let title1 	= `Sit back, relax and enjoy the flavors.`;
	let text1 	= `Chivo Taqueria is a vibrant Mexican Salvadoran restaurant 
						located in the heart of Cambridge. Known for its rich culinary 
						tradition and authentic flavors, Chivo Taqueria offers a dining 
						experience that tantalizes the taste buds and transports guests 
						to the streets of Mexico and El Salvador.`;
	let title2 	= `Born in Boston. Made in Mexico & El Salvador`;
	let text2 	= `Step inside our restaurant, and you'll be greeted by a warm and inviting atmosphere, 
						decorated with vibrant colors and traditional artwork. The aroma of 
						sizzling meats, aromatic spices, and freshly made tortillas fills the air, 
						setting the stage for a memorable culinary journey.`;
  	return (
    	<div className="w-full   bg-amber-50 flex  flex-col justify-center items-center lg:py-10 ">

			<div className="w-full max-w-[1000px] flex flex-col md:flex-row justify-center items-center">

				<div className="w-full md:w-1/2 flex flex-col  justify-center items-center py-10 px-5" >

					<div className="text-orange-700 HoarseSolid text-justify text-4xl ">{title1}</div>
					<div className="text-slate-900 RockGrotesk text-justify text-xl my-10">{text1}</div>

				</div>

				<div className="w-full md:w-1/2 flex justify-center items-center px-5" >
					<Image  
						className="h-full"
						src={img01}
						alt=""
					/>
				</div>

			</div>



			<div className="w-full max-w-[1000px] flex flex-col md:flex-row justify-center items-center">

				<div className=" hidden w-1/2  md:block" >
					<div className="w-full  flex justify-center items-center px-5">
						<Image  
							className="h-full"
							src={img02}
							alt=""
						/>
					</div>
				</div>

				<div className="w-full md:w-1/2 flex flex-col  justify-center items-center py-10 px-5" >

					<div className="text-orange-700 HoarseSolid text-justify text-4xl ">{title2}</div>
					<div className="text-slate-800 RockGrotesk text-justify text-xl my-10">{text2}</div>

				</div>

				

				<div className=" w-full md:hidden pb-10" >
					<div className="w-full  flex justify-center items-center px-5">
						<Image  
							className="h-full"
							src={img02}
							alt=""
						/>
					</div>
				</div>

				

			</div>


			
    	</div>
  	)
}
