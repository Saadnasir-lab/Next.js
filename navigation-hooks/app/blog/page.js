'use client'
import { useRouter } from 'next/navigation'
import React , { useEffect } from 'react'

const Blog = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000);
    }, [])
    
  return (
    <div>
      You are at blog page now
    </div>
  )
}

export default Blog
