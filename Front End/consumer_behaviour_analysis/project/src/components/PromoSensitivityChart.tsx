import React, { useState } from 'react';

const PromoSensitivityChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const segments = [
    { name: 'New Customer', value: 320, shortName: 'New\nCustomer', category: 'high' },
    { name: 'Occasional Customer', value: 240, shortName: 'Occasional\nCustomer', category: 'high' },
    { name: 'Loyal Customer', value: 180, shortName: 'Loyal\nCustomer', category: 'medium' },
    { name: 'Low Income Level', value: 130, shortName: 'Low Income\nLevel', category: 'medium' },
    { name: 'High Income Level', value: 70, shortName: 'High Income\nLevel', category: 'low' }
  ];

  const maxValue = 350;
  const platformAvg = 120;
  const yAxisLabels = [350, 280, 210, 140, 70, 0];

  const getBarColor = (category: string, index: number) => {
    const isHovered = hoveredIndex === index;
    
    switch (category) {
      case 'high':
        return isHovered ? 'from-red-600 to-red-500' : 'from-red-500 to-red-400';
      case 'medium':
        return isHovered ? 'from-amber-600 to-amber-500' : 'from-amber-500 to-amber-400';
      case 'low':
        return isHovered ? 'from-emerald-600 to-emerald-500' : 'from-emerald-500 to-emerald-400';
      default:
        return 'from-slate-400 to-slate-300';
    }
  };

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'high':
        return { label: 'High Sensitivity (>200%)', color: 'bg-red-500' };
      case 'medium':
        return { label: 'Medium Sensitivity (100-200%)', color: 'bg-amber-500' };
      case 'low':
        return { label: 'Low Sensitivity (<100%)', color: 'bg-emerald-500' };
      default:
        return { label: '', color: '' };
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Promo Sensitivity</h2>
          <p className="text-sm text-slate-500">Customer segment response to promotions</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-500">Platform Average</div>
          <div className="text-lg font-bold text-red-600">{platformAvg}%</div>
        </div>
      </div>
      
      <div className="relative">
        {/* Chart container */}
        <div className="h-80 flex items-end justify-between relative ml-16 mr-4">
          {/* Y-axis */}
          <div className="absolute -left-16 top-0 h-full flex flex-col justify-between">
            {yAxisLabels.map((label, index) => (
              <div key={index} className="flex items-center">
                <span className="text-xs text-slate-400 font-medium w-10 text-right">{label}%</span>
                <div className="w-3 h-px bg-slate-200 ml-2"></div>
              </div>
            ))}
          </div>
          
          {/* Grid lines */}
          {yAxisLabels.slice(0, -1).map((_, index) => (
            <div 
              key={index}
              className="absolute left-0 right-0 border-t border-slate-100"
              style={{ bottom: `${((yAxisLabels.length - 1 - index) / (yAxisLabels.length - 1)) * 100}%` }}
            />
          ))}
          
          {/* Platform average line */}
          <div 
            className="absolute left-0 right-0 border-t-2 border-dashed border-red-500 z-10"
            style={{ bottom: `${(platformAvg / maxValue) * 280}px` }}
          >
            <div className="absolute right-0 -top-8 bg-red-50 px-3 py-1 rounded-lg border border-red-200">
              <span className="text-xs text-red-700 font-semibold">
                Platform avg: {platformAvg}%
              </span>
            </div>
          </div>
          
          {/* Bars */}
          {segments.map((segment, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tooltip */}
              {hoveredIndex === index && (
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-3 rounded-lg text-sm font-medium shadow-xl z-20 min-w-max">
                  <div className="text-center">
                    <div className="font-semibold text-base">{segment.value}%</div>
                    <div className="text-xs text-slate-300 mt-1">{segment.name}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {getCategoryInfo(segment.category).label}
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                </div>
              )}
              
              <div 
                className={`bg-gradient-to-t ${getBarColor(segment.category, index)} hover:shadow-xl transition-all duration-300 rounded-t-lg cursor-pointer relative border border-white/50 shadow-lg`}
                style={{ 
                  height: `${(segment.value / maxValue) * 280}px`,
                  width: '56px'
                }}
              >
                {/* Value label on top of bar */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-slate-700 bg-white px-2 py-1 rounded shadow-sm border">
                  {segment.value}%
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-lg"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-6 ml-16 mr-4">
          {segments.map((segment, index) => (
            <div 
              key={index} 
              className={`text-center transition-colors duration-200 ${
                hoveredIndex === index ? 'text-slate-900' : 'text-slate-600'
              }`}
              style={{ width: '56px' }}
            >
              <div className="text-xs font-medium whitespace-pre-line leading-tight">
                {segment.shortName}
              </div>
            </div>
          ))}
        </div>
        
        {/* Axis labels */}
        <div className="flex items-center justify-center mt-8">
          <span className="text-sm font-semibold text-slate-700">Customer Segments</span>
        </div>
        
        <div className="absolute left-0 top-1/2 transform -rotate-90 origin-center">
          <span className="text-sm font-semibold text-slate-700">Sensitivity (%)</span>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center items-center space-x-8 mt-8 pt-6 border-t border-slate-100">
        {['high', 'medium', 'low'].map((category) => {
          const info = getCategoryInfo(category);
          return (
            <div key={category} className="flex items-center space-x-2">
              <div className={`w-4 h-4 ${info.color} rounded shadow-sm`}></div>
              <span className="text-xs font-medium text-slate-600">{info.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PromoSensitivityChart;