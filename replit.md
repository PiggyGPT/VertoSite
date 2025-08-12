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
- **Text Updates**: Changed "3 proven models" to "3 proven operational models" for clarity
- **Content Structure**: Simplified to single subtitle per section following Stripe-style patterns
- **Section Headings**: Updated to action-oriented messaging: "Stablecoins are an operational nightmare", "AI Risk Management that scales", "Launch Pilot in 90 days"
- **Professional Design**: Reduced bold colorful backgrounds to sophisticated slate/gray gradients for executive audiences
- **Vertical Spacing**: Optimized to py-16/py-20 for improved content flow and readability
- **AI Risk Messaging**: Enhanced risk assessment section to emphasize "Turn manual 3-week audits into real-time assessments in minutes"
- **Dark Mode Enhancement**: Complete dark mode implementation with system preference detection and theme persistence

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