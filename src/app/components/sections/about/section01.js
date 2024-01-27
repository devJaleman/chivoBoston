'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/about/section01img01.webp'
export default function Section01() {
	let title = "ABOUT";
  	return (
    	<div className="w-full   bg-pink-300 flex  flex-col justify-center items-center md:flex-row">

			<div className="w-full max-w-[500px] flex justify-center items-center">
				<Image  
					className="w-full"
					src={img01}
					alt=""
				/>
			</div>

			<div className="w-full max-w-[500px] flex justify-center items-center HoarseSolid text-orange-700 text-6xl py-20">
				{title}
			</div>
			
    	</div>
  	)
}
