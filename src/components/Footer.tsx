import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ShieldCheck, 
  FileText, 
  RotateCcw, 
  Cookie
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://netzur.com/wp-content/uploads/2024/06/netzur-primary-logo.png" 
                alt="Netzur Logo" 
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-slate-800 font-medium text-xs">
              Netzur Networks Pvt Ltd <span className="text-slate-500 font-normal">(Formerly Janitor Network Pvt Ltd)</span>
            </p>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Simplifying internet access and ISP operations through secure, automated solutions since 2017.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-[#F13B0A] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="X (Twitter)" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-[#F13B0A] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-[#F13B0A] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-[#F13B0A] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#who-we-are" className="hover:text-slate-900 transition-colors">Who We Are</a></li>
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact Us</a></li>
              <li><a href="#blog" className="hover:text-slate-900 transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-slate-900 transition-colors">Join the Team</a></li>
              <li><a href="#kb" className="hover:text-slate-900 transition-colors">Knowledge Base</a></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900">
              Solutions
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">Internet Management & Billing System For ISPs</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">Wi-Fi Hotspot System For Hotels</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">OTP Based Public Wi-Fi</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">Wi-Fi Hotspot System for Institutes</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">Library Wi-Fi Management System</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">Retail Business Wi-Fi Management System</a></li>
            </ul>
          </div>

          {/* Office Locations & Contact Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900">
              Contact & Offices
            </h4>
            <div className="space-y-3 text-slate-600 text-[11px] leading-relaxed">
              <div>
                <strong className="text-slate-800 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#F13B0A]" />
                  Sidhpur
                </strong>
                <span className="block pl-5">S-5, Tirupati Market, Near Bus Station, Sidhpur 384151, Gujarat</span>
              </div>
              <div>
                <strong className="text-slate-800 flex items-center gap-1.5 font-bold">
                  <Building2 className="w-3.5 h-3.5 text-[#F13B0A]" />
                  Ahmedabad
                </strong>
                <span className="block pl-5">C-1106 Siddhi Vinayak Towers, Makarba, S.G Highway, Ahmedabad-380051</span>
              </div>
              <div className="pt-2 space-y-1 pl-0.5">
                <a href="mailto:sales@netzur.com" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#F13B0A]" />
                  <span>sales@netzur.com</span>
                </a>
                <a href="tel:+919408053196" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#F13B0A]" />
                  <span>+91 94080 53196</span>
                </a>
                <a href="tel:+916355086848" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#F13B0A]" />
                  <span>+91 63550 86848</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Policy Highlights */}
        <div className="pt-8 pb-8 border-t border-slate-200 flex flex-wrap gap-6 justify-between text-slate-700 text-xs">
          <a href="#" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <ShieldCheck className="w-4 h-4 text-[#F13B0A]" />
            <span>Privacy Policy</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <RotateCcw className="w-4 h-4 text-[#F13B0A]" />
            <span>Refund Policy</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <FileText className="w-4 h-4 text-[#F13B0A]" />
            <span>Terms & Conditions</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <Cookie className="w-4 h-4 text-[#F13B0A]" />
            <span>Cookie Policies</span>
          </a>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <div>
            © 2026 Netzur Networks Pvt Ltd (Formerly Janitor Network Pvt Ltd). All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};