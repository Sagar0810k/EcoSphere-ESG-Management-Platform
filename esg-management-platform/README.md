# EcoSphere - ESG Management Platform

A comprehensive, modern web application for tracking, managing, and improving Environmental, Social, and Governance (ESG) performance across organizations.

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

## Features

### Authentication
- Email/password sign-up and sign-in
- Secure session management with Better Auth
- Protected dashboard routes

### Dashboard
- Real-time KPI cards (ESG Score, Carbon Emissions, Initiatives, Compliance)
- 6-month emissions trend analysis
- Department-wise emissions breakdown
- ESG score vs target comparison
- Recent activities timeline

### Environmental Module
- Carbon emissions tracking by scope
- Department-level emissions monitoring
- Reduction targets and goal tracking
- Visual progress indicators

### Social & CSR Module
- Employee engagement metrics
- CSR activities management
- Volunteer hours tracking
- Diversity and inclusion metrics

### Governance Module
- Policy management and versioning
- Audit tracking and management
- Compliance issue logging
- Regulatory requirement tracking

### Gamification
- Points and badge system
- Organization leaderboard
- Sustainability challenges
- Achievement tracking

### Reports & Analytics
- Pre-built report templates
- Custom report builder
- Multiple export formats (PDF, Excel, PowerPoint)
- Report scheduling

### Settings
- Organization configuration
- User profile management
- Notification preferences
- Privacy and security controls
- Third-party integrations

## Tech Stack

- **Frontend**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **Charts**: Recharts
- **UI Components**: Custom shadcn-style components
- **Icons**: Lucide React

## Project Structure

```
/app
  /api              - API routes
  /dashboard        - Main dashboard and modules
  /sign-in          - Authentication pages
  /sign-up
  layout.tsx        - Root layout
  page.tsx          - Home page (redirects)

/components
  /ui               - Reusable UI components
  auth-form.tsx     - Authentication form
  sidebar.tsx       - Navigation sidebar

/lib
  auth.ts           - Better Auth configuration
  auth-client.ts    - Client-side auth utilities
  /db
    index.ts        - Drizzle ORM setup
    schema.ts       - Database schema

/public             - Static assets
/styles            - Global styles
```

## Environment Variables

### Required
- `DATABASE_URL` - Neon PostgreSQL connection string (set by Neon integration)
- `BETTER_AUTH_SECRET` - Secret key for Better Auth (generate with `openssl rand -base64 32`)

### Optional
- `BETTER_AUTH_URL` - Custom auth URL (defaults to production URL)
- `NODE_ENV` - Environment (development/production)

## Database

The application uses Neon PostgreSQL with Drizzle ORM. Key tables include:

- `user` - User profiles
- `session` - Active sessions
- `environmental_metrics` - ESG data
- `esg_goals` - Sustainability targets
- `csr_activities` - Community programs
- `policies` - Organizational policies
- `audits` - Compliance audits
- `challenges` - Gamification challenges
- `achievements` - User badges
- `leaderboard` - Organization rankings

## API Endpoints

### Dashboard
- `GET /api/dashboard/stats` - KPI and chart data

### Authentication
- `POST /api/auth/sign-in` - User login
- `POST /api/auth/sign-up` - User registration
- `POST /api/auth/sign-out` - User logout

## Key Features Explained

### Authentication Flow
1. User visits `/sign-in` or `/sign-up`
2. Submits credentials via Better Auth client
3. Session created and stored in secure cookie
4. Redirected to dashboard on success

### Dashboard Analytics
- Real-time KPI calculations
- Aggregated data from multiple modules
- Interactive charts with Recharts
- Responsive design for all devices

### Module Navigation
- Sidebar menu for quick access
- Tab-based interfaces for complex modules
- Mobile-friendly menu toggle
- Active route highlighting

### Data Protection
- Row-level scoping by user ID
- Parameterized database queries
- Session-based authorization
- Secure password hashing

## Performance Optimizations

- Server-side rendering for initial page load
- Client-side components for interactivity
- Lazy loading for heavy components
- Optimized database queries with Drizzle
- CSS-in-JS minification with Tailwind

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

### Running Tests
```bash
# (To be implemented)
```

### Code Style
- TypeScript for type safety
- ESLint configuration (via Next.js)
- Prettier code formatting (via shadcn)

### Adding New Components

1. Create component in `/components/ui`
2. Export from component index
3. Use in pages/layouts

Example:
```typescript
// components/ui/my-component.tsx
export function MyComponent() {
  return <div>Component</div>
}

// app/page.tsx
import { MyComponent } from '@/components/ui/my-component'
```

## Deployment

### Deploy to Vercel

```bash
# Connect repository to Vercel
# Environment variables automatically configured

# Deploy
git push origin main
```

### Other Platforms

```bash
# Build production bundle
pnpm build

# Start production server
pnpm start
```

## Troubleshooting

### "Can't resolve '@/components/ui/...'"
- Ensure component file exists in `/components/ui/`
- Check file naming and imports

### Auth errors
- Verify `BETTER_AUTH_SECRET` is set
- Check `DATABASE_URL` connection string
- Ensure session table exists in database

### Dashboard not loading
- Check browser console for errors
- Verify API endpoint `/api/dashboard/stats`
- Check database connection

## Contributing

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes and test
3. Commit: `git commit -m 'Add feature'`
4. Push: `git push origin feature/my-feature`
5. Open pull request

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or suggestions:
1. Check the FEATURES.md for detailed documentation
2. Review error logs in browser console
3. Check database connection and environment variables

## Future Roadmap

- [ ] AI-powered ESG recommendations
- [ ] Real-time collaboration
- [ ] Supplier ESG scorecards
- [ ] Carbon offset marketplace
- [ ] Third-party data connectors
- [ ] Advanced analytics
- [ ] Mobile native apps
- [ ] Blockchain verification

---

Built with Next.js, React, and modern web technologies. Designed for organizations committed to sustainable business practices.
