
import Image from 'next/image'
import Link from 'next/link'
import imgLogo          from "../../../../public/img/company/logoChivoWhite.webp"
import imgFacebook      from "../../../../public/img/social/facebook.webp"
import imgInstagram     from "../../../../public/img/social/instagram.webp"
export default function Footer() {

   return (
      <div className="w-full    text-amber-50 bg-orange-700 py-10">

         <div className="w-full flex flex-col pt-10 sm:justify-center sm:items-center  ">

            <div className="w-full sm:flex sm:justify-center  ">
               <div className="w-full sm:w-[200px] sm:min-w-[200px] md:w-[300px] md:min-w-[300px]  flex justify-center items-center h-32">
                  <div className="w-[300px] flex justify-center items-center">
                     <Image
                        src={imgLogo}
                        width={240}
                        height={70}
                        alt="chivo boston"
                     />
                  </div>
                  
               </div>
               <div className="w-full sm:w-[200px] sm:min-w-[200px] md:w-[260px] md:min-w-[260px]  flex justify-center items-center h-32">
                  <div className="w-[360px] md:w-[260px] md:min-w-[260px] flex flex-row RockGrotesk text-xl ">
                     <div className="w-1/2 flex flex-col items-center" >
                        <Link href="/about" className="mt-2 mb-2">About</Link>
                        <Link href="/order" className="mt-2 mb-2">Order</Link>
                     </div>
                     <div className="w-1/2 flex flex-col items-center" >
                        <Link href="/menu" className="mt-2 mb-2">Menu</Link>
                        <Link href="/contact" className="mt-2 mb-2">Contact</Link>
                     </div>
                  </div>
               </div>
               <div className="w-full sm:w-[200px] sm:min-w-[200px] md:w-[260px] md:min-w-[260px] flex justify-center items-center h-32">
                  <div className="w-[300px] md:w-[260px] md:min-w-[260px] flex flex-row  ">
                     <div className="w-1/2 flex justify-center items-center" >
                        <a href="https://www.facebook.com/profile.php?id=100092233719093" target="_blank">
                           <Image
                              src={imgFacebook}
                              width={50}
                              height={50}
                              alt="chivo boston"
                           />
                        </a>
                     </div>
                     <div className="w-1/2 flex justify-center items-center" >
                        <a href="https://www.instagram.com/chivo.taqueria/" target="_blank">
                           <Image
                              src={imgInstagram}
                              width={50}
                              height={50}
                              alt="chivo boston"
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>


           






            <div className="w-full flex flex-col ">
               <div className="w-full flex justify-center items-center h-20 sm:h-10">
                  <div className="w-[300px] sm:w-[600px] text-lg text-center">1728 Massachusetts Ave Cambridge MA 02138</div>
               </div>
               <div className="w-full flex justify-center items-center h-20 sm:h-10">
                  <div className="w-[300px] sm:w-[600px] text-lg text-center">© 2023 CHIVO TAQUERIA</div>
               </div>
            </div>
         </div>

        

      </div>
   )
}
