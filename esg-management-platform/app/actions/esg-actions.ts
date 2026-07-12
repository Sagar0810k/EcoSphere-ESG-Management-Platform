'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import {
  environmentalMetrics,
  esgGoals,
  csrActivities,
  employeeEngagement,
  policies,
  audits,
  complianceIssues,
  challenges,
  achievements,
  leaderboard,
  reports,
  userProfile,
} from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

// ============= USER PROFILE =============
export async function getUserProfile() {
  const userId = await getUserId()
  const profile = await db
    .select()
    .from(userProfile)
    .where(eq(userProfile.userId, userId))
    .limit(1)
  return profile[0]
}

export async function updateUserProfile(data: {
  organizationName?: string
  department?: string
  role?: string
  industryType?: string
  headcount?: number
  esgMaturityLevel?: string
}) {
  const userId = await getUserId()
  const existingProfile = await db
    .select()
    .from(userProfile)
    .where(eq(userProfile.userId, userId))
    .limit(1)

  if (existingProfile.length === 0) {
    const newProfile = await db.insert(userProfile).values({
      id: `profile_${Date.now()}`,
      userId,
      organizationName: data.organizationName || 'Organization',
      department: data.department,
      role: data.role,
      industryType: data.industryType,
      headcount: data.headcount,
      esgMaturityLevel: data.esgMaturityLevel,
    })
    revalidatePath('/dashboard')
    return newProfile
  }

  const updated = await db
    .update(userProfile)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(userProfile.userId, userId))
  revalidatePath('/dashboard')
  return updated
}

// ============= ENVIRONMENTAL METRICS =============
export async function getEnvironmentalMetrics() {
  const userId = await getUserId()
  return db
    .select()
    .from(environmentalMetrics)
    .where(eq(environmentalMetrics.userId, userId))
    .orderBy(desc(environmentalMetrics.createdAt))
}

export async function addEnvironmentalMetric(data: {
  metricType: string
  value: number
  unit: string
  period: string
  category?: string
}) {
  const userId = await getUserId()
  await db.insert(environmentalMetrics).values({
    id: `metric_${Date.now()}`,
    userId,
    ...data,
  })
  revalidatePath('/dashboard/environmental')
}

// ============= ESG GOALS =============
export async function getEsgGoals() {
  const userId = await getUserId()
  return db
    .select()
    .from(esgGoals)
    .where(eq(esgGoals.userId, userId))
    .orderBy(desc(esgGoals.createdAt))
}

export async function addEsgGoal(data: {
  goalName: string
  category: string
  subcategory?: string
  targetValue: number
  unit: string
  deadline?: Date
  priority?: string
}) {
  const userId = await getUserId()
  await db.insert(esgGoals).values({
    id: `goal_${Date.now()}`,
    userId,
    ...data,
  })
  revalidatePath('/dashboard/goals')
}

export async function updateEsgGoalProgress(
  goalId: string,
  currentValue: number,
  progress: number
) {
  const userId = await getUserId()
  await db
    .update(esgGoals)
    .set({ currentValue, progress, updatedAt: new Date() })
    .where(and(eq(esgGoals.id, goalId), eq(esgGoals.userId, userId)))
  revalidatePath('/dashboard/goals')
}

// ============= CSR ACTIVITIES =============
export async function getCsrActivities() {
  const userId = await getUserId()
  return db
    .select()
    .from(csrActivities)
    .where(eq(csrActivities.userId, userId))
    .orderBy(desc(csrActivities.createdAt))
}

export async function addCsrActivity(data: {
  activityName: string
  activityType?: string
  description?: string
  participantCount?: number
  impactArea?: string
  hours?: number
  monetaryValue?: number
  activityDate?: Date
}) {
  const userId = await getUserId()
  await db.insert(csrActivities).values({
    id: `csr_${Date.now()}`,
    userId,
    ...data,
  })
  revalidatePath('/dashboard/social')
}

// ============= EMPLOYEE ENGAGEMENT =============
export async function getEmployeeEngagements() {
  const userId = await getUserId()
  return db
    .select()
    .from(employeeEngagement)
    .where(eq(employeeEngagement.userId, userId))
    .orderBy(desc(employeeEngagement.createdAt))
}

export async function addEmployeeEngagement(data: {
  engagementType?: string
  title: string
  description?: string
  participantCount?: number
  completionRate?: number
  feedbackScore?: number
  engagementDate?: Date
}) {
  const userId = await getUserId()
  await db.insert(employeeEngagement).values({
    id: `engagement_${Date.now()}`,
    userId,
    ...data,
  })
  revalidatePath('/dashboard/social')
}

