"use client"
import React from 'react'

const HOME = () => {
  const handleClick = async () => {
    let data={
      Name:"Harry",
      role:"Coder"
    }
    let a=await fetch("/api/add" , {method:"POST" , headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })
  let res=await a.json()
  console.log(res);
  }
  
  return (
    <div>
      <div>NEXT JS API TUTORIAL</div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default HOME
