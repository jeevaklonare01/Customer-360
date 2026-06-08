import React from 'react';
import SummaryCards from './components/SummaryCards';
import TimeOfDayChart from './components/TimeOfDayChart';
import PromoSensitivityChart from './components/PromoSensitivityChart';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
                Analytics Dashboard
              </h1>
              <p className="text-slate-600 text-lg">Consumer insights and performance metrics</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-500">Last updated</div>
              <div className="text-sm font-semibold text-slate-700">
                {new Date().toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Summary Cards */}
        <SummaryCards />
        
        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <TimeOfDayChart />
          <PromoSensitivityChart />
        </div>
        
        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            Data refreshed every 15 minutes • Last sync: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;