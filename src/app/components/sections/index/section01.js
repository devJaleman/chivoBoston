'use client'
import Image from 'next/image'
import img from '../../../../../public/img/index/section01img01.webp'
import BtnExt from '../../buttons/BtnExt'
export default function Section01() {
	let textTitle = "TACOS,	BURRITOS, PUPUSAS	Y MAS.";
	let textBtn = "ORDER HERE";
  	return (
    	<div className="w-full min-h-[500px]  bg-amber-500 flex  flex-col sm:flex-row ">
			<div className="w-full sm:w-1/2 flex flex-col justify-center items-center py-10">
				<div className="SunMore text-orange-700 text-5xl text-left w-[300px] my-10 leading-[60px]">
					{textTitle}
				</div>
				<div className="w-[300px]">
					<BtnExt title={textBtn}  url="https://www.clover.com/online-ordering/chivo-taqueria-cambridge"/>
				</div>
			</div>
			<div className="w-full min-h-full sm:w-1/2   flex justify-end ">
				<div className="flex items-end">
					<Image  
						className="w-full"
						src={img}
						alt=""
					/>
				</div>
			</div>
    	</div>
  	)
}
