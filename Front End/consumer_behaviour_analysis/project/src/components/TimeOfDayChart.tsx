import React, { useState } from 'react';

const TimeOfDayChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const hours = [
    '12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm', '12am'
  ];
  
  const data = [
    40, 25, 30, 35, 65, 135, 295, 395, 450, 490, 550, 540, 580, 495, 420, 340, 255, 180, 95, 55, 45, 40, 35, 30, 25
  ];

  const maxValue = Math.max(...data);
  const yAxisLabels = [600, 500, 400, 300, 200, 100, 0];

  const getBarColor = (value: number, index: number) => {
    const intensity = value / maxValue;
    if (hoveredIndex === index) {
      return 'from-blue-600 to-blue-500';
    }
    if (intensity > 0.8) return 'from-blue-500 to-blue-400';
    if (intensity > 0.6) return 'from-blue-400 to-blue-300';
    if (intensity > 0.4) return 'from-blue-300 to-blue-200';
    return 'from-blue-200 to-blue-100';
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Time of Day Analysis</h2>
          <p className="text-sm text-slate-500">Transaction volume throughout the day</p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-slate-500">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded mr-2"></div>
            <span>Transaction Volume</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        {/* Chart container */}
        <div className="h-80 flex items-end justify-between relative ml-12 mr-4">
          {/* Y-axis */}
          <div className="absolute -left-12 top-0 h-full flex flex-col justify-between">
            {yAxisLabels.map((label, index) => (
              <div key={index} className="flex items-center">
                <span className="text-xs text-slate-400 font-medium w-8 text-right">{label}</span>
                <div className="w-2 h-px bg-slate-200 ml-2"></div>
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
          
          {/* Bars */}
          {data.slice(0, 13).map((value, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tooltip */}
              {hoveredIndex === index && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-10">
                  <div className="text-center">
                    <div className="font-semibold">{value}</div>
                    <div className="text-xs text-slate-300">{hours[index]}</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                </div>
              )}
              
              <div 
                className={`bg-gradient-to-t ${getBarColor(value, index)} hover:shadow-lg transition-all duration-300 rounded-t-lg cursor-pointer relative border border-blue-200/50`}
                style={{ 
                  height: `${(value / maxValue) * 280}px`,
                  width: '32px'
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-lg"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* X-axis */}
        <div className="flex justify-between mt-6 ml-12 mr-4">
          {hours.map((hour, index) => (
            <span 
              key={index} 
              className={`text-xs font-medium transition-colors duration-200 ${
                hoveredIndex === index ? 'text-blue-600' : 'text-slate-500'
              }`}
            >
              {hour}
            </span>
          ))}
        </div>
        
        {/* Axis labels */}
        <div className="flex items-center justify-center mt-6">
          <span className="text-sm font-semibold text-slate-700">Hour of Day</span>
        </div>
        
        <div className="absolute left-0 top-1/2 transform -rotate-90 origin-center">
          <span className="text-sm font-semibold text-slate-700">Transaction Volume</span>
        </div>
      </div>
    </div>
  );
};

export default TimeOfDayChart;