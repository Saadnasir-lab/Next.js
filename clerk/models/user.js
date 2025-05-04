// models/User.js
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  clerkId: { type: String, unique: true },
  email: String,
})

export default mongoose.models.User || mongoose.model('User', userSchema)
