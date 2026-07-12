'use client'

import { useState, ReactNode } from 'react'

interface TabProps {
  label: string
  value: string
  content: ReactNode
}

export function Tabs({ tabs, defaultTab }: { tabs: TabProps[]; defaultTab?: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.value)

  return (
    <div className="w-full">
      <div className="flex gap-2 border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.value
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs.find((t) => t.value === activeTab)?.content}
      </div>
    </div>
  )
}
