import React, { useState, useEffect, useMemo, useRef } from "react";
import { useCalendlyModal } from "./calendly-modal";
import SharedPillarNav from "@/components/shared-pillar-nav";

// ===== ANIMATION CONSTANTS & STYLES =====



// ===== INTERFACES =====

interface CustomFounderQuote {
  pillarKey: string;
  quote: string;
  name: string;
  title: string;
  image: string;
}

interface PillarsSectionProps {
  title?: string;
  subtitle?: string;
  customFounderQuotes?: CustomFounderQuote[];
  customOrder?: string[];
}
import { AnimatePresence, motion } from 'framer-motion';
import { MobileFrame } from './ui/mobile-frame';
import { PanelHeader } from './common-visuals/PanelHeader';
import {
  User, Users, Rocket, Terminal,
  Zap, Store, Archive, KeyIcon,
  ShieldCheck, SquareStack, SlidersHorizontal,
  Database, GitBranch,
  LifeBuoy, Lock, ArrowRight, Route, Shield, MessageCircle,
  ChevronDown, Landmark, History, Link, Clock, Plus,
  Settings, Gauge, Network, Server, Globe, FileText, CheckCircle,
  Cpu, Keyboard, Monitor, Coins, CreditCard, TrendingUp, Workflow, Calendar, Quote,
  Loader2, Building, Blocks, ArrowUpRight, ArrowDownLeft, HandCoins, RefreshCw,
  Smartphone, ScanLine, Fingerprint, Briefcase, DollarSign, Activity, Gift, Wallet
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png";
import hishamImage from "@assets/hisham_1754986415368.png";
import nileshImage from "@assets/nilesh_1754986415369.png";
import { InvoicingVisual } from "./invoicing-visual/InvoicingVisual";
import { MintingVisual } from "./minting-visual/MintingVisual";
import { PayrollVisual } from "./payroll-visual/PayrollVisual";
import { PaymentsVisual } from "./payments-visual/PaymentsVisual";
import { SharedSettlementVisual } from "./pillars-visuals/SharedSettlementVisual";
import { InstantAuthorizationVisual } from "./pillars-visuals/InstantAuthorizationVisual";
import { SharedIncentivesVisual } from "./pillars-visuals/SharedIncentivesVisual";
import { KeysVisual } from "./keys-visual/KeysVisual";
import { RouterVisual } from "./router-visual/RouterVisual";
import { UnitEconomicsSection } from "./unit-economics-section";
import { CollectiveOpportunitySection } from "./collective-opportunity-section";

// --- Simplified Visual Container - No Background Interference ---
const VisualContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
    {children}
  </div>
);


// Reusable Header component for consistent styling
const Header = ({ title, subtitle, icon, badgeText }: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  badgeText?: string
}) => (
  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
    <div>
      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">{title}</h3>
      {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
    <div className="flex items-center gap-2">
      {badgeText && (
        <span className="text-sm font-medium px-2 py-1 bg-green-200 text-green-700 rounded-full dark:bg-green-700 dark:text-green-200">
          {badgeText}
        </span>
      )}
      {icon}
    </div>
  </div>
);




// ExecutiveDistributionFlow component defined above


// --- Section Components ---



// --- VISUAL 4: Minting (Deposit to Mint Flow) ---
// --- MintingVisual has been extracted to ./components/minting-visual/MintingVisual.tsx ---



// --- VISUAL 5: Compliance (Animated Flow) ---


// --- VISUAL 5: Service (Animated Flow) ---




// DESIGN CHANGE: Create a subtle, blended founder quote banner with brand colors.
const getBrandColor = (textClass: string) => {
  const colorMap: { [key: string]: { hex: string; rgba: string } } = {
    'text-albor-plum': { hex: '#A18DE5', rgba: 'rgba(161, 141, 229, 0.3)' },
    'text-albor-blue': { hex: '#4D88FF', rgba: 'rgba(77, 136, 255, 0.3)' },
    'text-albor-teal': { hex: '#83F4EC', rgba: 'rgba(131, 244, 236, 0.3)' },
    'text-albor-gold': { hex: '#FDB94E', rgba: 'rgba(253, 185, 78, 0.3)' },
  };
  return colorMap[textClass] || { hex: '#FDB94E', rgba: 'rgba(253, 185, 78, 0.3)' };
};

const FounderInsightBanner = ({ quote, name, title, image, colorClasses }: {
  quote: string;
  name: string;
  title: string;
  image: string;
  colorClasses: any;
}) => {
  const brandColor = getBrandColor(colorClasses.text);
  const bgRgba = colorClasses.text === 'text-albor-plum' ? 'rgba(161, 141, 229, 0.04)' : 
                  colorClasses.text === 'text-albor-blue' ? 'rgba(77, 136, 255, 0.04)' : 
                  colorClasses.text === 'text-albor-teal' ? 'rgba(131, 244, 236, 0.04)' : 
                  'rgba(253, 185, 78, 0.04)';
  const borderRgba = colorClasses.text === 'text-albor-plum' ? 'rgba(161, 141, 229, 0.1)' : 
                     colorClasses.text === 'text-albor-blue' ? 'rgba(77, 136, 255, 0.1)' : 
                     colorClasses.text === 'text-albor-teal' ? 'rgba(131, 244, 236, 0.1)' : 
                     'rgba(253, 185, 78, 0.1)';
  const footerBorderRgba = colorClasses.text === 'text-albor-plum' ? 'rgba(161, 141, 229, 0.2)' : 
                           colorClasses.text === 'text-albor-blue' ? 'rgba(77, 136, 255, 0.2)' : 
                           colorClasses.text === 'text-albor-teal' ? 'rgba(131, 244, 236, 0.2)' : 
                           'rgba(253, 185, 78, 0.2)';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-xl p-4 md:p-6 mt-0 mb-8 overflow-hidden transition-all duration-300 border"
      style={{
        background: `linear-gradient(135deg, ${bgRgba})`,
        borderColor: borderRgba
      }}
    >
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 relative z-10">
        <div className="flex-shrink-0">
          <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover ring-3 ring-opacity-30 flex-shrink-0" style={{ borderColor: brandColor.rgba }} />
        </div>
        <div className="flex-grow">
          <div className="flex items-start gap-2 mb-2">
            <Quote className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50" style={{ color: brandColor.hex }} />
            <blockquote className="text-sm md:text-base font-medium leading-snug text-slate-700 dark:text-slate-200">
              <p>"{quote}"</p>
            </blockquote>
          </div>
          <footer className="mt-3 pt-3 border-t border-opacity-10" style={{ borderColor: footerBorderRgba }}>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">{name}</p>
            <p className="text-xs mt-0.5" style={{ color: brandColor.hex }}>{title}</p>
          </footer>
        </div>
      </div>
    </motion.div>
  );
};

