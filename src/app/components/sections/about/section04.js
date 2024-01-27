'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/about/section04img01.webp'

export default function Section01() {

	let text 	= `Chivo Taqueria is a must visit Mexican Salvadoran restaurant in 
						Cambridge for those seeking the best in tradition, flavor, and taste. With its 
						authentic cuisine, warm ambiance, and friendly staff, it's an experience that 
						captures the essence of Mexican and Salvadoran culinary delights`;

  	return (
    	<div className="w-full   bg-amber-50 flex  flex-col justify-center items-center lg:py-10 ">
			<div className="w-full max-w-[1000px] flex flex-col md:flex-row justify-center items-center">
				<div className="w-full md:w-1/2 flex flex-col  justify-center items-center py-10 px-5" >
					<div className="text-slate-800 RockGrotesk text-justify text-xl my-10">{text}</div>
				</div>
				<div className=" w-full md:w-1/2 pb-10" >
					<div className="w-full  flex justify-center items-center px-5">
						<div className="w-full max-w-[400px]">
							<Image  
								className="w-full"
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
