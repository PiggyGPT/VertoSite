import { Card, CardContent } from "@/components/ui/card";
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png";
import hishamImage from "@assets/hisham_1754986415368.png";
import nileshImage from "@assets/nilesh_1754986415369.png";

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-slate-50/50 dark:bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="team-title">
          Built by Money-Moving Experts</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          We have built and secured the world's largest financial and technology networks.
</p> 
        </div>
        <div className="max-w-5xl mx-auto mb-16" data-testid="trust-logos">
          <div className="flex justify-center items-center gap-x-8 md:gap-x-12 lg:gap-x-16 flex-wrap gap-y-8">
            <div className="flex items-center justify-center h-6">
              <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">Federal Reserve</span>
            </div>
            <div className="flex items-center justify-center h-6">
              <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">DTCC</span>
            </div>
            <div className="flex items-center justify-center h-6">
              <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">Moody's</span>
            </div>
            <div className="flex items-center justify-center h-6">
              <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">PayPal</span>
            </div>
            <div className="flex items-center justify-center h-6">
              <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">Google</span>
            </div>
            <div className="flex items-center justify-center h-6">
              <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">Microsoft</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-slate-200 dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-600 transition-colors" data-testid="team-david">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
              <img src={davidImage} alt="David Cass" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">David Cass</h3>
            <p className="text-verto-blue font-medium mb-3 text-sm">CEO</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Former Fed regulator; ex‑CISO for $50B+ crypto desk</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-slate-200 dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-600 transition-colors" data-testid="team-daniel">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
              <img src={danielImage} alt="Daniel Garrie" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Daniel Garrie</h3>
            <p className="text-verto-green font-medium mb-3 text-sm">General Counsel</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">DOJ/DTCC compliance advisor in 200+ federal cases</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-slate-200 dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-600 transition-colors" data-testid="team-hisham">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
              <img src={hishamImage} alt="Hisham Anwar" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Hisham Anwar</h3>
            <p className="text-verto-orange font-medium mb-3 text-sm">CTO</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Built Google Classroom to 150M users; MIT engineer</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-slate-200 dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-600 transition-colors" data-testid="team-nilesh">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
              <img src={nileshImage} alt="Nilesh Khaitan" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Nilesh Khaitan</h3>
            <p className="text-verto-purple font-medium mb-3 text-sm">CPO</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Scaled Venmo/PayPal crypto & P2P to 90M+ users</p>
          </div>
        </div>


      </div>
    </section>
  );
}
