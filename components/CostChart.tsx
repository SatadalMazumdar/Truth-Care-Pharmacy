import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PROPOSAL_CONTENT } from '../constants';
import { motion } from 'framer-motion';

// Consistent typography classes
const bodyTextSm = "text-[14px] font-medium leading-[1.6] text-stone-600";

// Updated color palette to match stone/orange theme
const COLORS = ["#ea580c", "#f97316", "#fb923c", "#fdba74"]; // orange-600, orange-500, orange-400, orange-300

const CostChart: React.FC = () => {
  const data = PROPOSAL_CONTENT.costs.map((item, idx) => ({
    ...item,
    fill: COLORS[idx % COLORS.length]
  }));
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  const formatCurrency = (value: number) => `₹ ${value.toLocaleString('en-IN')}`;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-stone-200 shadow-xl rounded-lg animate-in fade-in zoom-in duration-200">
          <p className="text-[14px] font-semibold text-stone-800">{payload[0].name}</p>
          <p className="text-orange-600 text-[14px] font-semibold">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                animationBegin={0}
                animationDuration={1500}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={0} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="text-lg font-serif text-stone-900 border-b border-stone-100 pb-2 mb-4">Investment Overview</h3>
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between group p-2 rounded-lg hover:bg-stone-50 transition-colors cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.fill }}></div>
                <span className={`${bodyTextSm} group-hover:text-stone-900 transition-colors`}>{item.name}</span>
              </div>
              <span className="font-mono text-[14px] font-medium text-stone-900">{formatCurrency(item.value)}</span>
            </motion.div>
          ))}
          <div className="pt-4 mt-4 border-t border-stone-100 flex justify-between items-start">
            <span className="text-[15px] font-semibold text-stone-900">Total</span>
            <div className="text-right">
              <span className="font-semibold text-orange-600 text-lg block"> (Approx.) {formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CostChart;
