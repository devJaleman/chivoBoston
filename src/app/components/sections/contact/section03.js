'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/contact/section03img01.webp'
export default function Section03() {
  	return (
    	<div className="w-full min-h-[500px]  bg-orange-700 flex  flex-col justify-center items-center  py-10">
			<div className="w-full  flex  flex-col justify-center items-center md:flex-row max-w-[1000px]">
				<div className="w-full md:hidden">
					<div className="w-full flex justify-center items-center">
						<div className="w-[400px] ">
							<Image  
								className="w-full"
								src={img01}
								alt=""
							/>
						</div>
					</div>
				</div>





				<div className=" flex flex-col justify-center items-center w-full  h-full  md:w-1/2  py-16  ">

					<div className="flex flex-col justify-center items-center text-amber-50 "> 

						<div className="flex flex-col w-full justify-center items-center">
							<div className="HoarseSolid text-4xl">Address</div>
							<div className="text-2xl my-2">hello@chivoboston.com</div>
						</div>

						<div className="flex flex-col w-full justify-center items-center my-10">
							<div className="HoarseSolid text-4xl">Phone</div>
							<div className="text-2xl my-2">(857) 242-3343</div>
						</div>


						<div className="flex flex-col w-full justify-center items-center">
							<div className="HoarseSolid text-4xl w-full text-center">DELIVERY & TAKE OUT</div>
							<div className="text-2xl my-2">OPEN 7 DAYS A WEEK!</div>
							<div className="text-2xl my-2">8am - 11pm</div>
						</div>

					</div>


				</div>





				<div className="w-1/2 hidden md:block">
					<div className="w-full flex justify-center items-center">
						<div className="w-[500px] ">
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
