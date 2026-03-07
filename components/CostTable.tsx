import React from 'react';
import { motion } from 'framer-motion';

const formatCurrency = (value: number) => `₹ ${value.toLocaleString('en-IN')}`;

const COST_BREAKDOWN = [
    {
        category: "UI/UX design",
        subtotal: 300000,
        items: [
            { name: "Mobile App UI/UX", value: 150000 },
            { name: "Component Library & Design System", value: 50000 },
            { name: "Admin Panel Wireframes", value: 50000 },
            { name: "User Flows", value: 25000 },
            { name: "Design QA & Iteration", value: 25000 },
        ]
    },
    {
        category: "Frontend",
        subtotal: 625000,
        items: [
            { name: "App UI Development", value: 300000 },
            { name: "Shopify Storefront API Integration", value: 150000 },
            { name: "Firebase Client SDK", value: 125000 },
            { name: "Testing & QA", value: 50000 },
        ]
    },
    {
        category: "Backend",
        subtotal: 355000,
        items: [
            { name: "Custom Auth Service", value: 100000 },
            { name: "Firebase", value: 75000 },
            { name: "Admin Panel APIs", value: 75000 },
            { name: "Shopify Webhook Handlers", value: 70000 },
            { name: "Deployment & Infra", value: 35000 },
        ]
    }
];

const CostTable: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-stone-200">
                        {COST_BREAKDOWN.map((section, sectionIdx) => (
                            <React.Fragment key={section.category}>
                                {/* Category Header */}
                                <motion.tr
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: sectionIdx * 0.1 }}
                                    className="bg-stone-100/80"
                                >
                                    <td colSpan={2} className="px-6 py-3 text-[15px] font-bold text-stone-900 border-b border-stone-200/80">
                                        {section.category}
                                    </td>
                                </motion.tr>

                                {/* Items */}
                                {section.items.map((item, itemIdx) => (
                                    <motion.tr
                                        key={item.name}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: sectionIdx * 0.1 + itemIdx * 0.05 }}
                                        className="hover:bg-stone-50 transition-colors group"
                                    >
                                        <td className="px-6 py-3.5 text-[14px] font-medium text-stone-700 w-2/3 border-r border-stone-100">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-3.5 font-mono text-[14px] text-stone-800 w-1/3">
                                            {formatCurrency(item.value)}
                                        </td>
                                    </motion.tr>
                                ))}

                                {/* Subtotal */}
                                <motion.tr
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: sectionIdx * 0.1 + section.items.length * 0.05 }}
                                    className="bg-orange-50"
                                >
                                    <td className="px-6 py-3.5 text-[15px] font-bold text-orange-700 w-2/3 border-r border-orange-200/50">
                                        Subtotal
                                    </td>
                                    <td className="px-6 py-3.5 font-mono text-[15px] font-bold text-orange-700 w-1/3">
                                        {formatCurrency(section.subtotal)}
                                    </td>
                                </motion.tr>
                            </React.Fragment>
                        ))}
                        {/* Grand Total */}
                        <motion.tr
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-stone-50"
                        >
                            <td className="px-6 py-4 text-[16px] font-bold text-stone-900 w-2/3 border-r border-stone-200">
                                Grand Total
                            </td>
                            <td className="px-6 py-4 font-mono text-[16px] font-bold text-orange-600 w-1/3">
                                {formatCurrency(COST_BREAKDOWN.reduce((sum, s) => sum + s.subtotal, 0))} (Approx.)
                            </td>
                        </motion.tr>
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default CostTable;
