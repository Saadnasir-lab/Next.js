"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const Blogpost = () => {
    const params= useParams()

  return (
    <div>
      {params.slug}
    </div>
  )
}

export default Blogpost
