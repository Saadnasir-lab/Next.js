import React from "react"

export default async function Home() { 
  
  // let data = await fetch('https://api.vercel.app/blog',  { next: { revalidate: 3600 } })
  let data = await fetch('https://api.vercel.app/blog',  { cache:'no-store' })
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
