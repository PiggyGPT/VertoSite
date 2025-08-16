# Verto - Institutional Stablecoin Rails Platform

## Overview

Verto is a comprehensive web application that serves as a marketing and informational platform for institutional stablecoin infrastructure services. The application presents Verto's value proposition as a unified platform for minting, moving, and reconciling stablecoins across multiple blockchain networks with institutional-grade compliance and controls.

The platform positions itself as combining the accessibility of M-Pesa, the seamlessness of Stripe, and the compliance rigor of SWIFT, targeting banks, payment service providers, and fintech companies looking to implement stablecoin operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React Single Page Application**: Built with React 18 using TypeScript for type safety
- **Component Library**: Utilizes shadcn/ui components based on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design system implementing Verto brand colors and typography
- **State Management**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Express.js Server**: Node.js backend with Express framework serving both API endpoints and static assets
- **TypeScript**: Full TypeScript implementation across the stack
- **Development Mode**: Vite middleware integration for hot module replacement during development
- **Production Mode**: Static file serving with pre-built client assets

### Data Layer
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Centralized schema definitions in the shared directory for type consistency
- **Database Provider**: Configured for Neon Database (PostgreSQL-compatible serverless database)
- **Migrations**: Drizzle Kit for database schema migrations and management

### Development Architecture
- **Monorepo Structure**: Client, server, and shared code organized in a single repository
- **Path Aliases**: TypeScript path mapping for clean imports across client, server, and shared modules
- **Development Tools**: Hot reloading, error overlays, and development banners for enhanced developer experience
- **Code Quality**: Consistent formatting and type checking across the entire codebase

### UI/UX Design System
- **Typography**: General Sans font family for modern, professional appearance
- **Color Palette**: Custom Verto brand colors including purple, blue, green, and orange with comprehensive gray scale
- **Component Architecture**: Reusable UI components with consistent spacing, typography, and interaction patterns
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: Radix UI primitives ensure WCAG compliance and keyboard navigation support

### Content Strategy
- **Marketing-Focused**: Single-page application optimized for lead generation and conversion
- **Sectioned Content**: Modular sections including hero, problem identification, solution presentation, AI capabilities, pilot programs, and team credentials
- **Call-to-Action Optimization**: Strategic placement of primary and secondary CTAs throughout the user journey
- **Trust Indicators**: Updated trust logos to FED, DTCC, Moody's, PayPal, Google, Microsoft for enhanced credibility
- **Payment UX Messaging**: Enhanced with Stripe-like language: "One Tap Payment UX via QR codes for any POS or online checkout"

### Dark Mode Implementation
- **Auto-System Detection**: ThemeProvider automatically detects user's system preference (light/dark)
- **Theme Persistence**: User theme choice persists across sessions using localStorage
- **Comprehensive Coverage**: Full dark mode support across all components with proper contrast ratios
- **Colorful Gradients**: Each section uses brand-colored gradients (purple, blue, green, orange) instead of dark backgrounds
- **Accessibility Compliant**: Dark mode maintains WCAG contrast standards with proper text/background combinations

### Recent Updates (January 2025)
- **Complete Pillars Redesign**: Transformed into full-width sections with zero borders, integrated user journey diagrams
- **Enhanced Visual Flow**: Each pillar now features detailed user journey visualization with step-by-step flow diagrams
- **Professional Layout**: Distribution (green), Payments (purple), and Compliance (blue) sections with distinct visual identity
- **Interactive Diagrams**: Agent/Customer flows for Distribution, Merchant/Customer flows for Payments, and Compliance dashboard with transaction reconciliation
- **Content Restructure**: Detailed experience breakdown for Agent Experience vs Customer Experience in each operational pillar
- **Visual Compliance**: Compliance section shows final transactions from issuance and payments with checkmarks and reconciliation lists
- **Industry Standards**: Enhanced visual design following leading fintech industry standards for operational clarity
- **Full-Width Architecture**: Removed section borders and implemented seamless full-width gradient backgrounds
- **Trust Indicators**: Updated trust logos to FED, DTCC, Moody's, PayPal, Google, Microsoft for enhanced credibility
- **Dark Mode Enhancement**: Complete dark mode implementation with system preference detection and theme persistence

