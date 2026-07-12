export async function GET() {
  return Response.json({
    kpis: {
      esgScore: 79,
      carbonEmissions: 380,
      initiatives: 24,
      complianceScore: 88,
    },
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
}
