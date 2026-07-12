'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getDemoSession } from '@/lib/demo-auth'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Check for demo session
    const demoSession = getDemoSession()
    if (demoSession) {
      router.push('/dashboard')
      return
    }

    // Redirect to sign-in
    router.push('/sign-in')
  }, [router])

  return null
}
