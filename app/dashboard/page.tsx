'use client'

import { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Leaf, Users, Shield, Trophy, TrendingUp, AlertCircle, Download, RefreshCw } from 'lucide-react'

export default function Dashboard() {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const fetchData = async () => {
    try {
      setRefreshing(true)
      const response = await fetch('/api/dashboard/stats')
      const json = await response.json()
      setData(json)
      setIsLoading(false)
    } catch (error) {
      console.log('[v0] Error fetching dashboard data:', error)
      // Set mock data on error
      setData({
        kpis: { esgScore: 79, carbonEmissions: 380, initiatives: 24, complianceScore: 88 },
        departmentEmissions: [
          { name: 'Manufacturing', emissions: 150 },
          { name: 'Operations', emissions: 120 },
          { name: 'Logistics', emissions: 80 },
          { name: 'Office', emissions: 30 },
        ],
        emissionsTrend: [
          { month: 'Jan', value: 420 },
          { month: 'Feb', value: 410 },
          { month: 'Mar', value: 405 },
          { month: 'Apr', value: 395 },
          { month: 'May', value: 390 },
          { month: 'Jun', value: 380 },
        ],
        esgScoreVsTarget: [
          { category: 'Environmental', current: 75, target: 85 },
          { category: 'Social', current: 82, target: 80 },
          { category: 'Governance', current: 80, target: 85 },
        ],
        recentActivities: [
          { id: 1, title: 'Solar panel installation completed', date: '2024-07-10', status: 'completed' },
          { id: 2, title: 'Employee diversity training', date: '2024-07-08', status: 'in-progress' },
          { id: 3, title: 'Board meeting - ESG review', date: '2024-07-05', status: 'completed' },
          { id: 4, title: 'Carbon audit report submitted', date: '2024-06-28', status: 'completed' },
        ],
      })
      setIsLoading(false)
    } finally {
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const kpis = data?.kpis || {}
  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444']

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-slate-600 mt-1">Executive Overview & ESG Performance Metrics</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline"
                className="gap-2"
                onClick={fetchData}
                disabled={refreshing}
              >
                <RefreshCw size={18} className={refreshing ? 'animate-spin' : ''} />
                Refresh
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                <Download size={18} />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-600 text-sm font-medium">ESG Score</p>
                  <p className="text-4xl font-bold text-green-700 mt-3">{kpis.esgScore || 79}/100</p>
                  <Badge variant="success" className="mt-3">Strong Performance</Badge>
                </div>
                <div className="bg-green-200 p-3 rounded-xl">
                  <Leaf className="text-green-700" size={28} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Carbon Emissions</p>
                  <p className="text-4xl font-bold text-blue-700 mt-3">{kpis.carbonEmissions || 380}</p>
                  <p className="text-blue-600 text-sm mt-3 font-medium">tCO2e Total</p>
                </div>
                <div className="bg-blue-200 p-3 rounded-xl">
                  <TrendingUp className="text-blue-700" size={28} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Active Initiatives</p>
                  <p className="text-4xl font-bold text-purple-700 mt-3">{kpis.initiatives || 24}</p>
                  <p className="text-purple-600 text-sm mt-3 font-medium">In Progress</p>
                </div>
                <div className="bg-purple-200 p-3 rounded-xl">
                  <Trophy className="text-purple-700" size={28} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Compliance Score</p>
                  <p className="text-4xl font-bold text-orange-700 mt-3">{kpis.complianceScore || 88}%</p>
                  <Badge variant="warning" className="mt-3">On Track</Badge>
                </div>
                <div className="bg-orange-200 p-3 rounded-xl">
                  <Shield className="text-orange-700" size={28} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Emissions Trend Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp size={20} className="text-green-600" />
                Emissions Trend (6 Months)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data?.emissionsTrend || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    cursor={{ stroke: '#3b82f6', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* ESG Score vs Target */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield size={20} className="text-blue-600" />
                ESG Score vs Target
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data?.esgScoreVsTarget || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="category" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  />
                  <Legend />
                  <Bar dataKey="current" fill="#3b82f6" name="Current Score" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="target" fill="#cbd5e1" name="Target Score" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Department Emissions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department Emissions Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf size={20} className="text-green-600" />
                Department Emissions Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data?.departmentEmissions || []}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.emissions}t`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="emissions"
                  >
                    {(data?.departmentEmissions || []).map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle size={20} className="text-blue-600" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(data?.recentActivities || []).map((activity: any) => (
                  <div 
                    key={activity.id} 
                    className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-0"
                  >
                    <div className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${
                      activity.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{activity.title}</p>
                      <p className="text-sm text-slate-500 mt-1">{activity.date}</p>
                    </div>
                    <Badge 
                      variant={activity.status === 'completed' ? 'success' : 'info'}
                    >
                      {activity.status === 'completed' ? 'Completed' : 'In Progress'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
