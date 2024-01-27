'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/order/section01img01.webp'
export default function Section01() {
	let title = "ORDER";
  	return (
    	<div className="w-full   bg-[#4CA47B] flex  flex-col justify-center items-center md:flex-row">
			<div className="w-full max-w-[500px] flex justify-center items-center">
				<div className="w-full max-w-[500px]">
					<Image  
						className="w-full"
						src={img01}
						alt=""
					/>
				</div>
			</div>
			<div className="w-full max-w-[500px] flex justify-center items-center HoarseSolid text-amber-50 text-6xl py-20">
				{title}
			</div>
    	</div>
  	)
}
