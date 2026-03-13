import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { MENU_ITEMS, PROPOSAL_CONTENT } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

// Consistent typography classes
const bodyTextSm = "text-[14px] font-medium leading-[1.6] text-stone-600";
const labelText = "text-[11px] font-semibold uppercase tracking-[0.08em] text-stone-500";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('executive-summary');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      let current = '';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sidebar content component to avoid duplication
  const SidebarContent = () => (
    <div className="flex flex-col h-full w-full">
      <div className="p-6 border-b border-stone-200/60">
        <div>
          <h1 className="font-semibold text-stone-900 leading-tight font-serif text-[19px] tracking-[1px]">StayWell Pharmacy x Haris&Co.</h1>
          <p className={labelText}>Proposal</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-8 px-6 no-scrollbar">
        <nav className="space-y-1.5 relative">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative w-full flex items-center justify-between px-4 py-3 text-[14px] font-medium rounded-lg transition-all duration-300 group z-10
                ${activeSection === item.id
                  ? 'text-orange-700'
                  : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100/50'}
              `}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-orange-50 border border-orange-100/50 rounded-lg -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 tracking-wide text-left">{item.label}</span>
              {activeSection === item.id && (
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <ChevronRight size={14} className="text-orange-600" />
                </motion.span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col md:flex-row font-sans text-stone-900">
      {/* Mobile Header */}
      <div className="md:hidden bg-white/80 backdrop-blur-md border-b border-stone-200 p-4 sticky top-0 z-50 flex justify-between items-center shadow-sm">
        <div className="font-semibold text-stone-800 flex items-center gap-2">
          <span className="font-serif tracking-[1px]">StayWell Pharmacy x Haris&Co.</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-stone-600 p-2 hover:bg-stone-100 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Navigation */}
      <aside
        className={`
          fixed top-0 left-0 bottom-0 w-[280px] max-w-[85vw]
          bg-white shadow-2xl z-50
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden
          flex flex-col
        `}
      >
        <SidebarContent />
      </aside>

      {/* Desktop Sidebar Navigation */}
      <aside
        className="
          hidden md:flex flex-col
          sticky top-6
          ml-4 lg:ml-6
          h-[calc(100vh-3rem)] 
          w-56 lg:w-64 
          bg-white/60 backdrop-blur-2xl
          border border-stone-200/60 rounded-[2rem]
          shadow-2xl shadow-stone-200/50
          overflow-hidden
        "
      >
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8 lg:p-16 space-y-16 md:space-y-24 overflow-x-hidden bg-stone-50">
        {children}

        {/* Footer */}
        {/* <footer className="pt-12 border-t border-stone-200 text-center text-stone-400">
          <p className="text-[13px] font-medium opacity-60">&copy; {new Date().getFullYear()} Design MVP. All rights reserved.</p>
        </footer> */}
      </main>
    </div>
  );
};

export default Layout;
