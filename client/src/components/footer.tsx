import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 dark:bg-black text-white py-16" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold verto-gradient-text mb-4">verto</div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Institutional rails to mint, move & monitor stablecoins. 
              As local as M‑Pesa. As seamless as Stripe. As compliant as SWIFT.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>contact@verto.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#infrastructure" className="hover:text-white transition-colors">Issuance Infrastructure</a></li>
              <li><a href="#infrastructure" className="hover:text-white transition-colors">Payment Rails</a></li>
              <li><a href="#infrastructure" className="hover:text-white transition-colors">Liquidity Management</a></li>
              <li><a href="#ai" className="hover:text-white transition-colors">AI Platform</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#team" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 Verto Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
