import React from 'react';
import {
  CheckCircle2,
  Database,
  Zap,
  Smartphone,
  Truck,
  Settings,
  User,
  Mail,
  MessageSquare,
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Key,
  DollarSign
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import CostChart from './components/CostChart';
import CostTable from './components/CostTable';
import { PROPOSAL_CONTENT } from './constants';

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)",
    borderColor: "#fdba74",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const cardClass = "group/card bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-xl transition-all relative z-0 overflow-hidden";
const blobClass = "absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-orange-50/50 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none";

const bodyTextSm = "text-[14px] font-medium leading-[1.6] text-stone-600";
const bodyTextLg = "text-[15px] font-medium leading-[1.7] text-stone-600";
const labelText = "text-[11px] font-semibold uppercase tracking-[0.08em] text-stone-500";

// Architecture rows
const architectureRows = [
  { layer: "Backend / E-Commerce Engine", tech: "Shopify (Storefront API + Admin API), Custom Backend (Auth API + Promotional Banner + Webhooks)" },
  { layer: "Mobile App", tech: "React Native (iOS + Android)" },
  { layer: "Admin WebApp", tech: "React, Node" },
  { layer: "Auth & Realtime", tech: "Firebase Auth, Firestore, FCM" },
  { layer: "Hosting (App Backend)", tech: "Hostinger / Firebase (client-owned)" },
  // { layer: "Delivery Tracking", tech: "Google Maps API + Firebase Realtime DB" },
  // { layer: "Analytics", tech: "Firebase Analytics" },
  { layer: "Review System", tech: "Yotpo: Product Reviews App" },
];

// Features
const customerFeatures = [
  { label: "Product browsing & search", desc: "Full catalog from Shopify, with filters (category, brand, price, availability)" },
  { label: "Cart & checkout", desc: "Shopify Checkout API, multiple payment methods (card, COD, Apple Pay)" },
  { label: "Coupon & promo system", desc: "Fully functional — currently broken with existing vendor" },
  { label: "Order tracking", desc: "Shopify-based delivery tracking" },
  { label: "Push notifications", desc: "Firebase FCM with deep linking to relevant pages (product, order, promo)" },
  { label: "Product ratings & reviews", desc: "Visible and accessible via Yotpo" },
  { label: "User profiles", desc: "Shopify-based user profiles" },
  { label: "Multi-location awareness", desc: "Nearest pharmacy detection (GPS), both quick delivery and standard delivery on checkout" },
  { label: "Native UI/UX", desc: "Proper mobile-first design built using React Native" },
  { label: "Refund initiation", desc: "Shopify-based refund initiation flow" },
  { label: "Invoice generation", desc: "Auto-generated and sent on order completion — via email + in-app" },
];

const deliveryFeatures = [
  { label: "Quick delivery", desc: "Within 20km of nearest pharmacy — on-demand, same-day" },
  { label: "Standard delivery", desc: "Beyond 20km radius — 2-day via your courier partner" },
  { label: "Pickup option", desc: "In-store pickup at physical pharmacy locations - auto-selected via Shopify" },
];

const adminFeatures = [
  { label: "Inventory management", desc: "Synced directly from Shopify — no CMS middleman, no sync delays" },
  { label: "Order management", desc: "View, process, cancel, refund — all from Shopify Admin" },
  { label: "Promotion management", desc: "Create/edit/schedule/end promotions instantly in Shopify + Webapp admin panel" },
  { label: "Customer data dashboard", desc: "Shopify-based customer data dashboard" },
  { label: "Analytics dashboard", desc: "Shopify-based sales, orders, delivery performance, product performance" },
  { label: "Multi-location management", desc: "Manage all pharmacy locations (up to 10 on Shopify Standard, 40+ on Enterprise)" },
  { label: "Push notification manager", desc: "Via webhooks + FCM pipeline" },
  { label: "Coupon management", desc: "Create, distribute, and track coupon usage" },
  { label: "Rating & review moderation", desc: "Yotpo-based review moderation" },
  { label: "Role-based access", desc: "Shopify-based role management" },
];

// Login flow steps for diagram
const loginSteps = [
  {
    id: 'app',
    icon: <Smartphone size={18} strokeWidth={1.5} />,
    label: 'Mobile App',
    sub: 'React Native',
    color: 'bg-stone-900 text-white',
    border: 'border-stone-800',
  },
  {
    id: 'choice',
    icon: <GitBranch size={18} strokeWidth={1.5} />,
    label: 'Choose Login',
    sub: 'Email or Mobile OTP',
    color: 'bg-orange-500 text-white',
    border: 'border-orange-600',
  },
];

