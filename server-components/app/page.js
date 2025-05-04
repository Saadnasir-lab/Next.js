"use client"
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { submit } from '@/actions/form'


const HOME = () => {
  const ref=useRef()
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   setError,
  //   formState: { errors , isSubmitting},
  // } = useForm()

  // const onSubmit = async(data) => {
  //   submit(data)
  // }
  return (
    <div>
      {/* {isSubmitting  &&  <div>Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full h-screen flex justify-center items-center flex-col gap-2'>
        <div className='flex gap-2'>
        <label htmlFor="">Username</label>
        <input type="text" disabled={isSubmitting} className='outline-1' {...register("username",{required:{value:true , message:"This feild is required"},minLength:{value:3,message:"Min length is 3"}})} />
        {errors.username  &&  <div className='text-red'>{errors.username.message}</div>}
        </div>
        <br />
        <div className='flex gap-2'>
        <label htmlFor="">Password</label>
        <input type="password" disabled={isSubmitting} className='outline-1' {...register("password" , {required:{value:true , message:"This feild is required"} , minLength:{value:8 , message:"Min length is 8"}})} />
        {errors.password && <div>{errors.password.message}</div>}
        </div>
        <br />
        <input type="submit" value={"Submit"} className='outline-1' disabled={isSubmitting} />
        {errors.myform && <div className='text-red'>{errors.myform.message}</div>}
        {errors.blocked && <div className='text-red'>{errors.blocked.message}</div>}
        
      </form> */}
      <form ref={ref} action={(e)=>{submit(e); ref.current.reset() }} className='flex flex-col w-full h-screen justify-center items-center gap-2'>
        <div className='flex gap-2'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' className='border-2  border-white'/>
        </div>
        <div className='flex gap-2'>
        <label htmlFor="add">Address</label>
        <input type="text" name='add' id='add' className='border-2  border-white'/>
        </div>
        <button className='border-2 border-white'>Submit</button>
      </form>
    </div>
  )
}

export default HOME
