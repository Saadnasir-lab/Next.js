'use client'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';

const Shorten = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [Generated, setGenerated] = useState('')

    const handleClick = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,
            shorturl: shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:3000/api/generate", requestOptions); // await here
            const result = await response.json(); // and await here
            console.log(result.message); // This will log "URL already exists!" or other messages
            if (result.success == true) {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}${shorturl}`)
                console.log(Generated);
                toast(result.message);
                setshorturl("")
                seturl("")
            } else {
                toast(result.message);
                setshorturl("")
                seturl("")
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }

    }

    return (
        <div className='bg-purple-100 w-full h-[90vh]'>
            <ToastContainer />
            <div className='bg-purple-200 w-lg p-5 rounded-lg my-10 mx-auto shadow-2xl'>
                <p className='font-bold text-xl'>Genrate your short URLs</p>
                <div className='flex flex-col gap-2 my-4'>
                    <input
                        type="text"
                        value={url}
                        className='py-2 px-4 w-full bg-white rounded-lg focus:outline-purple-600 focus:outline-2'
                        placeholder='Enter your url'
                        onChange={(e) => { seturl(e.target.value) }} />
                    <input
                        type="text"
                        value={shorturl}
                        className='py-2 px-4 w-full bg-white rounded-lg focus:outline-purple-600 focus:outline-2'
                        placeholder='Enter your preferred short URL text'
                        onChange={(e) => { setshorturl(e.target.value) }} />
                </div>
                <button
                    className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-extralight text-white w-full'
                    onClick={handleClick}>Generate
                </button>
                {Generated && <div className='my-3'> <span className='font-bold text-lg'>Your Link : </span><code className='ml-5'><Link target="_blank" href={Generated}>{Generated}</Link>
                </code></div>}
            </div>
        </div>
    )
}

export default Shorten
