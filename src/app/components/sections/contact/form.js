'use client'
import { useForm, SubmitHandler } from "react-hook-form"


 
export default function Form() {


   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
   const onSubmit = (data) => console.log(data)
  
   //console.log(watch("name"))
   //console.log(watch("email"))
  

  	return (
    	<div className="w-full   flex  flex-col justify-center items-center  mt-10">

         <form className="w-full max-w-[500px] flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>

            <input 
               className="w-full bg-amber-50 rounded-md border-0 py-3 px-5 outline-none text-slate-900 shadow-sm ring-1 ring-inset ring-slate-800 placeholder:text-gray-400 focus:ring-2 focus:border-none focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 text-2xl SunMore mb-5"
               placeholder="name" autoComplete="off"
               {...register("name", { required: true })} />

            <input 
               className="w-full bg-amber-50 rounded-md border-0 py-3 px-5 outline-none text-slate-900 shadow-sm ring-1 ring-inset ring-slate-800 placeholder:text-gray-400 focus:ring-2 focus:border-none focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 text-2xl SunMore mb-5"
               placeholder="email" autoComplete="off"
               {...register("email", { required: true })} />

            <textarea
               placeholder="message" autoComplete="off" rows="4" cols="50"
               className="w-full bg-amber-50 rounded-md border-0 py-3 px-5 outline-none text-slate-900 shadow-sm ring-1 ring-inset ring-slate-800 placeholder:text-gray-400 focus:ring-2 focus:border-none focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 text-2xl SunMore mb-5"
               {...register("message", { required: true })}></textarea>

          
            {(errors.name || errors.email || errors.message) && (
            <span className="w-full text-center text-orange-500 SunMore my-5">
               This field is required
            </span>
            )}
          
            <button  type="submit" 
                     className="w-[250px] h-[80px] bg-slate-900 text-white text-2xl rounded-full mt-4">
               SEND
            </button>

         </form>
			
    	</div>
  	)
}
