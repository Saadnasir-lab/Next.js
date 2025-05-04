'use client'
import { useRouter } from 'next/navigation'
import React , { useEffect } from 'react'

const About = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/contact')
        }, 2000);
    }, [])
    

  return (
    <div>
      You are at about page now
    </div>
  )
}

export default About
