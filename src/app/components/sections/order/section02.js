'use client'
import Image from 'next/image'
import img01 from '../../../../../public/img/order/section02img01.webp'
import img02 from '../../../../../public/img/order/section02img02.webp'
import img03 from '../../../../../public/img/order/section02img03.webp'
import img04 from '../../../../../public/img/order/section02img04.webp'
import img05 from '../../../../../public/img/order/section02img05.webp'

export default function Section02() {
	let title1 = "start your pick-up or delivery order here";
	let title2 = "Or select your	preferred delivery service:";
  	return (
    	<div className="w-full   bg-amber-50  flex  flex-col  justify-center items-center  py-10">

			<div className="SunMore flex w-full max-w-[500px] lg:max-w-[600px] px-5 justify-center items-center text-orange-700 text-3xl text-center mt-10 ">
				{title1}
			</div>

			<div className="w-full flex flex-col lg:flex-row justify-center items-center  px-5 py-10">
				<div className="hidden lg:block w-1/5 ">
					<div className=" w-full flex justify-center items-center">
						<div className="w-[140px]">
							<Image  
								className="w-full"
								src={img01}
								alt=""
							/>
						</div>
						

					</div>
				</div>
				<div className="w-full  lg:w-3/5  max-w-[500px] md:w-[700px] md:max-w-[700px]  flex  flex-col md:flex-row justify-center items-center md:justify-between SunMore text-2xl text-slate-800">
					<a 
						href="https://www.clover.com/online-ordering/chivo-taqueria-cambridge" target="_blank" 
						className="cursor-pointer w-full md:w-[300px] lg:w-[280px] h-[100px] border-2 border-solid border-slate-800 rounded-lg flex justify-center items-center mb-9 md:mb-0">
						DELIVERY
					</a>
					<a 
						href="https://www.clover.com/online-ordering/chivo-taqueria-cambridge" target="_blank" 
						className="cursor-pointer w-full md:w-[300px] lg:w-[280px] h-[100px] border-2 border-solid border-slate-800 rounded-lg flex justify-center items-center">
						TO PICK UP
					</a>
				</div>
				<div className="hidden lg:block w-1/5 ">
					<div className=" w-full flex justify-center items-center">
						<div className="w-[140px]">
							<Image  
								className="w-full"
								src={img02}
								alt=""
							/>
						</div>

					</div>
				</div>
			</div>

			<div className="SunMore flex w-full max-w-[500px] lg:max-w-[600px] px-5 justify-center items-center text-orange-700 text-3xl text-center ">
				{title2}
			</div>

			<div className="w-full max-w-[500px]  flex flex-col md:flex-row  justify-center md:justify-between md:max-w-[1000px] items-center  px-5 py-10">

				<div className="w-full md:w-[220px] lg:w-[300px] border-2 border-solid border-slate-800 rounded-lg flex justify-center items-center bg-white">
					<div className="w-[200px]">
						<Image  
							className="w-full"
							src={img03}
							alt=""
						/>
					</div>
				</div>
				<div className="w-full md:w-[220px] lg:w-[300px] border-2 border-solid border-slate-800 rounded-lg flex justify-center items-center my-10 bg-slate-800">
					<div className="w-[200px]">
						<Image  
							className="w-full"
							src={img05}
							alt=""
						/>
					</div>

				</div>
				<div className="w-full md:w-[220px] lg:w-[300px] border-2 border-solid border-slate-800 rounded-lg flex justify-center items-center bg-white">

					<div className="w-[200px]">
						<Image  
							className="w-full"
							src={img04}
							alt=""
						/>

					</div>
					

				</div>

			</div>
			
			
    	</div>
  	)
}
