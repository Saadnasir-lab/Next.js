'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
import { saveUserToDB } from '../actions/saveUser'

export default function AuthSyncer() {
  const { isSignedIn } = useUser()

  useEffect(() => {
    if (isSignedIn) {
      saveUserToDB()
    }
  }, [isSignedIn])

  return null
}
