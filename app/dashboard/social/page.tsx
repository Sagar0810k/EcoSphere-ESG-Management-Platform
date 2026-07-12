'use client'

import { useState } from 'react'
import { Plus, Users, Heart, Zap, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const engagementData = [
  { month: 'Jan', volunteering: 45, training: 30, fundraising: 20 },
  { month: 'Feb', volunteering: 52, training: 35, fundraising: 25 },
  { month: 'Mar', volunteering: 48, training: 40, fundraising: 30 },
  { month: 'Apr', volunteering: 61, training: 45, fundraising: 35 },
  { month: 'May', volunteering: 70, training: 50, fundraising: 40 },
  { month: 'Jun', volunteering: 85, training: 60, fundraising: 50 },
]

const impactAreaData = [
  { name: 'Education', value: 35, color: '#3b82f6' },
  { name: 'Healthcare', value: 25, color: '#ef4444' },
  { name: 'Environment', value: 20, color: '#10b981' },
  { name: 'Community', value: 20, color: '#f59e0b' },
]

const csrActivitiesData = [
  {
    id: 1,
    name: 'STEM Education Program',
    type: 'Training',
    participants: 150,
    impact: 'Education',
    hours: 240,
    status: 'Ongoing',
  },
  {
    id: 2,
    name: 'Volunteer Day - Beach Cleanup',
    type: 'Volunteering',
    participants: 85,
    impact: 'Environment',
    hours: 340,
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Employee Wellness Program',
    type: 'Training',
    participants: 200,
    impact: 'Community',
    hours: 120,
    status: 'Ongoing',
  },
  {
    id: 4,
    name: 'Charity Fundraiser',
    type: 'Fundraising',
    participants: 120,
    impact: 'Healthcare',
    hours: 80,
    status: 'Planned',
  },
]

const employeeMetrics = [
  {
    metric: 'Average Volunteer Hours',
    value: '12.5 hrs/employee',
    trend: '+15% YoY',
    trendColor: 'text-green-600',
  },
  {
    metric: 'Training Participation Rate',
    value: '78%',
    trend: '+5% from Q1',
    trendColor: 'text-green-600',
  },
  {
    metric: 'Employee Satisfaction',
    value: '4.2/5',
    trend: '+0.3 points',
    trendColor: 'text-green-600',
  },
  {
    metric: 'Diversity Index',
    value: '0.82',
    trend: '+0.05 this year',
    trendColor: 'text-green-600',
  },
]

const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b']

export default function SocialPage() {
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [selectedTab, setSelectedTab] = useState('activities')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Social & CSR Engagement
              </h1>
              <p className="text-slate-600 mt-1">Community impact & employee engagement</p>
            </div>
            <Button
              onClick={() => setShowAddActivity(!showAddActivity)}
              className="bg-purple-600 hover:bg-purple-700 gap-2"
            >
              <Plus size={18} />
              Add Activity
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {employeeMetrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
              <p className="text-slate-600 text-sm">{metric.metric}</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{metric.value}</p>
              <p className={`text-sm mt-2 ${metric.trendColor}`}>{metric.trend}</p>
            </div>
          ))}
        </div>

        {/* Add Activity Form */}
        {showAddActivity && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-2 border-purple-200">
            <h3 className="text-lg font-bold mb-4 text-slate-900">Add New Activity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Activity Name"
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Volunteering</option>
                <option>Training</option>
                <option>Fundraising</option>
                <option>Mentoring</option>
              </select>
              <input
                type="number"
                placeholder="Participants"
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Education</option>
                <option>Healthcare</option>
                <option>Environment</option>
                <option>Community</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button className="bg-purple-600 hover:bg-purple-700">Save Activity</Button>
              <Button
                variant="outline"
                onClick={() => setShowAddActivity(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Engagement Trend */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Engagement Trend (6 months)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                  }}
                />
                <Legend />
                <Bar dataKey="volunteering" fill="#3b82f6" name="Volunteering" radius={[8, 8, 0, 0]} />
                <Bar dataKey="training" fill="#8b5cf6" name="Training" radius={[8, 8, 0, 0]} />
                <Bar dataKey="fundraising" fill="#ec4899" name="Fundraising" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Impact Area Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Impact by Area</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={impactAreaData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {impactAreaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activities Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Recent Activities</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-lg text-sm font-medium bg-purple-100 text-purple-700">
                  All
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">
                  Ongoing
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Participants
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Impact Area
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Hours
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {csrActivitiesData.map((activity) => (
                  <tr
                    key={activity.id}
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-slate-900">{activity.name}</td>
                    <td className="px-6 py-4 text-slate-600">{activity.type}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-slate-400" />
                        {activity.participants}
                      </div>
                    </td>
                    <td className="px-6 py-4">{activity.impact}</td>
                    <td className="px-6 py-4 font-medium text-slate-900">{activity.hours}h</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          activity.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : activity.status === 'Ongoing'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
