'use client'

import { useState } from 'react'
import { Save, Lock, Bell, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('organization')
  const [isSaving, setIsSaving] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Settings & Configuration
          </h1>
          <p className="text-slate-600 mt-1">Manage your ESG platform settings</p>
        </div>
      </div>

      <div className="p-8">
        <div className="flex gap-8">
          {/* Sidebar Tabs */}
          <div className="w-64">
            <div className="bg-white rounded-xl shadow-sm p-2">
              {[
                { id: 'organization', label: 'Organization', icon: '🏢' },
                { id: 'account', label: 'Account & Profile', icon: '👤' },
                { id: 'notifications', label: 'Notifications', icon: '🔔' },
                { id: 'privacy', label: 'Privacy & Security', icon: '🔒' },
                { id: 'integrations', label: 'Integrations', icon: '🔗' },
                { id: 'advanced', label: 'Advanced', icon: '⚙️' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 max-w-2xl">
            {activeTab === 'organization' && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Organization Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Sustainability Corp"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Department
                    </label>
                    <input
                      type="text"
                      defaultValue="ESG & Sustainability"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Role
                    </label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Director</option>
                      <option>Manager</option>
                      <option>Coordinator</option>
                      <option>Analyst</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Industry Type
                    </label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Manufacturing</option>
                      <option>Technology</option>
                      <option>Finance</option>
                      <option>Healthcare</option>
                      <option>Energy</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Employee Headcount
                    </label>
                    <input
                      type="number"
                      defaultValue="5000"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      ESG Maturity Level
                    </label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert</option>
                    </select>
                  </div>

                  <Button className="bg-indigo-600 hover:bg-indigo-700 w-full gap-2">
                    <Save size={18} />
                    Save Organization Details
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'account' && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Account & Profile</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@company.com"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      defaultValue="ESG Manager"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <Button className="bg-indigo-600 hover:bg-indigo-700 w-full gap-2">
                    <Save size={18} />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Goal Milestones',
                      description: 'Notify when ESG goals reach target milestones',
                    },
                    {
                      title: 'Compliance Alerts',
                      description: 'Alert for compliance issues and deadlines',
                    },
                    {
                      title: 'Achievement Unlocked',
                      description: 'Notify when badges and achievements are earned',
                    },
                    {
                      title: 'Report Ready',
                      description: 'Notify when generated reports are ready',
                    },
                    {
                      title: 'Weekly Summary',
                      description: 'Send weekly ESG performance summary',
                    },
                    {
                      title: 'Monthly Digest',
                      description: 'Send monthly detailed ESG report digest',
                    },
                  ].map((notification, idx) => (
                    <label key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50">
                      <input
                        type="checkbox"
                        defaultChecked={idx < 4}
                        className="w-4 h-4 rounded accent-indigo-600 mt-1"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">{notification.title}</p>
                        <p className="text-sm text-slate-600">{notification.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 w-full gap-2 mt-6">
                  <Bell size={18} />
                  Save Preferences
                </Button>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Privacy & Security</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">Two-Factor Authentication</h3>
                    <Button className="bg-green-600 hover:bg-green-700 gap-2">
                      <Lock size={18} />
                      Enable 2FA
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Active Sessions</h3>
                    <div className="space-y-3">
                      {[
                        { device: 'Chrome on Windows', location: 'New York, USA', lastActive: '2 minutes ago' },
                        { device: 'Safari on MacOS', location: 'San Francisco, USA', lastActive: '3 hours ago' },
                      ].map((session, idx) => (
                        <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900">{session.device}</p>
                            <p className="text-sm text-slate-600">{session.location} • Last active: {session.lastActive}</p>
                          </div>
                          <button className="text-red-600 hover:bg-red-50 px-3 py-1 rounded text-sm font-medium">
                            Logout
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Data Access</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600" />
                        <span className="text-slate-700">Allow ESG platform access to environmental data</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600" />
                        <span className="text-slate-700">Allow ESG platform access to social data</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600" />
                        <span className="text-slate-700">Allow ESG platform access to governance data</span>
                      </label>
                    </div>
                  </div>

                  <Button className="bg-indigo-600 hover:bg-indigo-700 w-full gap-2 mt-6">
                    <Lock size={18} />
                    Save Security Settings
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Integrations</h2>
                <div className="space-y-4">
                  {[
                    { name: 'Slack', status: 'Connected', icon: '💬' },
                    { name: 'Google Workspace', status: 'Connected', icon: '📧' },
                    { name: 'Microsoft Teams', status: 'Not Connected', icon: '👥' },
                    { name: 'Salesforce', status: 'Not Connected', icon: '☁️' },
                  ].map((integration, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{integration.icon}</span>
                        <div>
                          <p className="font-semibold text-slate-900">{integration.name}</p>
                          <p className={`text-sm ${integration.status === 'Connected' ? 'text-green-600' : 'text-slate-600'}`}>
                            {integration.status}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
                        {integration.status === 'Connected' ? 'Manage' : 'Connect'}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Advanced Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Data Export Format
                    </label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>CSV</option>
                      <option>JSON</option>
                      <option>Excel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Default Dashboard View
                    </label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Monthly</option>
                      <option>Quarterly</option>
                      <option>Annually</option>
                    </select>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4 text-red-600">Danger Zone</h3>
                    <Button className="bg-red-600 hover:bg-red-700 w-full">
                      Delete Account & All Data
                    </Button>
                  </div>

                  <Button className="bg-indigo-600 hover:bg-indigo-700 w-full gap-2 mt-6">
                    <Save size={18} />
                    Save Advanced Settings
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