### Recent Updates (August 2025)
- **Dynamic CTA System**: Implemented dynamic hero CTAs that adapt to each landing page with pillar-specific functionality
- **Interactive Navigation**: Hero CTAs on landing pages scroll to and activate specific pillars (Distribution, Payments, Compliance, etc.)
- **Page-Specific Content**: Each landing page features targeted CTAs relevant to the use case (stablecoins, DeFi products, trading ops)
- **Compact Navigation**: Reduced navigation height and spacing for better mobile compatibility
- **Consistent Branding**: Updated footer to use same SVG logo as navigation header for brand consistency
- **Stakeholder-Specific Problem Sections**: Created unique, authentic quotes from key institutional stakeholders for each landing page:
  - **Stablecoin Page**: CEO (distribution scaling), Head of Payments (checkout conversion), CISO (regulatory compliance)
  - **DeFi Products Page**: CEO (DEX competition), Head of Liquidity (DeFi access), CISO (security controls)
  - **Secure DeFi Ops Page**: CEO (CeFi vs DeFi), Head of Investments (operational efficiency), CISO (risk management)
- **Tailored Co-Founder Insights**: Customized infrastructure section quotes for each landing page with offering-specific messaging:
  - **Stablecoin Page**: David on distribution challenges, Nilesh on payment convenience, Daniel on compliance automation
  - **DeFi Products Page**: David on institutional DeFi access, Nilesh on DeFi user experience, Daniel on exchange compliance
  - **Secure DeFi Ops Page**: David on trading security, Daniel on transaction compliance, Hisham on operational reliability

### Bug Fixes (August 2025)
- **Component Name Conflicts**: Fixed duplicate component names (VisualContainer, Header) in pillars-new-section.tsx causing compilation errors
- **Import Issues**: Resolved duplicate React imports and missing Monitor icon import from lucide-react
- **TypeScript Errors**: Added proper type annotations for component props to resolve implicit 'any' type errors
- **JSX Consistency**: Fixed mismatched opening/closing JSX tags for renamed components
- **Application Stability**: Successfully restored application to working state after resolving all LSP diagnostics

## Deployment Configuration

### Production Build Setup
- **Build Script**: `npm run build` - Builds both frontend (Vite) and backend (esbuild) for production
- **Start Script**: `npm start` - Runs the production server using the compiled output
- **Production Bundle**: Backend compiled to `dist/index.js` with external packages bundled appropriately

### Deployment Notes
- The project includes production-ready scripts in package.json
- Frontend built with Vite optimization for production assets
- Backend bundled with esbuild for Node.js production environment
- Environment variables properly configured for production deployment

### Deployment Fix Required (January 2025)
- **Issue**: Replit deployment blocked due to .replit file using development command (`npm run dev`)
- **Root Cause**: The .replit file deployment configuration points to development script instead of production
- **Manual Fix Required**: Update the .replit file deployment section:
  ```
  [deployment]
  deploymentTarget = "autoscale"
  run = ["sh", "-c", "npm run build && npm start"]
  ```
- **Additional Workflow Fix**: Update the workflow task in .replit from `npm run dev` to production command if needed for deployment
- **Status**: Requires manual update to .replit file - agent cannot modify this file directly

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL database for production deployments
- **Drizzle ORM**: Type-safe database operations and schema management
- **Environment Configuration**: Database URL and connection management through environment variables

### Frontend Libraries
- **React Ecosystem**: React 18 with supporting libraries for modern component development
- **UI Framework**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **State Management**: TanStack React Query for server state synchronization
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build System**: Vite for fast development server and optimized production builds
- **TypeScript**: Full-stack type safety with shared type definitions
- **Code Quality**: ESBuild for fast compilation and bundling
- **Development Environment**: Replit-specific plugins for enhanced development experience

### Third-Party Integrations
- **Font Loading**: Google Fonts integration for General Sans typography
- **Development Tooling**: Replit-specific development banner and error handling
- **Asset Management**: Vite-based asset processing and optimization