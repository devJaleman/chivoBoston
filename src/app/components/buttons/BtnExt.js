const BtnExt = ({title,url}) => {
   return ( 
      <a 
         href={url} target="_blank"
         className="w-[200px] h-[60px] cursor-pointer rounded-full tracking-[6px]  bg-slate-900 hover:bg-slate-800 text-slate-50 flex justify-center items-center RockGrotesk">
         {title}
      </a>
   );
}
 
export default BtnExt;