// app/actions/saveUser.ts
'use server'

import { currentUser } from '@clerk/nextjs/server'
// import connectDB from '@/lib/connectDB'
import User from '@/models/user'
import mongoose from 'mongoose'

export async function saveUserToDB() {
  const user = await currentUser()
  if (!user) return null

  await mongoose.connect("mongodb://localhost:27017/clerk")
  const existing = await User.findOne({ clerkId: user.id })
  if (!existing) {
    await User.create({
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress,
    })
  }

  return true
}










// import { currentUser } from '@clerk/nextjs/server'

// export default async function AddHobby() {
//   async function addHobby(formData: FormData) {
//     'use server'
    
//     const user = await currentUser()
    
//     if (!user) {
//       throw new Error('You must be signed in to use this feature')
//     }

//     const serverData = {
//       userId: user.id,
//       profileImage: user.imageUrl,
//     }

//     console.log('add Hobby completed with user details ', serverData)
//   }

//   return (
//     <form action={addHobby}>
//       <input value={'soccer'} type="text" name="hobby" />
//       <button type="submit">Submit your hobby</button>
//     </form>
//   )
// }