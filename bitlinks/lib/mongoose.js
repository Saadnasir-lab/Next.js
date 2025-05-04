import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

/**
 * Global is used here to maintain a cached connection across hot reloads in development.
 */
let cached = global._mongoose || { conn: null, promise: null }

if (!global._mongoose) {
  global._mongoose = cached
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      return mongoose
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectToDatabase
