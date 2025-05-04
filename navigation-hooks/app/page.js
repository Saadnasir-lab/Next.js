"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React , { useEffect } from 'react'

const HOME = () => {
  const searchparams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/about')
    }, 2000);
  }, [])
  

  return (
    <>
      <div>
        Hey you are on home page and name is {searchparams.get('name')} and source is {searchparams.get('source')}
      </div>
    </>
  )
}

export default HOME
