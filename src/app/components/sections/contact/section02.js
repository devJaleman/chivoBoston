'use client'

import Form from "./form.js";
import Image from 'next/image'
import img01 from '../../../../../public/img/contact/section02img01.webp'

export default function Section02() {
	let title1 = "Connect"; 
	let title2 = "with us"; 
	let subTitle = "COME VISIT US OR SEND US A MESSAGE";
  	return (
    	<div className="w-full min-h-[500px] pt-10   bg-amber-50 flex  flex-col justify-center items-center ">


			<div className="w-full px-5 flex flex-col justify-center items-center">

				<div className="text-orange-700 HaydonBrush text-8xl">{title1}</div>
				<div className="text-orange-700 SunMore text-6xl my-5">{title2}</div>
				<div className="text-slate-900 SunMore text-2xl text-center">{subTitle}</div>

			</div>

			<div className="w-full px-5 flex flex-col lg:flex-row justify-center items-center max-w-[1000px]" >

				<div className="w-full  lg:w-1/2 py-5 flex justify-center items-center">
					<Form/>
				</div>


				<div className="w-1/2 hidden lg:block px-5">
					<div className="w-full h-full flex justify-center items-center ">
						<div className="w-[375px] h-[600px]">
							<Image  
								className="h-full"
								src={img01}
								alt=""
							/>
						</div>
					</div>
				</div>

			</div>

		
			
    	</div>
  	)
}
