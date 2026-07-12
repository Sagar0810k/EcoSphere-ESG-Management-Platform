import {
  pgTable,
  text,
  integer,
  real,
  timestamp,
  boolean,
  varchar,
  json,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ============= BETTER AUTH TABLES =============
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  name: text("name"),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  userId: text("userId").notNull(),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId").notNull(),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt"),
  updatedAt: timestamp("updatedAt"),
});

// ============= ECOSPHERE APP TABLES =============

// User Organization Profile
export const userProfile = pgTable("userProfile", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  organizationName: text("organizationName").notNull(),
  department: text("department"),
  role: text("role"),
  industryType: text("industryType"),
  headcount: integer("headcount"),
  esgMaturityLevel: varchar("esgMaturityLevel", { length: 50 }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Environmental Metrics
export const environmentalMetrics = pgTable("environmentalMetrics", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  metricType: varchar("metricType", { length: 100 }).notNull(), // e.g., "carbon-emissions", "energy-consumption"
  value: real("value").notNull(),
  unit: varchar("unit", { length: 50 }).notNull(), // e.g., "tCO2e", "kWh"
  period: varchar("period", { length: 20 }).notNull(), // e.g., "monthly", "quarterly"
  category: varchar("category", { length: 100 }), // e.g., "scope1", "scope2", "scope3"
  status: varchar("status", { length: 50 }).default("active"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// ESG Goals & Targets
export const esgGoals = pgTable("esgGoals", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  goalName: text("goalName").notNull(),
  category: varchar("category", { length: 50 }).notNull(), // "environmental", "social", "governance"
  subcategory: varchar("subcategory", { length: 100 }),
  targetValue: real("targetValue").notNull(),
  currentValue: real("currentValue").default(0),
  unit: varchar("unit", { length: 50 }).notNull(),
  deadline: timestamp("deadline"),
  priority: varchar("priority", { length: 20 }), // "low", "medium", "high"
  status: varchar("status", { length: 50 }).default("in-progress"),
  progress: integer("progress").default(0),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Social CSR Activities
export const csrActivities = pgTable("csrActivities", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  activityName: text("activityName").notNull(),
  activityType: varchar("activityType", { length: 100 }), // e.g., "volunteering", "donation", "training"
  description: text("description"),
  participantCount: integer("participantCount"),
  impactArea: varchar("impactArea", { length: 100 }), // e.g., "education", "health", "environment"
  hours: real("hours"),
  monetaryValue: real("monetaryValue"),
  status: varchar("status", { length: 50 }).default("planned"),
  activityDate: timestamp("activityDate"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Employee Engagement
export const employeeEngagement = pgTable("employeeEngagement", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  engagementType: varchar("engagementType", { length: 100 }), // e.g., "training", "workshop", "survey"
  title: text("title").notNull(),
  description: text("description"),
  participantCount: integer("participantCount"),
  completionRate: real("completionRate"),
  feedbackScore: real("feedbackScore"),
  engagementDate: timestamp("engagementDate"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Governance Policies
export const policies = pgTable("policies", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  policyName: text("policyName").notNull(),
  policyType: varchar("policyType", { length: 100 }), // e.g., "ethics", "diversity", "compliance"
  description: text("description"),
  adoptionDate: timestamp("adoptionDate"),
  lastReviewDate: timestamp("lastReviewDate"),
  nextReviewDate: timestamp("nextReviewDate"),
  status: varchar("status", { length: 50 }).default("active"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Audit Records
export const audits = pgTable("audits", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  auditType: varchar("auditType", { length: 100 }), // e.g., "internal", "external", "compliance"
  auditName: text("auditName").notNull(),
  auditScope: text("auditScope"),
  auditDate: timestamp("auditDate"),
  findings: text("findings"),
  riskLevel: varchar("riskLevel", { length: 50 }), // "low", "medium", "high", "critical"
  status: varchar("status", { length: 50 }).default("pending"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Compliance Issues
export const complianceIssues = pgTable("complianceIssues", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  issueName: text("issueName").notNull(),
  description: text("description"),
  regulatoryBody: varchar("regulatoryBody", { length: 100 }),
  severity: varchar("severity", { length: 50 }), // "low", "medium", "high", "critical"
  dueDate: timestamp("dueDate"),
  resolutionDate: timestamp("resolutionDate"),
  status: varchar("status", { length: 50 }).default("open"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Gamification Challenges
export const challenges = pgTable("challenges", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  challengeName: text("challengeName").notNull(),
  description: text("description"),
  category: varchar("category", { length: 50 }).notNull(), // "environmental", "social", "governance"
  targetValue: real("targetValue"),
  currentProgress: real("currentProgress").default(0),
  reward: integer("reward").default(0), // points
  startDate: timestamp("startDate"),
  endDate: timestamp("endDate"),
  status: varchar("status", { length: 50 }).default("active"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// User Achievements/Badges
export const achievements = pgTable("achievements", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  achievementName: text("achievementName").notNull(),
  description: text("description"),
  badge: varchar("badge", { length: 50 }),
  pointsAwarded: integer("pointsAwarded").default(0),
  unlockedAt: timestamp("unlockedAt"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

// Leaderboard
export const leaderboard = pgTable("leaderboard", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  totalPoints: integer("totalPoints").default(0),
  rank: integer("rank"),
  challengesCompleted: integer("challengesCompleted").default(0),
  lastUpdated: timestamp("lastUpdated").notNull().defaultNow(),
});

// Reports
export const reports = pgTable("reports", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  reportName: text("reportName").notNull(),
  reportType: varchar("reportType", { length: 100 }), // e.g., "ESG", "Environmental", "Social", "Governance", "Sustainability"
  generatedAt: timestamp("generatedAt").notNull().defaultNow(),
  reportData: json("reportData"),
  status: varchar("status", { length: 50 }).default("completed"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Dashboard Settings
export const dashboardSettings = pgTable("dashboardSettings", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  defaultMetricsView: varchar("defaultMetricsView", { length: 50 }).default("monthly"),
  enableNotifications: boolean("enableNotifications").default(true),
  theme: varchar("theme", { length: 50 }).default("light"),
  customWidgets: json("customWidgets"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// ============= RELATIONS =============
export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  profiles: many(userProfile),
}));

export const userProfileRelations = relations(userProfile, ({ one }) => ({
  user: one(user, { fields: [userProfile.userId], references: [user.id] }),
}));

export const environmentalMetricsRelations = relations(
  environmentalMetrics,
  ({ one }) => ({
    user: one(user, {
      fields: [environmentalMetrics.userId],
      references: [user.id],
    }),
  })
);

export const esgGoalsRelations = relations(esgGoals, ({ one }) => ({
  user: one(user, { fields: [esgGoals.userId], references: [user.id] }),
}));

export const csrActivitiesRelations = relations(csrActivities, ({ one }) => ({
  user: one(user, { fields: [csrActivities.userId], references: [user.id] }),
}));

export const employeeEngagementRelations = relations(
  employeeEngagement,
  ({ one }) => ({
    user: one(user, {
      fields: [employeeEngagement.userId],
      references: [user.id],
    }),
  })
);

export const policiesRelations = relations(policies, ({ one }) => ({
  user: one(user, { fields: [policies.userId], references: [user.id] }),
}));

export const auditsRelations = relations(audits, ({ one }) => ({
  user: one(user, { fields: [audits.userId], references: [user.id] }),
}));

export const complianceIssuesRelations = relations(
  complianceIssues,
  ({ one }) => ({
    user: one(user, {
      fields: [complianceIssues.userId],
      references: [user.id],
    }),
  })
);

export const challengesRelations = relations(challenges, ({ one }) => ({
  user: one(user, { fields: [challenges.userId], references: [user.id] }),
}));

export const achievementsRelations = relations(achievements, ({ one }) => ({
  user: one(user, { fields: [achievements.userId], references: [user.id] }),
}));

export const leaderboardRelations = relations(leaderboard, ({ one }) => ({
  user: one(user, { fields: [leaderboard.userId], references: [user.id] }),
}));

export const reportsRelations = relations(reports, ({ one }) => ({
  user: one(user, { fields: [reports.userId], references: [user.id] }),
}));

export const dashboardSettingsRelations = relations(
  dashboardSettings,
  ({ one }) => ({
    user: one(user, {
      fields: [dashboardSettings.userId],
      references: [user.id],
    }),
  })
);
