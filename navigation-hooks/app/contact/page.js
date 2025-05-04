'use client'
import { useRouter } from 'next/navigation';
import React , { useEffect } from 'react'

const Contact = () => {
     const router = useRouter()
        useEffect(() => {
            setTimeout(() => {
                router.push('/blog')
            }, 2000);
        }, [])

  return (
    <div>
      You are at contact page now
    </div>
  )
}

export default Contact
