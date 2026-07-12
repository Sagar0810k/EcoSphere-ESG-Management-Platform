'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart3,
  Leaf,
  Users,
  Shield,
  Trophy,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { useState } from 'react'

const navigationItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: BarChart3,
    color: 'text-blue-600',
  },
  {
    label: 'Environmental',
    href: '/dashboard/environmental',
    icon: Leaf,
    color: 'text-green-600',
  },
  {
    label: 'Social & CSR',
    href: '/dashboard/social',
    icon: Users,
    color: 'text-purple-600',
  },
  {
    label: 'Governance',
    href: '/dashboard/governance',
    icon: Shield,
    color: 'text-orange-600',
  },
  {
    label: 'Gamification',
    href: '/dashboard/gamification',
    icon: Trophy,
    color: 'text-yellow-600',
  },
  {
    label: 'Reports',
    href: '/dashboard/reports',
    icon: FileText,
    color: 'text-indigo-600',
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    color: 'text-gray-600',
  },
]

export default function Sidebar({ user }: { user: { name?: string; email?: string } }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    await authClient.signOut()
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static w-64 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col transition-transform duration-300 z-40`}
      >
        {/* Logo/Header */}
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Leaf size={18} />
            </div>
            EcoSphere
          </h1>
          <p className="text-sm text-slate-400 mt-1">ESG Management</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <button
                    onClick={() => setIsOpen(false)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                      isActive
                        ? 'bg-white bg-opacity-20 border-l-4 border-green-400'
                        : 'hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    <Icon size={20} className={isActive ? 'text-green-400' : ''} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </Link>
              )
            })}
          </div>
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-slate-700 space-y-3">
          <div className="px-4 py-2 bg-white bg-opacity-10 rounded-lg">
            <p className="text-xs text-slate-400">User</p>
            <p className="text-sm font-medium truncate">{user.name || user.email}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full justify-center gap-2 text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
        />
      )}
    </>
  )
}
