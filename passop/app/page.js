"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import add from '../public/add.svg'
import copy from '../public/copy.svg'
import { savepassword } from '@/action/route'
import { findpasswords } from '@/action/route'
import eye from '../public/eye.svg'
import ceye from '../public/ceye.svg'
import del from '../public/del.svg'
import edit from '../public/edit.svg'
import { delet } from '@/action/route'
import { hedit } from '@/action/route'
import { ToastContainer, toast } from 'react-toastify';

const Manager = () => {
    const [form, setform] = useState({ id: null, site: "", username: "", password: "" })
    const [passwords, setpasswords] = useState([])
    const formref = useRef()
    const reye = useRef()
    const [showPassword, setshowPassword] = useState(false)

    const handleedit = (id) => {
        const target = passwords.find(i => i.id === id)
        setform({ ...target, id })
        setpasswords(passwords.filter(i=>i.id!=id))
    }
    

    async function data(){
        let data= await findpasswords()
        setpasswords(data)
    }

    const handledel = (e)=>{
        const notify = () => toast("Successfully password has deleted");
        notify()
        let c=confirm("Are you sure do you want to delete it")
        if(c){
            delet(e)
            data()
        }
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    const handlesave = async () => {
        if (form.username.length > 3 && form.site.length > 3 && form.password.length > 3) {
            const notify = () => toast("Successfully password has saved");
            notify()
            if (form.id) {
                // It's an edit
                await hedit(form.id,form);
            } else {
                // It's a new save
                await savepassword(form);
            }
            formref.current.reset();
            setform({ id: null, site: "", username: "", password: "" }) // reset form
            data(); // reload passwords
        }
    }
    
    const handlecopy = (text) => {
        navigator.clipboard.writeText(text)
    }

    const handlepass = ()=>{
        if (showPassword==false) {
            setshowPassword(true)
        }else{
            setshowPassword(false)
        }
    }

    useEffect(() => {
        data()
    }, [])

    const stuck = () =>{

    }

    return (
        <>
        <ToastContainer />
            <div className='container mx-auto md:w-[70%]'>

                <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

                <div className=" p-3 min-h-[88.2vh] w-full text-center">
                    <h1 className='text-4xl text font-bold '>
                        <span className='text-green-500'> &lt;</span>
                        <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
                    </h1>
                    <div>Your own Password Manager</div>
                    <div>
                        <form ref={formref}>

                            <input type="text" name='site' value={form.site} className='rounded-full border border-green-500 w-full p-4 py-1 my-4' onChange={handlechange} />
                            <div className='flex flex-col gap-4 md:flex-row'>
                                <input type="text" value={form.username} name='username' className='rounded-full border border-green-500 w-full p-4 py-1' onChange={handlechange} />
                                <div className='h-max w-max relative'>
                                <input value={form.password} type={showPassword ? "text" : "password"} name='password' className='rounded-full border border-green-500 w-full p-4 py-1' onChange={handlechange} />
                                <Image src={showPassword?ceye:eye} className='absolute invert top-1.5 right-1 cursor-pointer' alt='eye' onClick={handlepass}></Image>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className="flex items-center gap-1.5 bg-green-500 w-max py-1 px-2 rounded-full mx-auto mt-5 cursor-pointer" onClick={handlesave}>
                        <Image src={add} width={35} height={35} alt="add" />
                        <div className="font-bold text-white">Save</div>
                    </button>
                    {passwords.length == 0 && <div className='mt-5 font-bold'>No Paswords to show</div>}
                    {passwords.length > 0 && <table className='w-full rounded-md overflow-hidden mt-4'>
                        <thead className='bg-green-500'>
                            <tr>
                                <th>Site</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                passwords.map((item, index) => {
                                    return <tr key={index} className='bg-green-200'>
                                        <td>
                                                <a target='_blank' className='cursor-pointer' href={item.site}>
                                            <div className='flex item-center justify-center'>{item.site}

                                            </div>
                                                </a>
                                        </td>
                                        <td>
                                            <div className='flex item-center justify-center'>{item.username}<button className='cursor-pointer' onClick={() => { handlecopy(item.username) }}>
                                                <Image src={copy} width={20} className='invert' height={20} alt='copy'></Image>
                                            </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex item-center justify-center'>
                                            <div type='password'>
                                                {"*".repeat(item.password.length)}
                                            </div>
                                                <button className='cursor-pointer' onClick={() => { handlecopy(item.password) }}>
                                                <Image src={copy} width={20} className='invert' height={20} alt='copy'></Image>
                                            </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex gap-1.5'>
                                            <Image src={edit} alt='edit' className='invert cursor-pointer' onClick={()=>handleedit(item.id)}></Image>
                                            <Image src={del} alt='delete' className='invert cursor-pointer' onClick={()=>handledel(item.id)}></Image>
                                            </div>
                                            </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager
