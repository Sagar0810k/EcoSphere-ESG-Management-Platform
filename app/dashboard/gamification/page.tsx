'use client'

import { useState } from 'react'
import { Plus, Trophy, Medal, Crown, Star, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProgressBar } from '@/components/ui/progress'

const challengesData = [
  {
    id: 1,
    name: 'Sustainability Sprint',
    description: 'Reduce office emissions by 20%',
    category: 'Environmental',
    progress: 65,
    reward: 500,
    startDate: '2024-04-01',
    endDate: '2024-06-30',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Community Hours',
    description: 'Employees volunteer 1000 hours',
    category: 'Social',
    progress: 78,
    reward: 750,
    startDate: '2024-04-01',
    endDate: '2024-06-30',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Diversity & Inclusion',
    description: 'Achieve 50% female leadership',
    category: 'Governance',
    progress: 42,
    reward: 1000,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Zero Waste Initiative',
    description: 'Achieve 95% waste diversion',
    category: 'Environmental',
    progress: 85,
    reward: 600,
    startDate: '2024-03-01',
    endDate: '2024-06-30',
    status: 'Completed',
  },
]

const badgesData = [
  {
    id: 1,
    name: 'Eco Champion',
    description: 'Reduced carbon emissions by 50%',
    icon: '🌱',
    unlockedAt: '2024-02-15',
    points: 250,
  },
  {
    id: 2,
    name: 'Social Hero',
    description: 'Completed 100+ volunteer hours',
    icon: '🤝',
    unlockedAt: '2024-03-10',
    points: 300,
  },
  {
    id: 3,
    name: 'Governance Guardian',
    description: 'Maintained 100% compliance record',
    icon: '🛡️',
    unlockedAt: '2024-01-20',
    points: 400,
  },
  {
    id: 4,
    name: 'Rising Star',
    description: 'Earned 5 badges',
    icon: '⭐',
    unlockedAt: null,
    points: 200,
  },
  {
    id: 5,
    name: 'ESG Master',
    description: 'Earned 10 badges',
    icon: '🏆',
    unlockedAt: null,
    points: 500,
  },
]

const leaderboardData = [
  {
    rank: 1,
    organization: 'Green Tech Corp',
    points: 3500,
    badges: 8,
    trend: '↑',
  },
  {
    rank: 2,
    organization: 'Sustainability Inc',
    points: 3200,
    badges: 7,
    trend: '↓',
  },
  {
    rank: 3,
    organization: 'EcoFirst Solutions',
    points: 3100,
    badges: 7,
    trend: '→',
  },
  {
    rank: 4,
    organization: 'Future Forward Ltd',
    points: 2950,
    badges: 6,
    trend: '↑',
  },
  {
    rank: 5,
    organization: 'Impact Makers',
    points: 2800,
    badges: 6,
    trend: '↓',
  },
]

export default function GamificationPage() {
  const [showAddChallenge, setShowAddChallenge] = useState(false)
  const [selectedTab, setSelectedTab] = useState('challenges')

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Gamification & Achievements
              </h1>
              <p className="text-slate-600 mt-1">Challenges, badges & leaderboards</p>
            </div>
            <Button
              onClick={() => setShowAddChallenge(!showAddChallenge)}
              className="bg-yellow-600 hover:bg-yellow-700 gap-2"
            >
              <Plus size={18} />
              Create Challenge
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Total Points</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">2,850</p>
                <p className="text-yellow-600 text-sm mt-2">+250 this month</p>
              </div>
              <Star className="text-yellow-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Badges Earned</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">8</p>
                <p className="text-slate-600 text-sm mt-2">2 more available</p>
              </div>
              <Medal className="text-purple-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Current Rank</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">#12</p>
                <p className="text-slate-600 text-sm mt-2">Out of 156 organizations</p>
              </div>
              <Trophy className="text-orange-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-pink-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Active Challenges</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">3</p>
                <p className="text-slate-600 text-sm mt-2">1 completed this month</p>
              </div>
              <Target className="text-pink-500" size={32} />
            </div>
          </div>
        </div>

        {/* Add Challenge Form */}
        {showAddChallenge && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-2 border-yellow-200">
            <h3 className="text-lg font-bold mb-4 text-slate-900">Create New Challenge</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Challenge Name"
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>Environmental</option>
                <option>Social</option>
                <option>Governance</option>
              </select>
              <input
                type="number"
                placeholder="Target Value"
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="number"
                placeholder="Reward Points"
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex gap-2">
              <Button className="bg-yellow-600 hover:bg-yellow-700">Create Challenge</Button>
              <Button
                variant="outline"
                onClick={() => setShowAddChallenge(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          <button
            onClick={() => setSelectedTab('challenges')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedTab === 'challenges'
                ? 'bg-yellow-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Challenges
          </button>
          <button
            onClick={() => setSelectedTab('badges')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedTab === 'badges'
                ? 'bg-yellow-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Badges
          </button>
          <button
            onClick={() => setSelectedTab('leaderboard')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedTab === 'leaderboard'
                ? 'bg-yellow-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Leaderboard
          </button>
        </div>

        {/* Challenges Section */}
        {selectedTab === 'challenges' && (
          <div className="space-y-4 mb-8">
            {challengesData.map((challenge) => (
              <div key={challenge.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{challenge.name}</h3>
                    <p className="text-slate-600 text-sm mt-1">{challenge.description}</p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      challenge.status === 'Active'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {challenge.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-slate-600">Category</p>
                    <p className="font-semibold text-slate-900">{challenge.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Progress</p>
                    <p className="font-semibold text-slate-900">{challenge.progress}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Reward</p>
                    <p className="font-semibold text-yellow-600">{challenge.reward} pts</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Duration</p>
                    <p className="font-semibold text-slate-900">
                      {new Date(challenge.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">Overall Progress</span>
                    <span className="text-sm font-semibold text-slate-900">{challenge.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Badges Section */}
        {selectedTab === 'badges' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {badgesData.map((badge) => (
              <div
                key={badge.id}
                className={`rounded-xl shadow-sm p-6 transition-all ${
                  badge.unlockedAt
                    ? 'bg-white border-2 border-yellow-200'
                    : 'bg-slate-50 border-2 border-slate-200 opacity-60'
                }`}
              >
                <div className="text-5xl mb-3">{badge.icon}</div>
                <h3 className="text-lg font-bold text-slate-900">{badge.name}</h3>
                <p className="text-slate-600 text-sm mt-2">{badge.description}</p>
                {badge.unlockedAt && (
                  <div>
                    <p className="text-yellow-600 text-sm font-semibold mt-3">
                      ✓ Unlocked {new Date(badge.unlockedAt).toLocaleDateString()}
                    </p>
                    <p className="text-slate-900 font-semibold mt-1">+{badge.points} points</p>
                  </div>
                )}
                {!badge.unlockedAt && (
                  <p className="text-slate-600 text-sm font-semibold mt-3">Locked</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Leaderboard Section */}
        {selectedTab === 'leaderboard' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Top Organizations</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Organization
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Points
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Badges
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((entry) => (
                    <tr
                      key={entry.rank}
                      className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 font-bold">
                          {entry.rank}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-900">{entry.organization}</td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-yellow-600">{entry.points}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1">
                          {Array.from({ length: entry.badges }).map((_, i) => (
                            <Medal key={i} size={16} className="text-yellow-500" />
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-lg font-bold ${
                            entry.trend === '↑'
                              ? 'text-green-600'
                              : entry.trend === '↓'
                              ? 'text-red-600'
                              : 'text-slate-600'
                          }`}
                        >
                          {entry.trend}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
