'use client'

import { useState } from 'react'
import { Plus, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const emissionsData = [
  { month: 'Jan', scope1: 150, scope2: 200, scope3: 100 },
  { month: 'Feb', scope1: 145, scope2: 195, scope3: 95 },
  { month: 'Mar', scope1: 140, scope2: 190, scope3: 90 },
  { month: 'Apr', scope1: 135, scope2: 185, scope3: 90 },
  { month: 'May', scope1: 130, scope2: 180, scope3: 85 },
  { month: 'Jun', scope1: 125, scope2: 175, scope3: 80 },
]

const metricsTableData = [
  {
    id: 1,
    name: 'Scope 1 Emissions',
    department: 'Operations',
    target: '100 tCO2e',
    current: '125 tCO2e',
    progress: 80,
    status: 'warning',
  },
  {
    id: 2,
    name: 'Scope 2 Emissions',
    department: 'Facilities',
    target: '150 tCO2e',
    current: '175 tCO2e',
    progress: 65,
    status: 'warning',
  },
  {
    id: 3,
    name: 'Waste Reduction',
    department: 'Manufacturing',
    target: '50 tons/month',
    current: '45 tons/month',
    progress: 90,
    status: 'completed',
  },
  {
    id: 4,
    name: 'Renewable Energy %',
    department: 'Energy',
    target: '50%',
    current: '42%',
    progress: 84,
    status: 'in-progress',
  },
  {
    id: 5,
    name: 'Water Usage',
    department: 'Operations',
    target: '1000 m³/month',
    current: '950 m³/month',
    progress: 95,
    status: 'completed',
  },
]

const goalsData = [
  { name: 'Carbon Neutral by 2030', progress: 35, year: '2030' },
  { name: 'Net Zero Emissions', progress: 25, year: '2050' },
  { name: 'Renewable Energy 100%', progress: 42, year: '2035' },
]

export default function EnvironmentalPage() {
  const [showAddMetric, setShowAddMetric] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700'
      case 'warning':
        return 'bg-orange-100 text-orange-700'
      case 'in-progress':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Environmental Emissions Tracking
              </h1>
              <p className="text-slate-600 mt-1">Monitor and manage carbon footprint</p>
            </div>
            <Button
              onClick={() => setShowAddMetric(!showAddMetric)}
              className="bg-green-600 hover:bg-green-700 gap-2"
            >
              <Plus size={18} />
              Add Metric
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* KPI Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Total Emissions</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">380 tCO2e</p>
                <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                  <TrendingDown size={16} /> +8% vs target
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Reduction Target</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">10%</p>
                <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                  <TrendingDown size={16} /> Achieved 5% this year
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Areas at Risk</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">2</p>
                <p className="text-orange-600 text-sm mt-2 flex items-center gap-1">
                  <AlertCircle size={16} /> Scope 1 & 2
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Metric Form */}
        {showAddMetric && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-2 border-green-200">
            <h3 className="text-lg font-bold mb-4 text-slate-900">Add New Metric</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Metric Name"
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Scope 1</option>
                <option>Scope 2</option>
                <option>Scope 3</option>
              </select>
              <input
                type="number"
                placeholder="Value (tCO2e)"
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="bg-green-600 hover:bg-green-700">Save Metric</Button>
              <Button
                variant="outline"
                onClick={() => setShowAddMetric(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Emissions Trend */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Emissions Trend by Scope</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={emissionsData}>
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
                <Line
                  type="monotone"
                  dataKey="scope1"
                  stroke="#ef4444"
                  name="Scope 1"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="scope2"
                  stroke="#f59e0b"
                  name="Scope 2"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="scope3"
                  stroke="#3b82f6"
                  name="Scope 3"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Long-term Goals */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Long-term Goals</h2>
            <div className="space-y-4">
              {goalsData.map((goal) => (
                <div key={goal.name} className="pb-4 border-b border-slate-200 last:border-0">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-900">{goal.name}</span>
                    <span className="text-sm text-slate-600">{goal.year}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-slate-600 mt-2">{goal.progress}% progress</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Environmental Metrics</h2>
              <div className="flex gap-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-1 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">All</option>
                  <option value="warning">Warning</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Metric
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Target
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Current
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {metricsTableData.map((metric) => (
                  <tr
                    key={metric.id}
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-slate-900">{metric.name}</td>
                    <td className="px-6 py-4 text-slate-600">{metric.department}</td>
                    <td className="px-6 py-4 text-slate-600">{metric.target}</td>
                    <td className="px-6 py-4 text-slate-900 font-medium">{metric.current}</td>
                    <td className="px-6 py-4">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${metric.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{metric.progress}%</p>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          metric.status
                        )}`}
                      >
                        {metric.status}
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
