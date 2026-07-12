// Demo authentication for development/preview mode
// This allows testing the full application without database setup

export interface DemoUser {
  id: string
  email: string
  name: string
  password: string
}

// Store demo users in localStorage
const DEMO_USERS_KEY = 'ecospher_demo_users'
const DEMO_SESSION_KEY = 'ecospher_session'

export const DEFAULT_DEMO_USER: DemoUser = {
  id: 'demo-1',
  email: 'demo@example.com',
  name: 'Demo User',
  password: 'demo123456'
}

export function initializeDemoAuth() {
  if (typeof window === 'undefined') return
  
  const stored = localStorage.getItem(DEMO_USERS_KEY)
  if (!stored) {
    localStorage.setItem(DEMO_USERS_KEY, JSON.stringify([DEFAULT_DEMO_USER]))
  }
}

export async function demoSignUp(email: string, password: string, name: string): Promise<{ success: boolean; error?: string }> {
  if (typeof window === 'undefined') {
    return { success: false, error: 'Not in browser environment' }
  }

  const users = getDemoUsers()
  
  // Check if user already exists
  if (users.some(u => u.email === email)) {
    return { success: false, error: 'Email already registered' }
  }

  // Validate password
  if (password.length < 8) {
    return { success: false, error: 'Password must be at least 8 characters' }
  }

  // Create new user
  const newUser: DemoUser = {
    id: `user-${Date.now()}`,
    email,
    name,
    password
  }

  users.push(newUser)
  localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(users))
  
  // Auto-login
  localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({
    userId: newUser.id,
    email: newUser.email,
    name: newUser.name,
    timestamp: Date.now()
  }))

  return { success: true }
}

export async function demoSignIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
  if (typeof window === 'undefined') {
    return { success: false, error: 'Not in browser environment' }
  }

  const users = getDemoUsers()
  const user = users.find(u => u.email === email)

  if (!user) {
    return { success: false, error: 'Invalid email or password' }
  }

  if (user.password !== password) {
    return { success: false, error: 'Invalid email or password' }
  }

  // Create session
  localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({
    userId: user.id,
    email: user.email,
    name: user.name,
    timestamp: Date.now()
  }))

  return { success: true }
}

export function demoSignOut() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(DEMO_SESSION_KEY)
}

export function getDemoSession() {
  if (typeof window === 'undefined') return null
  
  const session = localStorage.getItem(DEMO_SESSION_KEY)
  return session ? JSON.parse(session) : null
}

export function getDemoUsers(): DemoUser[] {
  if (typeof window === 'undefined') return []
  
  const stored = localStorage.getItem(DEMO_USERS_KEY)
  return stored ? JSON.parse(stored) : [DEFAULT_DEMO_USER]
}

export function isLoggedInDemo(): boolean {
  return getDemoSession() !== null
}
