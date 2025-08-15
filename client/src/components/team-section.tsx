import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png";
import hishamImage from "@assets/hisham_1754986415368.png";
import nileshImage from "@assets/nilesh_1754986415369.png";
import { Quote } from "lucide-react";

// Company logos stored in public/logos with clean filenames

// Reusable Logo Cloud Component
const LogoCloud = () => {
const logos = [
{ name: "Federal Reserve", svg: "/logos/fed-logo.png" },
{ name: "DTCC", image: "/logos/dtcc-logo.png" },
{ name: "Moody's", image: "/logos/moodys-logo.png" },
{ name: "PayPal", image: "/logos/paypal-logo.png" },
{ name: "Google", image: "/logos/google-logo.png" },
{ name: "Microsoft", image: "/logos/microsoft-logo.png" },
];

return (
<div className="max-w-7xl mx-auto" data-testid="trust-logos">
<div className="flex justify-center items-center gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 flex-wrap gap-y-4">
{logos.map(logo => (
<div key={logo.name} className="flex items-center justify-center h-4 md:h-5 lg:h-6">
{logo.svg ? (
<img 
src={logo.svg} 
alt={logo.name}
className="h-full w-auto object-contain opacity-60 dark:opacity-40 hover:opacity-80 dark:hover:opacity-60 transition-opacity duration-200 text-slate-600 dark:text-slate-400"
/>
) : logo.image ? (
<img 
src={logo.image} 
alt={logo.name}
className="h-full w-auto object-contain opacity-60 dark:opacity-40 hover:opacity-80 dark:hover:opacity-60 transition-opacity duration-200 filter dark:brightness-0 dark:invert"
/>
) : (
<span className="text-slate-600 dark:text-slate-400 font-medium text-sm opacity-60 hover:opacity-80 transition-opacity duration-200">
{logo.name}
</span>
)}
</div>
))}
</div>
</div>
);
};

// Reusable Team Member Card Component
const TeamMemberCard = ({ image, name, role, roleColor, description, testId }: {
image: string;
name: string;
role: string;
roleColor: string;
description: string;
testId: string;
}) => (
<div className="group relative bg-white dark:bg-slate-800/50 p-6 rounded-2xl text-center border border-slate-200/80 dark:border-slate-800 transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:-translate-y-1" data-testid={testId}>
<img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-slate-100 dark:ring-slate-700/50 group-hover:ring-offset-2 group-hover:ring-offset-white dark:group-hover:ring-offset-slate-900 transition-all" />
<h3 className="text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
<p className={`text-sm font-semibold mb-3 text-${roleColor}`}>{role}</p>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
</div>
);


export default function TeamSection() {
const teamMembers = [
{ name: "David Cass", role: "CEO", roleColor: "verto-blue", image: davidImage, description: "CISO at GSR and IBM with 25+ years in security leadership. Harvard faculty, former Federal Reserve regulator. Wharton and MIT graduate.", testId: "team-david" },
{ name: "Daniel Garrie", role: "General Counsel", roleColor: "verto-green", image: danielImage, description: "DOJ/DTCC compliance advisor in 200+ federal cases", testId: "team-daniel" },
{ name: "Hisham Anwar", role: "CTO", roleColor: "verto-orange", image: hishamImage, description: "Serial entrepreneur with successful exits to Microsoft and Google. Former Head of Product at Google and CEO of BrightBytes. Holds an Masters from MIT.", testId: "team-hisham" },
{ name: "Nilesh Khaitan", role: "CPO", roleColor: "verto-purple", image: nileshImage, description: "Scaled Venmo/PayPal crypto & P2P to 90M+ users", testId: "team-nilesh" },
];

return (
<section id="team" className="py-24 bg-slate-50/50 dark:bg-gray-900/50">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight" data-testid="team-title">
Built by Leading Experts in Finance & Technology
</h2>
<p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
We've scaled initiatives at the world's leading financial and technology institutions.
</p>
</div>

<div className="mb-20">
<LogoCloud />
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{teamMembers.map(member => <TeamMemberCard key={member.name} {...member} />)}
</div>
</div>

{/* --- REVISED MISSION STATEMENT --- */}
<blockquote className="mt-20 max-w-4xl mx-auto px-6 sm:px-8 text-center">
<div className="relative">
<Quote className="absolute -top-4 -left-4 w-6 h-6 md:w-9 md:h-9 text-verto-blue/30 dark:text-verto-blue/20 transform rotate-180" />
<p className="text-1xl md:text-2xl font-light text-slate-700 dark:text-slate-300 leading-tight md:leading-snug italic px-8 md:px-12">
Creating a safer, more open financial future by making digital assets accessible, trusted, and usable for everyone, everywhere.
</p>
<Quote className="absolute -bottom-4 -right-4 w-6 h-6 md:w-9 md:h-9 text-verto-blue/30 dark:text-verto-blue/20" />
</div>
</blockquote>
{/* --------------------------- */}
</section>
);
}