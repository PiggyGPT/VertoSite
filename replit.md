# Verto - Institutional Stablecoin Rails Platform

## Overview
Verto is a comprehensive web application providing a marketing and informational platform for institutional stablecoin infrastructure services. It highlights Verto's offering as a unified solution for minting, moving, and reconciling stablecoins across various blockchain networks, emphasizing institutional-grade compliance and controls. The platform aims to combine the accessibility of M-Pesa, the seamlessness of Stripe, and the compliance rigor of SWIFT, targeting banks, payment service providers, and fintech companies for stablecoin operations. Its vision includes enabling digital asset operations for trading, payments, and distribution on any chain, with ambitions to capture institutional capital and provide a secure on-ramp for DeFi products.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: React 18 with TypeScript, Vite for build processes.
- **UI/UX**: shadcn/ui components built on Radix UI primitives, styled with Tailwind CSS using a custom Verto brand design system.
- **State Management**: TanStack React Query for server state.
- **Routing**: Wouter for client-side routing.
- **Design System**: Features General Sans font, custom Verto color palette (purple, blue, green, orange, grayscale), responsive design with a mobile-first approach, and WCAG-compliant accessibility.
- **Dark Mode**: Automatic system detection with theme persistence via localStorage, comprehensive coverage, and brand-colored gradients for sections.
- **Content Strategy**: Marketing-focused single-page application with sectioned content (hero, problem, solution, AI capabilities, pilot programs, team), strategic CTAs, and updated trust logos for credibility.
- **Dynamic Features**: Dynamic hero CTAs, interactive navigation that scrolls to and activates specific content pillars, and page-specific content with targeted CTAs and stakeholder-specific problem sections.

### Backend Architecture
- **Technology Stack**: Node.js with Express.js framework, implemented entirely in TypeScript.
- **Development**: Vite middleware for hot module replacement.
- **Production**: Serves static assets and API endpoints from pre-built client assets.

### Data Layer
- **ORM**: Drizzle ORM for type-safe PostgreSQL database operations.
- **Database**: Configured for Neon Database (serverless PostgreSQL).
- **Schema Management**: Centralized schema definitions and Drizzle Kit for migrations.

### Development Architecture
- **Structure**: Monorepo with client, server, and shared code.
- **Code Quality**: TypeScript path aliases, hot reloading, error overlays, consistent formatting, and type checking.

### System Design Choices
- **Pillar Redesign**: Full-width sections with zero borders and integrated user journey diagrams for Distribution (green), Payments (purple), and Compliance (blue).
- **Interactive Diagrams**: Visualizations of agent/customer flows, merchant/customer flows, and compliance dashboards with transaction reconciliation.
- **SEO Optimization**: Dynamic SEO metadata matching hero section content for various landing pages (Home, Stablecoin, DeFi Products, Secure DeFi Ops).
- **Executive Insights**: Authenticated quotes from key institutional stakeholders and co-founder insights tailored to C-suite decision-makers.
- **Feature Benefits**: Platform capabilities tied to specific benefits for Trading, Payments, Distribution, Compliance, and Service.
- **Urgency Messaging**: Customized "Why Now" sections for each landing page, addressing institutional pain points like "Battle for the Deposit" and "Rapid Decay of Alpha."

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL.
- **Drizzle ORM**: Database operations and schema management.

### Frontend Libraries
- **React Ecosystem**: React 18.
- **UI Framework**: Radix UI primitives, shadcn/ui.
- **Styling**: Tailwind CSS, PostCSS.
- **State Management**: TanStack React Query.
- **Form Handling**: React Hook Form with Zod validation.
- **Icons**: Lucide React.

### Development Tools
- **Build System**: Vite.
- **Language**: TypeScript.
- **Compiler**: ESBuild.

### Third-Party Integrations
- **Fonts**: Google Fonts (General Sans).

## Deployment Configuration

### Static Deployment Fix (August 17, 2025)
- **Issue**: Replit static deployment failed due to missing `index.html` in `dist/` root directory
- **Root Cause**: Vite configuration outputs files to `dist/public/` instead of `dist/`
- **Solution**: Created deployment workflow that copies built files from `dist/public/` to `dist/` root
- **Files Added**:
  - `build-static.sh`: Automated script for preparing static deployment structure
  - `DEPLOYMENT_README.md`: Comprehensive deployment guide with troubleshooting
- **Current Structure**: Static files now properly located in `dist/` for Replit deployment
- **Build Process**: `npm run build` generates files, manual copy step required for deployment

### Navigation and User Experience Fixes (August 20, 2025)
- **Issue 1**: "Institutional Liquidity" button incorrectly navigated to "distribution" tab instead of first tab
- **Root Cause**: Button used `pillarKey: "liquidity"` instead of `pillarKey: "trading"` (first tab)
- **Solution**: Updated both `/offer-defi-products` and `/secure-defi-ops` pages to use correct "trading" pillar key
- **Issue 2**: Mobile navigation tabs didn't scroll to show compliance tab when clicked
- **Root Cause**: Missing scroll-into-view behavior for mobile tab navigation
- **Solution**: Added mobile-responsive tab scrolling with `scrollIntoView()` on tab button clicks
- **Files Modified**: 
  - `client/src/pages/offer-defi-products.tsx`: Fixed button navigation
  - `client/src/pages/secure-defi-ops.tsx`: Fixed button navigation  
  - `client/src/components/pillars-new-section.tsx`: Added mobile tab scrolling