const App: React.FC = () => {
  return (
    <Layout>

      {/* Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 tracking-tight leading-[1.1]">
          {PROPOSAL_CONTENT.meta.project}
        </motion.h1>

        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-8">
          {[
            { label: 'Client', value: PROPOSAL_CONTENT.meta.client, icon: '◆', accent: 'from-orange-500 to-amber-400' },
            { label: 'Prepared By', value: PROPOSAL_CONTENT.meta.preparedBy, icon: '✦', accent: 'from-stone-700 to-stone-500' },
            { label: 'Duration', value: '~18 Weeks', icon: '◯', accent: 'from-orange-600 to-orange-400' },
            { label: 'Platform', value: PROPOSAL_CONTENT.meta.platform, icon: '△', accent: 'from-stone-800 to-stone-600' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-5 md:p-6 border border-stone-200/60 group-hover:border-stone-300/80 transition-all duration-300 overflow-hidden h-full min-h-[100px] flex flex-col justify-between">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300`}></div>
                <div className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br ${item.accent} rounded-full opacity-[0.08] group-hover:opacity-[0.12] group-hover:scale-150 transition-all duration-500`}></div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] bg-gradient-to-br ${item.accent} bg-clip-text text-transparent font-bold`}>{item.icon}</span>
                  <p className={`${labelText} relative z-10`}>{item.label}</p>
                </div>
                <p className="font-serif text-lg md:text-xl text-stone-900 relative z-10 leading-tight tracking-tight">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.header>

      {/* 1. Overview */}
      <motion.section
        id="executive-summary"
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-serif text-stone-900 mb-8 flex items-center gap-4">
          <div className="p-2.5 bg-stone-100 rounded-xl text-stone-900 border border-stone-200">
            <Database size={24} strokeWidth={1.5} />
          </div>
          Overview
        </h2>
        <motion.div
          initial="rest"
          whileHover="hover"
          variants={cardHover}
          className={cardClass}
        >
          <div className={blobClass}></div>
          <div className="relative z-10 space-y-5">
            <p className={bodyTextLg}>
              Proposal for rebuilding the pharmacy e-commerce <strong className="text-stone-800">mobile app</strong> and improving the existing platform for the client. The website is already live and hosted on <strong className="text-stone-800">Hostinger</strong>, and <strong className="text-stone-800">Shopify is already configured</strong> in production.
            </p>
            <p className={bodyTextLg}>
              Our approach: <strong className="text-stone-800">Shopify as the sole backend</strong> (inventory, orders, products, payments via Shopify APIs), <strong className="text-stone-800">custom-built React Native mobile app</strong>, and <strong className="text-stone-800">Firebase for real-time features</strong>.
            </p>
            <div className="mt-2 flex items-start gap-3 bg-stone-50 border border-stone-200 rounded-xl p-4">
              <ShieldCheck size={18} className="text-orange-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p className={`${bodyTextSm} text-stone-700`}>
                <strong className="te-t-stone-900">Key Principle:</strong> Client owns everything - codebase, hosting, credentials, stores.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 2. Proposed Architecture */}
      <motion.section
        id="architecture"
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-serif text-stone-900 mb-8 flex items-center gap-4">
          <div className="p-2.5 bg-stone-100 rounded-xl text-stone-900 border border-stone-200">
            <Database size={24} strokeWidth={1.5} />
          </div>
          Proposed Architecture
        </h2>
        <motion.div
          initial="rest"
          whileHover="hover"
          variants={cardHover}
          className={`${cardClass} p-0`}
        >
          <div className={blobClass}></div>
          <div className="relative z-10">
            <table className="w-full text-left">
              <thead className={`bg-stone-50 ${labelText} border-b border-stone-100`}>
                <tr>
                  <th className="px-6 md:px-8 py-5">Layer</th>
                  <th className="px-6 md:px-8 py-5">Technology / Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 bg-white">
                {architectureRows.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    viewport={{ once: true }}
                    className="hover:bg-orange-50/30 transition-colors group"
                  >
                    <td className={`px-6 md:px-8 py-4 ${bodyTextSm} font-semibold text-stone-700 group-hover:text-orange-800 transition-colors w-1/3`}>{row.layer}</td>
                    <td className={`px-6 md:px-8 py-4 ${bodyTextSm} text-stone-600`}>{row.tech}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.section>

      {/* 3. Features We Can Deliver */}
      <section id="features" className="scroll-mt-32 space-y-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-serif text-stone-900 flex items-center gap-4"
        >
          <div className="p-2.5 bg-stone-100 rounded-xl text-stone-900 border border-stone-200">
            <Zap size={24} strokeWidth={1.5} />
          </div>
          Features We'll Deliver
        </motion.h2>

        {/* Customer-Facing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-orange-50 rounded-lg border border-orange-100">
              <Smartphone size={18} className="text-orange-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif text-stone-900">Customer-Facing App</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {customerFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}
                className="group bg-white rounded-xl p-5 border border-stone-200/80 hover:border-orange-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div>
                    <p className="text-[14px] font-semibold text-stone-800 mb-1">{feat.label}</p>
                    <p className={`${bodyTextSm} text-stone-500`}>{feat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Open question from MD */}
          {/* <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 bg-amber-50/60 border border-amber-200 rounded-xl p-5 flex items-start gap-3"
          >
            <span className="text-amber-500 text-lg flex-shrink-0">❓</span>
            <p className={`${bodyTextSm} text-amber-800 italic`}>
              <strong>Open question:</strong> If the product is out of stock at the nearest location, can we arrange for delivery from any warehouse that has it available as standard delivery?
            </p>
          </motion.div> */}
        </motion.div>

        {/* Delivery & Logistics */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-stone-100 rounded-lg border border-stone-200">
              <Truck size={18} className="text-stone-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif text-stone-900">Delivery & Logistics</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {deliveryFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="bg-white rounded-xl p-5 border border-stone-200/80 hover:border-orange-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div>
                    <p className="text-[14px] font-semibold text-stone-800 mb-1">{feat.label}</p>
                    <p className={`${bodyTextSm} text-stone-500`}>{feat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Open question from MD */}
        {/*<motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 bg-amber-50/60 border border-amber-200 rounded-xl p-5 flex items-start gap-3"
          >
            <span className="text-amber-500 text-lg flex-shrink-0">❓</span>
            <p className={`${bodyTextSm} text-amber-800 italic`}>
              <strong>Open question:</strong> How does the delivery flow work - how do we know that the product has been delivered? What is the current flow with Shopify?
            </p>
          </motion.div>
        </motion.div> */}

        {/* Admin Panel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-stone-100 rounded-lg border border-stone-200">
              <Settings size={18} className="text-stone-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif text-stone-900">Admin Panel Features</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {adminFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}
                className="bg-white rounded-xl p-5 border border-stone-200/80 hover:border-orange-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div>
                    <p className="text-[14px] font-semibold text-stone-800 mb-1">{feat.label}</p>
                    <p className={`${bodyTextSm} text-stone-500`}>{feat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. Cost Breakdown */}
      <motion.section
        id="cost-breakdown"
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-serif text-stone-900 mb-8 flex items-center gap-4">
          <div className="p-2.5 bg-stone-100 rounded-xl text-stone-900 border border-stone-200">
            <DollarSign size={24} strokeWidth={1.5} />
          </div>
          Cost Breakdown
        </h2>
        <CostChart />
        <CostTable />
      </motion.section>

      {/* 5. Customer Login Flow */}


    </Layout>
  );
};

// Reusable flow diagram components
const FlowNode: React.FC<{ icon: React.ReactNode; label: string; sub: string; variant: 'dark' | 'orange' | 'muted' }> = ({ icon, label, sub, variant }) => {
  const styles = {
    dark: 'bg-stone-800 border-stone-700 text-white',
    orange: 'bg-orange-500 border-orange-400 text-white',
    muted: 'bg-stone-800/60 border-stone-700/60 text-stone-300',
  };
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${styles[variant]} shadow-lg min-w-[180px] max-w-xs w-full`}>
      <div className="flex-shrink-0 opacity-80">{icon}</div>
      <div>
        <p className="text-[13px] font-semibold leading-tight">{label}</p>
        {sub && <p className="text-[11px] opacity-60 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
};

const FlowArrow: React.FC<{ label?: string; vertical?: boolean }> = ({ label, vertical }) => (
  <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} items-center gap-1 text-stone-600`}>
    {label && <span className="text-[11px] font-medium text-stone-500">{label}</span>}
    {vertical
      ? <ArrowRight size={14} className="rotate-90 text-orange-500 opacity-60" />
      : <ArrowRight size={14} className="text-orange-500 opacity-60" />
    }
  </div>
);

export default App;