// ============= POLICIES =============
export async function getPolicies() {
  const userId = await getUserId()
  return db
    .select()
    .from(policies)
    .where(eq(policies.userId, userId))
    .orderBy(desc(policies.createdAt))
}

export async function addPolicy(data: {
  policyName: string
  policyType?: string
  description?: string
  adoptionDate?: Date
  lastReviewDate?: Date
  nextReviewDate?: Date
}) {
  const userId = await getUserId()
  await db.insert(policies).values({
    id: `policy_${Date.now()}`,
    userId,
    ...data,
  })
  revalidatePath('/dashboard/governance')
}

// ============= AUDITS =============
export async function getAudits() {
  const userId = await getUserId()
  return db
    .select()
    .from(audits)
    .where(eq(audits.userId, userId))
    .orderBy(desc(audits.createdAt))
}

export async function addAudit(data: {
  auditType?: string
  auditName: string
  auditScope?: string
  auditDate?: Date
  findings?: string
  riskLevel?: string
}) {
  const userId = await getUserId()
  await db.insert(audits).values({
    id: `audit_${Date.now()}`,
    userId,
    ...data,
  })
  revalidatePath('/dashboard/governance')
}

// ============= COMPLIANCE ISSUES =============
export async function getComplianceIssues() {
  const userId = await getUserId()
  return db
    .select()
    .from(complianceIssues)
    .where(eq(complianceIssues.userId, userId))
    .orderBy(desc(complianceIssues.createdAt))
}

export async function addComplianceIssue(data: {
  issueName: string
  description?: string
  regulatoryBody?: string
  severity?: string
  dueDate?: Date
}) {
  const userId = await getUserId()
  await db.insert(complianceIssues).values({
    id: `compliance_${Date.now()}`,
    userId,
    ...data,
  })
  revalidatePath('/dashboard/governance')
}

// ============= CHALLENGES =============
export async function getChallenges() {
  const userId = await getUserId()
  return db
    .select()
    .from(challenges)
    .where(eq(challenges.userId, userId))
    .orderBy(desc(challenges.createdAt))
}

export async function addChallenge(data: {
  challengeName: string
  description?: string
  category: string
  targetValue?: number
  reward?: number
  startDate?: Date
  endDate?: Date
}) {
  const userId = await getUserId()
  await db.insert(challenges).values({
    id: `challenge_${Date.now()}`,
    userId,
    ...data,
  })
  revalidatePath('/dashboard/gamification')
}

// ============= ACHIEVEMENTS =============
export async function getAchievements() {
  const userId = await getUserId()
  return db
    .select()
    .from(achievements)
    .where(eq(achievements.userId, userId))
    .orderBy(desc(achievements.unlockedAt))
}

export async function awardAchievement(data: {
  achievementName: string
  description?: string
  badge?: string
  pointsAwarded?: number
}) {
  const userId = await getUserId()
  await db.insert(achievements).values({
    id: `achievement_${Date.now()}`,
    userId,
    ...data,
    unlockedAt: new Date(),
  })
  revalidatePath('/dashboard/gamification')
}

// ============= LEADERBOARD =============
export async function getLeaderboardEntry() {
  const userId = await getUserId()
  const entry = await db
    .select()
    .from(leaderboard)
    .where(eq(leaderboard.userId, userId))
    .limit(1)
  return entry[0]
}

export async function updateLeaderboardPoints(
  pointsToAdd: number,
  challengesCompleted?: number
) {
  const userId = await getUserId()
  const existing = await db
    .select()
    .from(leaderboard)
    .where(eq(leaderboard.userId, userId))
    .limit(1)

  if (existing.length === 0) {
    await db.insert(leaderboard).values({
      id: `leaderboard_${Date.now()}`,
      userId,
      totalPoints: pointsToAdd,
      challengesCompleted: challengesCompleted || 0,
    })
  } else {
    await db
      .update(leaderboard)
      .set({
        totalPoints:
          (existing[0].totalPoints || 0) + pointsToAdd,
        challengesCompleted:
          challengesCompleted !== undefined
            ? challengesCompleted
            : (existing[0].challengesCompleted || 0) + 1,
        lastUpdated: new Date(),
      })
      .where(eq(leaderboard.userId, userId))
  }
  revalidatePath('/dashboard/gamification')
}

// ============= REPORTS =============
export async function getReports() {
  const userId = await getUserId()
  return db
    .select()
    .from(reports)
    .where(eq(reports.userId, userId))
    .orderBy(desc(reports.createdAt))
}

export async function generateReport(data: {
  reportName: string
  reportType: string
  reportData?: Record<string, any>
}) {
  const userId = await getUserId()
  await db.insert(reports).values({
    id: `report_${Date.now()}`,
    userId,
    ...data,
    generatedAt: new Date(),
  })
  revalidatePath('/dashboard/reports')
}
