'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/sidebar'
import { Toaster } from '@/components/ui/toaster'
import { getDemoSession } from '@/lib/demo-auth'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthed, setIsAuthed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check demo session
    const session = getDemoSession()
    if (session) {
      setIsAuthed(true)
      setIsLoading(false)
      return
    }
    
    // Not authenticated, redirect to sign-in
    setIsLoading(false)
    router.push('/sign-in')
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading EcoSphere...</p>
        </div>
      </div>
    )
  }

  if (!isAuthed) {
    return null
  }

  const demoUser = {
    id: 'demo-1',
    email: 'demo@example.com',
    name: 'Demo User',
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar user={demoUser} />
      <main className="flex-1 overflow-auto bg-background">
        {children}
      </main>
      <Toaster />
    </div>
  )
}