// DESIGN CHANGE: Define the FeatureItem with larger text and better spacing.
const FeatureItem = ({ icon: Icon, title, children, iconColor }: { icon: React.ComponentType<any>, title: string, children: React.ReactNode, iconColor?: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800">
        <Icon className="w-6 h-6" style={{ color: iconColor || '#4D88FF' }} />
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h4>
      <p className="mt-1 text-base text-slate-600 dark:text-slate-300 leading-relaxed">{children}</p>
    </div>
  </div>
);


const getAccentColor = (colorName: string) => {
  const colors: { [key: string]: string } = {
    'albor-gold': '#FDB94E',
    'albor-copper': '#A66E4E',
    'albor-plum': '#A18DE5',
    'albor-blue': '#4D88FF',
    'albor-teal': '#83F4EC',
    'albor-purple': '#FDB94E',
    'albor-green': '#4ade80',
    'albor-orange': '#83F4EC',
  };
  return colors[colorName] || '#FDB94E';
};

const getColorClasses = (colorName: string) => {
  const map: Record<string, any> = {
    'albor-gold': { border: 'border-albor-gold', text: 'text-albor-gold', bg: 'bg-albor-gold' },
    'albor-plum': { border: 'border-albor-plum', text: 'text-albor-plum', bg: 'bg-albor-plum' },
    'albor-blue': { border: 'border-albor-blue', text: 'text-albor-blue', bg: 'bg-albor-blue' },
    'albor-teal': { border: 'border-albor-teal', text: 'text-albor-teal', bg: 'bg-albor-teal' },
    'albor-green': { border: 'border-albor-green', text: 'text-albor-green', bg: 'bg-albor-green' },
    'albor-purple': { border: 'border-albor-purple', text: 'text-albor-purple', bg: 'bg-albor-purple' },
    'albor-cyan': { border: 'border-albor-cyan', text: 'text-albor-cyan', bg: 'bg-albor-cyan' },
    'albor-orange': { border: 'border-albor-orange', text: 'text-albor-orange', bg: 'bg-albor-orange' },
  };
  return map[colorName] || map['albor-blue'];
};


export const ApplicationsSection = ({ onScheduleCall }: { onScheduleCall: () => void }) => {
  const [activeTab, setActiveTab] = useState("settlement");
  const appTabsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll mobile tabs to center active tab
  useEffect(() => {
    if (appTabsRef.current && window.innerWidth < 640) {
      const container = appTabsRef.current;
      const activeTabEl = container.querySelector(`[data-app-tab="${activeTab}"]`);
      if (activeTabEl) {
        activeTabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  const tabs = [
    { key: "settlement", label: "Shared Settlement" },
    { key: "authorization", label: "Interbank Authorization" },
    { key: "incentives", label: "Shared Incentives" },
  ];

  const pillars = {
    settlement: {
      label: "Shared Settlement", color: "albor-plum", title: "Digital Trade Credits",
      description: "Instead of wiring cash to Tier 1 Clients for trade loans, issue them digital credit lines for Global Payables.",
      visual: <SharedSettlementVisual />,
      founderQuote: {
        quote: "True liquidity means funds arrive when needed—instantly. Albor replaces days of settlement delays with seconds of certainty.",
        name: "Nilesh Khaitan",
        title: "CEO | Ex-Venmo/PayPal Crypto",
        image: nileshImage
      },
      features: [
        { 
          icon: Zap, 
          title: "Global Network Acceptance", 
          description: "Credits settle instantly across the interbank network, replacing slow correspondent wires." 
        }, 
        { 
          icon: TrendingUp, title: "Deposit Yield Retention", description: "Your bank earns 3–5% on the underlying risk-free assets while the credits circulate as payment." }, 
        { icon: ShieldCheck, title: "Full Regulatory Compliance", description: "Operate within established frameworks like GENIUS, MICA, and Guatemala’s Digital Asset Bill." }]
    },
    authorization: {
      label: "Interbank Authorization", color: "albor-blue", title: "Digital Trade Swipes",
      description: "The first interbank authorization layer for invoices, payroll, and merchant payments.",
      visual: <InstantAuthorizationVisual />,
      founderQuote: {
        quote: "By engaging the payer in the approval process, we eliminate fraud risk and allow suppliers to access capital at bank rates, instantly.",
        name: "David Cass",
        title: "Chairman | Former Federal Reserve Regulator",
        image: davidImage
      },
      features: [
        { icon: Network, title: "Reverse Factoring", description: "One network for all supply chain financing, using MLETR invoices that cards lack." },
        { icon: ShieldCheck, title: "Interbank Authorization", description: "Replace manual verification with instant, interbank-guaranteed payment promises against approved invoices." }, 
        { icon: Zap, title: "Risk-Free Settlement", description: "Suppliers and workers receive instant, prefunded payments—zero credit risk for your bank." }
      ]
    },
    incentives: {
      label: "Shared Incentives", color: "albor-gold", title: "Interchange Revenue",
      description: "A fee protocol that turns trade flows into a high-margin revenue network.",
      visual: <SharedIncentivesVisual />,
      founderQuote: {
        quote: "Giving workers instant access to their earned wages reduces financial stress and reliance on predatory loans.",
        name: "Nilesh Khaitan", 
        title: "CEO | Ex-Venmo/PayPal Crypto",
        image: nileshImage
      },
      features: [
        { icon: Coins, title: "Issuer Interchange", description: "Earn fees by time your credits move between any wallet in the network." }, 
        { icon: Wallet, title: "Acquirer Fees", description: "Earn fees by processing transactions for your deep-tier supply chain clients." }, 
        { icon: RefreshCw, title: "FX Spreads", description: "Capture LP fees from interbank credit swaps via automated market makers." }]
    }
  };


  const activePillar = pillars[activeTab as keyof typeof pillars];
  const activeColors = activePillar ? getColorClasses(activePillar.color) : getColorClasses('albor-blue');

  return (
    <div id="applications-section" className="w-full py-16 md:py-24 space-y-4">
       {/* Applications Header */}
       <div className="text-center max-w-4xl mx-auto px-4 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6 leading-tight">
            Introducing the Albor Trade Card</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-200">
            Albor's interbank rails bridges three gaps blocking 90% of global trade finance.
          </p>
       </div>

       {/* Applications Tabs & Content */}
       <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
           <div ref={appTabsRef} className="flex border-b border-slate-200 dark:border-slate-700 mb-8 overflow-x-auto no-scrollbar justify-center">
             {tabs.map((tab) => (
               <button
                 key={tab.key}
                 data-app-tab={tab.key}
                 onClick={() => setActiveTab(tab.key)}
                 className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.key ? `border-${activeColors.text.replace('text-', '')} ${activeColors.text}` : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                 }`}
                 style={{ borderColor: activeTab === tab.key ? getAccentColor(activePillar.color) : undefined, color: activeTab === tab.key ? getAccentColor(activePillar.color) : undefined }}
               >
                 {tab.label}
               </button>
             ))}
           </div>

           {/* Active Tab Content */}
           <div className="pt-4 pb-4">
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center">
                <div className="lg:col-span-1">
                  <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: getAccentColor(activePillar.color) }}>{activePillar.label}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-4">{activePillar.title}</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{activePillar.description}</p>
                   
                   <div className="lg:hidden my-10">
                     {activePillar.visual}
                   </div>

                   <div className="space-y-6 md:space-y-8 mt-10 mb-10">
                      {activePillar.features.map((feature) => (
                        <FeatureItem key={feature.title} icon={feature.icon} title={feature.title} iconColor={getAccentColor(activePillar.color)}>{feature.description}</FeatureItem>
                      ))}
                   </div>
                   
                   <motion.button
                      onClick={onScheduleCall}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-md"
                   >
                     <Calendar className="w-4 h-4" />
                     <span>Book a Demo</span>
                     <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                   </motion.button>
                </div>
                 <div className="hidden lg:flex lg:col-span-1 justify-center">
                   <div className="w-full max-w-md">
                     {activePillar.visual}
                   </div>

                 </div>
             </div>
           </div>
       </div>
    </div>
  );
};



export default function PillarsSection() {
  const { openModal, CalendlyModal } = useCalendlyModal();

  return (
    <div id="infrastructure" className="space-y-0 pb-0 mb-0 scroll-mt-28">
       <ApplicationsSection onScheduleCall={() => openModal("Book a Demo")} />
       <UnitEconomicsSection />
       <CollectiveOpportunitySection />
       <CalendlyModal />
    </div>
  );
}