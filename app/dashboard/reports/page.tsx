'use client'

import { useState } from 'react'
import { Plus, Download, Share2, MoreVertical, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const reportsData = [
  {
    id: 1,
    name: 'ESG Report Q2 2024',
    type: 'Full ESG Report',
    generatedAt: '2024-06-15',
    sections: 'Environmental, Social, Governance',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Carbon Emissions Summary',
    type: 'Environmental Report',
    generatedAt: '2024-06-10',
    sections: 'Emissions Data, Targets, Trends',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'CSR Activities Report',
    type: 'Social Report',
    generatedAt: '2024-06-08',
    sections: 'Volunteer Hours, Impact, Participants',
    status: 'Completed',
  },
  {
    id: 4,
    name: 'Governance & Compliance',
    type: 'Governance Report',
    generatedAt: '2024-06-05',
    sections: 'Policies, Audits, Compliance Status',
    status: 'Completed',
  },
  {
    id: 5,
    name: 'Sustainability Dashboard',
    type: 'Custom Report',
    generatedAt: '2024-05-20',
    sections: 'KPIs, Trends, Goals',
    status: 'Completed',
  },
]

const reportTemplates = [
  {
    id: 1,
    name: 'Comprehensive ESG Report',
    description: 'Full ESG performance across all areas',
    icon: '📊',
  },
  {
    id: 2,
    name: 'Environmental Report',
    description: 'Carbon, emissions, renewable energy',
    icon: '🌱',
  },
  {
    id: 3,
    name: 'Social Report',
    description: 'Employee engagement, CSR activities',
    icon: '👥',
  },
  {
    id: 4,
    name: 'Governance Report',
    description: 'Policies, audits, compliance',
    icon: '🛡️',
  },
  {
    id: 5,
    name: 'Stakeholder Report',
    description: 'Executive summary for investors',
    icon: '📈',
  },
  {
    id: 6,
    name: 'Custom Report',
    description: 'Build your own report',
    icon: '⚙️',
  },
]

export default function ReportsPage() {
  const [showNewReport, setShowNewReport] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Reports & Analytics
              </h1>
              <p className="text-slate-600 mt-1">Generate, customize & download reports</p>
            </div>
            <Button
              onClick={() => setShowNewReport(!showNewReport)}
              className="bg-indigo-600 hover:bg-indigo-700 gap-2"
            >
              <Plus size={18} />
              New Report
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Recent Reports */}
        {!showNewReport && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Reports</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                          Report Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                          Generated
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                          Sections
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportsData.map((report) => (
                        <tr
                          key={report.id}
                          className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <FileText className="text-indigo-600" size={20} />
                              <span className="font-medium text-slate-900">{report.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-700">
                              {report.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-600">
                            {new Date(report.generatedAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-slate-600">{report.sections}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-1 text-blue-600 hover:bg-blue-50"
                              >
                                <Download size={16} />
                                Download
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-1 text-slate-600 hover:bg-slate-100"
                              >
                                <Share2 size={16} />
                              </Button>
                              <button className="p-1 hover:bg-slate-100 rounded">
                                <MoreVertical size={16} className="text-slate-400" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Report Templates */}
        {showNewReport && (
          <div>
            {!selectedTemplate ? (
              <>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Report Template</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reportTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id.toString())}
                      className="bg-white rounded-xl shadow-sm p-8 text-left hover:shadow-md hover:border-indigo-200 border-2 border-transparent transition-all group"
                    >
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                        {template.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{template.name}</h3>
                      <p className="text-slate-600 text-sm">{template.description}</p>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <span className="text-indigo-600 font-semibold text-sm">Select →</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="text-indigo-600 font-semibold mb-4 flex items-center gap-2"
                  >
                    ← Back to Templates
                  </button>
                  <h2 className="text-2xl font-bold text-slate-900">Customize Your Report</h2>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Report Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Q2 2024 ESG Report"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Report Sections
                      </label>
                      <div className="space-y-2">
                        {[
                          { label: 'Executive Summary', checked: true },
                          { label: 'Environmental Metrics', checked: true },
                          { label: 'Social Impact', checked: true },
                          { label: 'Governance & Compliance', checked: true },
                          { label: 'Goals & Targets', checked: false },
                          { label: 'Year-over-Year Trends', checked: false },
                          { label: 'Recommendations', checked: false },
                        ].map((section, idx) => (
                          <label
                            key={idx}
                            className="flex items-center gap-3 p-2 rounded hover:bg-slate-50"
                          >
                            <input
                              type="checkbox"
                              defaultChecked={section.checked}
                              className="w-4 h-4 rounded accent-indigo-600"
                            />
                            <span className="text-slate-700">{section.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Time Period
                      </label>
                      <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>Last 3 Months</option>
                        <option>Last 6 Months</option>
                        <option>Last 12 Months</option>
                        <option>Custom Date Range</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Format
                      </label>
                      <div className="space-y-2">
                        {['PDF', 'Excel', 'PowerPoint'].map((format) => (
                          <label key={format} className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="format"
                              value={format}
                              defaultChecked={format === 'PDF'}
                              className="w-4 h-4 accent-indigo-600"
                            />
                            <span className="text-slate-700">{format}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
                      <Download size={18} />
                      Generate & Download
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedTemplate(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
