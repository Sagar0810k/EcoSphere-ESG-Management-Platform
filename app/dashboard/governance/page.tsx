'use client'

import { useState } from 'react'
import { Plus, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const complianceStatusData = [
  { area: 'Data Privacy', compliant: 95, at_risk: 5 },
  { area: 'Labor Laws', compliant: 88, at_risk: 12 },
  { area: 'Environmental', compliant: 82, at_risk: 18 },
  { area: 'Anti-Corruption', compliant: 92, at_risk: 8 },
  { area: 'Board Diversity', compliant: 78, at_risk: 22 },
]

const policiesData = [
  {
    id: 1,
    name: 'Data Privacy & Protection',
    type: 'Data Privacy',
    adoptionDate: '2023-01-15',
    lastReview: '2024-03-10',
    nextReview: '2024-09-10',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Code of Conduct',
    type: 'Ethics',
    adoptionDate: '2022-06-20',
    lastReview: '2024-02-15',
    nextReview: '2024-08-15',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Anti-Corruption Policy',
    type: 'Compliance',
    adoptionDate: '2023-03-01',
    lastReview: '2024-01-20',
    nextReview: '2024-07-20',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Diversity & Inclusion',
    type: 'HR',
    adoptionDate: '2021-09-10',
    lastReview: '2024-04-05',
    nextReview: '2024-10-05',
    status: 'Under Review',
  },
]

const auditData = [
  {
    id: 1,
    name: 'Internal Financial Audit',
    type: 'Internal',
    scope: 'Financial Controls',
    auditDate: '2024-02-15',
    riskLevel: 'Low',
    status: 'Completed',
    findings: 0,
  },
  {
    id: 2,
    name: 'Data Security Audit',
    type: 'External',
    scope: 'Cybersecurity',
    auditDate: '2024-03-20',
    riskLevel: 'Medium',
    status: 'In Progress',
    findings: 2,
  },
  {
    id: 3,
    name: 'Environmental Compliance',
    type: 'Internal',
    scope: 'Environmental',
    auditDate: '2024-04-10',
    riskLevel: 'High',
    status: 'Pending',
    findings: 5,
  },
  {
    id: 4,
    name: 'Vendor Compliance',
    type: 'External',
    scope: 'Supply Chain',
    auditDate: '2024-05-01',
    riskLevel: 'Low',
    status: 'Completed',
    findings: 1,
  },
]

const complianceIssuesData = [
  {
    id: 1,
    issue: 'GDPR Data Handling',
    severity: 'High',
    regulatory: 'EU',
    dueDate: '2024-06-30',
    status: 'In Progress',
  },
  {
    id: 2,
    issue: 'Waste Management Protocols',
    severity: 'Medium',
    regulatory: 'EPA',
    dueDate: '2024-07-15',
    status: 'Pending',
  },
  {
    id: 3,
    issue: 'Labor Standards Audit',
    severity: 'High',
    regulatory: 'ILO',
    dueDate: '2024-08-01',
    status: 'Pending',
  },
  {
    id: 4,
    issue: 'Executive Compensation Disclosure',
    severity: 'Medium',
    regulatory: 'SEC',
    dueDate: '2024-06-15',
    status: 'Completed',
  },
]

export default function GovernancePage() {
  const [showAddPolicy, setShowAddPolicy] = useState(false)
  const [selectedTab, setSelectedTab] = useState('policies')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700'
      case 'In Progress':
        return 'bg-blue-100 text-blue-700'
      case 'Pending':
        return 'bg-orange-100 text-orange-700'
      case 'Active':
        return 'bg-green-100 text-green-700'
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-700'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700'
      case 'High':
        return 'bg-red-100 text-red-700'
      case 'Critical':
        return 'bg-red-200 text-red-800'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Governance, Policies & Compliance
              </h1>
              <p className="text-slate-600 mt-1">Risk management & regulatory compliance</p>
            </div>
            <Button
              onClick={() => setShowAddPolicy(!showAddPolicy)}
              className="bg-orange-600 hover:bg-orange-700 gap-2"
            >
              <Plus size={18} />
              Add Policy
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* KPI Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Policies Active</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
                <p className="text-slate-600 text-sm mt-2">All up to date</p>
              </div>
              <CheckCircle className="text-green-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Pending Audits</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">3</p>
                <p className="text-orange-600 text-sm mt-2">Requires action</p>
              </div>
              <Clock className="text-orange-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">Open Issues</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">7</p>
                <p className="text-red-600 text-sm mt-2">4 high priority</p>
              </div>
              <AlertTriangle className="text-red-500" size={32} />
            </div>
          </div>
        </div>

        {/* Add Policy Form */}
        {showAddPolicy && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-2 border-orange-200">
            <h3 className="text-lg font-bold mb-4 text-slate-900">Add New Policy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Policy Name"
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Ethics</option>
                <option>Data Privacy</option>
                <option>HR</option>
                <option>Compliance</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button className="bg-orange-600 hover:bg-orange-700">Save Policy</Button>
              <Button
                variant="outline"
                onClick={() => setShowAddPolicy(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Compliance Status Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Compliance Status by Area</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={complianceStatusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="area" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                }}
              />
              <Legend />
              <Bar dataKey="compliant" fill="#10b981" name="Compliant" radius={[8, 8, 0, 0]} />
              <Bar dataKey="at_risk" fill="#ef4444" name="At Risk" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setSelectedTab('policies')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedTab === 'policies'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Policies
          </button>
          <button
            onClick={() => setSelectedTab('audits')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedTab === 'audits'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Audits
          </button>
          <button
            onClick={() => setSelectedTab('issues')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedTab === 'issues'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Compliance Issues
          </button>
        </div>

        {/* Policies Table */}
        {selectedTab === 'policies' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Company Policies</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Policy Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Last Reviewed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Next Review
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {policiesData.map((policy) => (
                    <tr
                      key={policy.id}
                      className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">{policy.name}</td>
                      <td className="px-6 py-4 text-slate-600">{policy.type}</td>
                      <td className="px-6 py-4 text-slate-600">{policy.lastReview}</td>
                      <td className="px-6 py-4 text-slate-600">{policy.nextReview}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(policy.status)}`}>
                          {policy.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Audits Table */}
        {selectedTab === 'audits' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Audit Records</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Audit Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Scope
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Risk Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Findings
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {auditData.map((audit) => (
                    <tr
                      key={audit.id}
                      className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">{audit.name}</td>
                      <td className="px-6 py-4 text-slate-600">{audit.type}</td>
                      <td className="px-6 py-4 text-slate-600">{audit.scope}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(audit.riskLevel)}`}>
                          {audit.riskLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(audit.status)}`}>
                          {audit.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium">{audit.findings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Compliance Issues Table */}
        {selectedTab === 'issues' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Compliance Issues</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Issue
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Severity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Regulatory Body
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Due Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {complianceIssuesData.map((issue) => (
                    <tr
                      key={issue.id}
                      className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">{issue.issue}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            issue.severity === 'High'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {issue.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{issue.regulatory}</td>
                      <td className="px-6 py-4 text-slate-600">{issue.dueDate}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(issue.status)}`}>
                          {issue.status}
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
