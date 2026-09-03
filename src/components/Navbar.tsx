import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Shield, Zap, Server, Globe, Users, Headphones } from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mega Menu Data Structures
  const productFeatures = [
    { name: 'Billing & Finance', desc: 'Invoicing & payment gateways', href: '#billing' },
    { name: 'Subscriber Management', desc: 'Portal & user lifecycles', href: '#subscriber' },
    { name: 'Franchise & Reseller', desc: 'Multi-tier partner nodes', href: '#franchise' },
    { name: 'Ticketing System', desc: 'Automated SLA support', href: '#ticketing' },
    { name: 'Network Map', desc: 'Real-time topology view', href: '#network-map' },
    { name: 'Wi-Fi Hotspot', desc: 'Captive portal manager', href: '#wifi-hotspot' },
    { name: 'ACS (TR-069)', desc: 'Remote device management', href: '#acs' },
    { name: 'Inventory Management', desc: 'Stock & hardware tracking', href: '#inventory' },
  ];

  const solutionsList = [
    { title: 'ISP Billing Systems', desc: 'End-to-end ISP automation', icon: Server },
    { title: 'Hotel Wi-Fi Hotspots', desc: 'PMS integrations & guest passes', icon: Globe },
    { title: 'OTP Public Wi-Fi', desc: 'SMS auth & legal compliance', icon: Shield },
    { title: 'Institute & Campus', desc: 'Bandwidth quota controls', icon: Users },
    { title: 'Library Systems', desc: 'Timed access management', icon: Zap },
    { title: 'Retail Business Wi-Fi', desc: 'Marketing & splash screens', icon: Headphones },
  ];

  const servicesCategories = [
    {
      title: 'ISP Billing & Management',
      links: ['Global Overview', 'Software in India', 'Software in Philippines', 'Software in Kenya', 'Software in Nigeria', 'Software in Africa']
    },
    {
      title: 'RADIUS & Core Systems',
      links: ['RADIUS Software', 'India Deployments', 'Africa Deployments', 'Kenya Infrastructure', 'Nigeria Nodes', 'Philippines Nodes']
    },
    {
      title: 'WISP & MikroTik Systems',
      links: ['WISP Global Software', 'MikroTik Billing System', 'India Integration', 'Kenya Operations', 'Nigeria Systems', 'Philippines Nodes']
    },
    {
      title: 'Enterprise & Hospitality',
      links: ['Retail Business Wi-Fi', 'Hotel Wi-Fi Solutions', 'Africa Hospitality', 'India Retail', 'Philippines Systems', 'Global Enterprise']
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img 
            src="https://netzur.com/wp-content/uploads/2024/06/netzur-primary-logo.png" 
            alt="Netzur Logo" 
            className="h-6 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-slate-700">
          
          {/* 1. PRODUCT MEGA MENU */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('product')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-[#F13B0A] hover:bg-slate-100 transition-colors">
              Product <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {activeDropdown === 'product' && (
              <div className="absolute top-full -left-12 w-[600px] bg-white border border-slate-200 rounded-2xl shadow-xl p-5 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <span className="text-xs font-bold text-[#F13B0A] uppercase tracking-wider">Product Modules</span>
                  {/* <span className="text-[11px] font-normal text-slate-400">12 Core Features</span> */}
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {productFeatures.map((item, idx) => (
                    <a key={idx} href={item.href} className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start justify-between group">
                      <div>
                        <div className="text-xs font-semibold text-slate-800 group-hover:text-[#F13B0A] transition-colors">{item.name}</div>
                        <div className="text-[11px] text-slate-400 font-normal">{item.desc}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-0.5" />
                    </a>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-normal">Looking for custom bandwidth configurations?</span>
                  <a href="#contact" className="inline-flex items-center gap-1 text-xs font-semibold text-[#F13B0A] hover:underline">
                    <span>Contact Engineering</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 2. SOLUTIONS MEGA MENU */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-[#F13B0A] hover:bg-slate-100 transition-colors">
              Solutions <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {activeDropdown === 'solutions' && (
              <div className="absolute top-full -left-16 w-[540px] bg-white border border-slate-200 rounded-2xl shadow-xl p-5 animate-in fade-in slide-in-from-top-2 duration-150">
                <span className="block text-xs font-bold text-[#F13B0A] uppercase tracking-wider border-b border-slate-100 pb-2 mb-3">
                  Industry Deployments
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {solutionsList.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a key={idx} href="#solutions" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-[#F13B0A]/10 group-hover:text-[#F13B0A] flex items-center justify-center shrink-0 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800 group-hover:text-[#F13B0A] transition-colors">{item.title}</div>
                          <div className="text-[11px] text-slate-400 font-normal">{item.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 3. SERVICES MULTI-COLUMN MEGA MENU */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-[#F13B0A] hover:bg-slate-100 transition-colors">
              Services <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute top-full -left-48 w-[800px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="grid grid-cols-4 gap-6">
                  {servicesCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-3">
                      <span className="block text-[11px] font-bold text-[#F13B0A] uppercase tracking-wider border-b border-slate-100 pb-2">
                        {cat.title}
                      </span>
                      <div className="space-y-1.5">
                        {cat.links.map((link, lIdx) => (
                          <a key={lIdx} href="#services" className="block text-xs font-normal text-slate-600 hover:text-[#F13B0A] hover:translate-x-0.5 transition-all truncate">
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#integrations" className="px-3.5 py-2 rounded-lg hover:text-[#F13B0A] hover:bg-slate-100 transition-colors">Integrations</a>
          <a href="#pricing" className="px-3.5 py-2 rounded-lg hover:text-[#F13B0A] hover:bg-slate-100 transition-colors">Pricing</a>

          {/* COMPANY DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-[#F13B0A] hover:bg-slate-100 transition-colors">
              Company <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {activeDropdown === 'company' && (
              <div className="absolute top-full left-0 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150">
                <a href="#about" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Who We Are</a>
                <a href="#careers" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Join the Team</a>
                <a href="#contact" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Contact</a>
              </div>
            )}
          </div>

          {/* RESOURCES DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-[#F13B0A] hover:bg-slate-100 transition-colors">
              Resources <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {activeDropdown === 'resources' && (
              <div className="absolute top-full right-0 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150">
                <a href="#blog" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Blog</a>
                <a href="#kb" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Knowledge Base</a>
                <a href="#rebranding" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Rebranding</a>
              </div>
            )}
          </div>

        </nav>

        {/* Right CTA Area */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenDemo}
            className="text-xs font-semibold text-slate-700 hover:text-[#F13B0A] px-3 py-2 transition-colors"
          >
            Login
          </button>

          <button
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F13B0A] text-white text-xs font-semibold hover:bg-[#d43105] active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Accordion Style) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto space-y-4">
          <div>
            <span className="block text-xs font-bold text-[#F13B0A] uppercase px-2 pt-2 pb-1">Product Features</span>
            {productFeatures.slice(0, 5).map((item, idx) => (
              <a key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 px-2 text-xs font-medium text-slate-700">{item.name}</a>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3">
            <span className="block text-xs font-bold text-[#F13B0A] uppercase px-2 pb-1">Solutions</span>
            {solutionsList.slice(0, 4).map((item, idx) => (
              <a key={idx} href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 px-2 text-xs font-medium text-slate-700">{item.title}</a>
            ))}
          </div>

          <div className="space-y-1 border-t border-slate-100 pt-3">
            <a href="#integrations" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 px-2 text-xs font-semibold text-slate-800">Integrations</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 px-2 text-xs font-semibold text-slate-800">Pricing</a>
            <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 px-2 text-xs font-semibold text-slate-800">Resources</a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenDemo?.(); }} 
              className="w-full py-2.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700"
            >
             Login
            </button>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenDemo?.(); }} 
              className="w-full py-2.5 rounded-full bg-[#F13B0A] text-white text-xs font-semibold"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};