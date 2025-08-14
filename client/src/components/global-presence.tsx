// src/components/GlobalPresenceSection.tsx

import { Globe } from "lucide-react";

export default function GlobalPresenceSection() {
  return (
    <section className="bg-slate-100 dark:bg-slate-800/50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <Globe className="mx-auto h-10 w-10 text-verto-blue" />
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
          Global Presence
        </h2>
        <p className="mt-4 text-2xl font-medium text-slate-700 dark:text-slate-200 tracking-wide">
          New York • Barcelona • Singapore
        </p>
        <p className="mt-3 max-w-2xl mx-auto text-md text-slate-600 dark:text-slate-400">
          Round-the-clock monitoring and support for your digital asset operations, ensuring uptime and security across all time zones.
        </p>
      </div>
    </section>
  );
}