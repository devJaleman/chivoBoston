'use client'
export default function Section01() {
  	return (
    	<div className="w-full h-[600px]  bg-orange-700 flex  flex-col justify-center items-center relative ">
			<div className="backImgMenu bg-cover bg-center bg-no-repeat w-full h-full max-w-[1200px] hidden md:block"></div>
			<div className="w-full h-full absolute top-0 left-0  flex justify-center items-center md:justify-end">
				<div className="text-white HoarseSolid text-5xl md:mr-[20%] lg:mr-[25%] xl:mr-[30%]">MENU</div>
			</div>
    	</div>
  	)
}
