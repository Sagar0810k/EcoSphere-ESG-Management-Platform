# 🌱 EcoSphere: ESG Management Platform

> An integrated Environmental, Social & Governance (ESG) management system that brings carbon accounting, social impact, governance compliance, and gamification together into a single, real-time platform.

---

## 📖 Table of Contents

- [Background](#-background)
- [Problem Statement](#-problem-statement)
- [Core Modules](#-core-modules)
- [Data Model](#-data-model)
  - [Master Data](#master-data)
  - [Transactional Data](#transactional-data)
- [Business Workflow](#-business-workflow)
- [Features](#-features)
- [Reports](#-reports)
- [Core Configuration & Business Rules](#-core-configuration--business-rules)
- [Screens / UI Overview](#-screens--ui-overview)
- [Diagrams](#-diagrams)
- [Bonus Ideas](#-bonus-ideas-optional)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)

---

## 🧭 Background

Environmental, Social and Governance (ESG) has become a critical aspect of modern businesses. Organizations are expected to monitor carbon emissions, promote employee well-being, and maintain governance compliance. While many ERP systems collect operational data, ESG reporting is often **manual, disconnected, and difficult to monitor in real time**.

**EcoSphere** aims to integrate ESG directly into day-to-day ERP operations by measuring sustainability metrics, encouraging employee participation, and providing meaningful reports for management.

## 🎯 Problem Statement

Build an ESG Management Platform that enables organizations to **measure, manage and improve** their Environmental, Social and Governance performance. The platform integrates operational data, employee participation, and compliance activities into a unified dashboard — while encouraging sustainability through gamification.

| Pillar | Focus |
|---|---|
| 🌍 **Environmental** | Carbon accounting, emission factors, sustainability goals, carbon reports |
| 🤝 **Social** | CSR activities, employee participation, diversity metrics, engagement |
| 🏛️ **Governance** | Policies, audits, compliance tracking, governance reports |
| 🎮 **Gamification** | Challenges, badges, XP, rewards, leaderboards |

---

## 🧩 Core Modules

1. **Dashboard** — Executive overview with live ESG scores, trends & quick actions
2. **Environmental** — Emission factors, product ESG profiles, carbon transactions, goals
3. **Social** — CSR activities, employee participation, diversity dashboard
4. **Governance** — Policies, policy acknowledgements, audits, compliance issues
5. **Gamification** — Challenges, challenge participation, badges, rewards, leaderboard
6. **Reports** — Environmental / Social / Governance / ESG Summary / Custom Report Builder
7. **Settings** — Departments, categories, ESG configuration, notification settings

---

## 🗃️ Data Model

### Master Data

| Model | Purpose | Key Fields |
|---|---|---|
| **Department** | Organizational hierarchy & ESG ownership | Name, Code, Head, Parent Department, Employee Count, Status |
| **Category** | Shared category values across Social & Gamification modules | Name, Type (CSR Activity / Challenge), Status |
| **Emission Factor** | Carbon values used during calculations | — |
| **Product ESG Profile** | ESG information linked to products | — |
| **Environmental Goal** | Sustainability targets | — |
| **ESG Policy** | Governance policies | — |
| **Badge** | Employee achievements | Name, Description, Unlock Rule, Icon |
| **Reward** | Redeemable incentives | Name, Description, Points Required, Stock, Status |

### Transactional Data

| Model | Purpose | Key Fields |
|---|---|---|
| **Carbon Transaction** | Stores calculated emissions from ERP operations | — |
| **CSR Activity** | Social initiatives organized by the company | — |
| **Employee Participation** | Tracks employee involvement in CSR Activities only | Employee, Activity, Proof, Approval Status, Points Earned, Completion Date |
| **Challenge** | Sustainability challenges | Title, Category, Description, XP, Difficulty, Evidence Required, Deadline, Status (Draft / Active / Under Review / Completed / Archived) |
| **Challenge Participation** | Tracks employee progress within Challenges only | Challenge, Employee, Progress, Proof, Approval, XP Awarded |
| **Policy Acknowledgement** | Employee policy acceptance | — |
| **Audit** | Governance audits | — |
| **Compliance Issue** | Governance violations | Audit, Severity, Description, Owner, Due Date, Status |
| **Department Score** | Aggregated ESG performance per department | Department, Environmental Score, Social Score, Governance Score, Total Score |

---

## 🔄 Business Workflow

```
Master Configuration
        │
        ▼
Departments · Categories · Emission Factors · Products
Goals · Policies · Challenges
        │
        ▼
Daily Business Operations
(Purchase • Manufacturing • Expenses • Fleet)
        │
        ▼
Carbon Transactions
        │
        ▼
Employee Participation (CSR) · Challenge Participation
Policy Acknowledgements · Audits
        │
        ▼
Environmental Score · Social Score · Governance Score
        │
        ▼
Department Total Score
        │
        ▼
Overall ESG Score
(weighted average of Department Total Scores — default weighting:
Environmental 40% / Social 30% / Governance 30%, configurable per organization)
        │
        ▼
Organization Dashboard & Reports
```

See the [Data Flow Diagram](#-diagrams) below for the full system-level view.

---

## ✨ Features

### 🌍 Environmental
- Configure Emission Factors
- Calculate Carbon Emissions
- Department Carbon Tracking
- Sustainability Goals
- Environmental Dashboard

### 🤝 Social
- CSR Activities
- Employee Participation
- Diversity Metrics
- Training Completion

### 🏛️ Governance
- ESG Policies
- Policy Acknowledgements
- Audits
- Compliance Issues

### 🎮 Gamification
- Challenges — full lifecycle: **Draft → Active → Under Review → Completed**, or **Archived** at any point
- XP tracking
- Badges — auto-awarded when an employee's XP or completed-challenge count satisfies the Badge's Unlock Rule
- Rewards — redeemable using earned XP/Points
- Leaderboards

### ⚙️ Settings & Administration
- Departments management
- Category management
- ESG Configuration
- Notification Settings

---

## 📊 Reports

The platform generates:

- Environmental Report
- Social Report
- Governance Report
- ESG Summary Report
- **Custom Report Builder** — combine filters below and export (PDF / Excel / CSV)

**Supported filters:** Department · Date Range · Module · Employee · Challenge · ESG Category

---

## ⚖️ Core Configuration & Business Rules

These are **in scope, not optional**, since they directly support the core modules:

| Rule | Description |
|---|---|
| **Reward Redemption** | Employees redeem earned Points/XP for a Reward from the catalog, subject to stock availability. Redemption deducts the corresponding Points from the employee's balance. |
| **Notification System** | Sends in-app and/or email notifications for: new compliance issue raised, CSR/Challenge approval decisions, policy acknowledgement reminders, badge unlocks. Configurable via Settings → Notification Settings. |
| **Auto Emission Calculation** | When enabled, Carbon Transactions are calculated automatically from linked Purchase/Manufacturing/Expense/Fleet records using the relevant Emission Factor — no manual entry required. |
| **Evidence Requirement** | When enabled, CSR Activity participation cannot be marked Approved without an attached proof file. |
| **Badge Auto-Award** | When enabled, a Badge is automatically assigned to an employee the moment their XP, completed-challenge count, or other tracked metric satisfies that Badge's Unlock Rule. |
| **Compliance Issue Ownership** | Every Compliance Issue must have an assigned Owner and Due Date; Open issues past their Due Date are flagged and feed the Notification System. |

---

## 🖥️ Screens / UI Overview

| # | Screen | Highlights |
|---|---|---|
| 1 | **Dashboard: Executive Overview** | Live ESG score tiles (Environmental / Social / Governance / Overall), emissions trend, department ranking, recent activity feed, quick actions |
| 2 | **Environmental: Emission Tracking & Goals** | Emission Factors, Product ESG Profiles, Carbon Transactions, Environmental Goals with progress bars |
| 3 | **Social: CSR & Employee Engagement** | CSR Activities catalog, Employee Participation approval queue |
| 4 | **Governance: Policies, Audits & Compliance** | Policies, Policy Acknowledgements, Audits, severity-tagged Compliance Issues |
| 5 | **Gamification: Challenges, Badges & Leaderboard** | Challenge lifecycle board (Draft/Active/Under Review/Completed/Archived), Badge Gallery, Leaderboard |
| 6 | **Reports: Analytics & Custom Report Builder** | One-click module reports + filterable Custom Report Builder with PDF/Excel/CSV export |
| 7 | **Settings: Configuration & Administration** | Departments, Categories, ESG Configuration toggles, Notification Settings |

---

## 🗺️ Diagrams

> This section is a placeholder for additional diagrams (ER diagram, sequence diagrams, use case diagrams, etc.). PlantUML source files live in `/diagrams`.

- [Data Flow Diagram](./diagrams/data-flow-diagram.puml) — Level 1 DFD showing how data moves between actors, processes and data stores
- *(Add more diagrams here as they're created — e.g. ER Diagram, Class Diagram, Sequence Diagram, Use Case Diagram)*

To render any `.puml` file:

```bash
# Using PlantUML CLI (requires Java + Graphviz)
plantuml diagrams/data-flow-diagram.puml

# Or paste the code into https://www.plantuml.com/plantuml/uml/
```

---

## 🎁 Bonus Ideas (Optional)

- Department ESG rankings
- Smart dashboard visualizations
- Mobile-responsive interface

---

## 🛠️ Tech Stack

> _Update this section with the actual stack used for implementation._

| Layer | Suggested Technology |
|---|---|
| Frontend | React / Next.js |
| Backend | Node.js (Express/Nest) or Python (FastAPI/Django) |
| Database | PostgreSQL |
| Auth | JWT / OAuth2 |
| Notifications | Email (SMTP) + In-app (WebSocket) |
| Reports Export | PDF (Puppeteer/WeasyPrint), Excel/CSV |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd ecosphere-esg-platform

# Install dependencies
npm install   # or yarn / pnpm

# Configure environment variables
cp .env.example .env

# Run database migrations
npm run migrate

# Start the development server
npm run dev
```

---

## 📄 License

Add your license here.
