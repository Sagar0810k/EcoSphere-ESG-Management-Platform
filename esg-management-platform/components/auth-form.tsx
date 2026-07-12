'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { demoSignUp, demoSignIn, initializeDemoAuth, DEFAULT_DEMO_USER } from '@/lib/demo-auth'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [useDemo, setUseDemo] = useState(false)

  const isSignUp = mode === 'sign-up'

  useEffect(() => {
    initializeDemoAuth()
    // Set demo credentials for sign-in
    if (!isSignUp && email === '') {
      setEmail(DEFAULT_DEMO_USER.email)
      setPassword(DEFAULT_DEMO_USER.password)
    }
  }, [isSignUp, email])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // Try backend auth first
      if (!useDemo) {
        const authClient = (await import('@/lib/auth-client')).authClient
        const result = isSignUp
          ? await authClient.signUp.email({ email, password, name })
          : await authClient.signIn.email({ email, password })

        if (!result.error) {
          router.push('/')
          router.refresh()
          return
        }
        
        // If backend fails, fall back to demo mode
        console.log('Backend auth failed, using demo mode:', result.error)
      }

      // Use demo auth
      const demoResult = isSignUp
        ? await demoSignUp(email, password, name)
        : await demoSignIn(email, password)

      setLoading(false)

      if (!demoResult.success) {
        setError(demoResult.error ?? 'Authentication failed')
        return
      }

      router.push('/')
      router.refresh()
    } catch (err) {
      setLoading(false)
      setError('An error occurred')
    }
  }

  return (
    <main className="min-h-svh bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </CardTitle>
          <p className="text-sm text-slate-600 text-center mt-2">
            {isSignUp
              ? 'Join EcoSphere to track your ESG performance'
              : 'Sign in to continue managing your ESG initiatives'}
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isSignUp && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
            />
          </div>

          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}

            <Button type="submit" disabled={loading} className="w-full mt-2">
              {loading
                ? 'Please wait...'
                : isSignUp
                  ? 'Create account'
                  : 'Sign in'}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 text-center">
              {isSignUp ? 'Already have an account? ' : 'New here? '}
              <Link
                href={isSignUp ? '/sign-in' : '/sign-up'}
                className="text-blue-600 font-medium hover:underline"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </Link>
            </p>
          </div>

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-700 text-center">
              <strong>Demo Mode:</strong> Create any account or use demo@example.com / demo123456
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
