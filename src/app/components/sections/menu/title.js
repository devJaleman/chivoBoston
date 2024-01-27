'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/menu/title01.webp'
import img02 from '../../../../../public/img/menu/title02.webp'
export default function Title(props) {
  	return (
    	<div className="w-full flex flex-row justify-center items-center  ">
			<div className="hidden md:block">
            <div className="mr-5">
					<div className="w-[36px] h-[100px]">
						<Image  
							className="w-full"
							src={img01}
							alt=""
						/>
					</div>
            </div>
         </div>
         <div className="text-orange-700 HaydonBrush text-8xl   ">{props.title}</div>
         <div className="hidden md:block">
            <div className="ml-14">
					<div className="w-[36px] h-[100px]">
						<Image  
							className="w-full"
							src={img02}
							alt=""
						/>
					</div>

            </div>
         </div>
    	</div>
  	)
}
