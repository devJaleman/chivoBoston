'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/about/section03img01.webp'
export default function Section03() {
	let title = "TRADITION,	FLAVOR 	& TASTE";
  	return (
    	<div className="w-full   bg-[#4CA47B] flex  flex-col justify-center items-center lg:py-16 ">

			<div className="w-full max-w-[1200px] flex  flex-col justify-center items-center md:flex-row">

				<div className="w-full md:w-1/5 flex justify-center items-center">

					<div className="w-[200px]">
						<Image  
						className="w-full"
							src={img01}
							alt=""
						/>
					</div>

					

				</div>

				<div className="w-full md:w-3/5 flex justify-center items-center">

					<div className="w-full text-center text-amber-50 text-4xl HoarseSolid  ">{title}</div>
					
				</div>

				<div className="w-full md:w-1/5 flex justify-center items-center">

					<div className="w-[200px]">
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
