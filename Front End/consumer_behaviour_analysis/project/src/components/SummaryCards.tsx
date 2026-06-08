import React from 'react';

const SummaryCards = () => {
  const cards = [
    {
      title: "MOST ENGAGED CONSUMER SEGMENT",
      mainValue: "Loyal Customer",
      subtitle: "8.7 avg monthly sessions",
      subtext: "3.4x platform avg",
      subtextColor: "text-emerald-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "HIGHEST SPENDING SEGMENT", 
      mainValue: "New Customer",
      subtitle: "$285 avg monthly spend",
      subtext: "2.2x platform avg",
      subtextColor: "text-emerald-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "TOP CROSS-PURCHASED PRODUCT",
      mainValue: "Soft Drinks", 
      subtitle: "68% attachment rate",
      subtext: "4.3x higher than others",
      subtextColor: "text-emerald-600",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "CART ABANDONMENT RATE",
      mainValue: "42.7%",
      subtitle: "Platform-wide avg", 
      subtext: "+8.3% Mobile users",
      subtextColor: "text-amber-600",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div 
          key={index}
          className={`bg-gradient-to-br ${card.bgGradient} rounded-xl border border-slate-200 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-purple-300 relative overflow-hidden group`}
        >
          <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 leading-tight">
              {card.title}
            </h3>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-slate-900 leading-tight">
                {card.mainValue}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {card.subtitle}
              </div>
              <div className={`text-sm font-semibold ${card.subtextColor} flex items-center`}>
                <div className="w-2 h-2 rounded-full bg-current mr-2 opacity-60"></div>
                {card.subtext}
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-20"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/10 rounded-full opacity-30"></div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;