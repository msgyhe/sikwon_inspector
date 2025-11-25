import React from 'react';
import Section from '../components/Section';
import { CAREER_HISTORY } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FLIGHT_HOURS_DATA = [
  { name: 'Cessna 172', hours: 800, color: '#00205B' },
  { name: 'Diamond DA40', hours: 400, color: '#4B9CD3' },
  { name: 'Piper Seneca', hours: 200, color: '#2A82BE' },
  { name: 'Simulator', hours: 150, color: '#A0AEC0' },
];

const LICENSES = [
  "Commercial Pilot License (CPL)",
  "Instrument Rating (IR)",
  "Multi-Engine Rating (Multi)",
  "Flight Instructor License (CFI)",
  "Instrument Instructor (CFII)",
  "Radio Telephony Operator"
];

const Career: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-20">
      <div className="bg-navy text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">{t.career.title}</h1>
          <p className="text-blue-200">{t.career.subtitle}</p>
        </div>
      </div>

      <Section background="white">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Timeline */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-navy mb-8 border-l-4 border-sky pl-4">{t.career.timelineTitle}</h2>
            <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
              {CAREER_HISTORY[language].map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky border-4 border-white shadow-sm"></div>
                  <span className="text-sm font-bold text-sky mb-1 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <div className="text-md font-medium text-gray-500 mb-2">{item.company}</div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
               <h2 className="text-2xl font-bold text-navy mb-6 border-l-4 border-sky pl-4">{t.career.licensesTitle}</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {LICENSES.map((license, idx) => (
                   <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                     <CheckCircle2 className="text-sky flex-shrink-0" size={20} />
                     <span className="font-medium text-gray-700">{license}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Charts */}
          <div className="lg:w-1/2">
             <h2 className="text-2xl font-bold text-navy mb-8 border-l-4 border-sky pl-4">{t.career.logbookTitle}</h2>
             
             {/* Total Hours Chart */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
               <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">{t.career.chartTitle}</h3>
               <div className="h-[300px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <PieChart>
                     <Pie
                       data={FLIGHT_HOURS_DATA}
                       cx="50%"
                       cy="50%"
                       innerRadius={60}
                       outerRadius={100}
                       paddingAngle={5}
                       dataKey="hours"
                     >
                       {FLIGHT_HOURS_DATA.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={entry.color} />
                       ))}
                     </Pie>
                     <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        formatter={(value: number) => `${value} Hrs`}
                     />
                     <Legend verticalAlign="bottom" height={36}/>
                   </PieChart>
                 </ResponsiveContainer>
               </div>
             </div>

             {/* Simple Stats Grid */}
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy p-6 rounded-2xl text-white text-center">
                  <div className="text-3xl font-bold text-sky mb-1">1,550</div>
                  <div className="text-sm text-blue-200">{t.career.stats.hours}</div>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-navy mb-1">450</div>
                  <div className="text-sm text-gray-500">{t.career.stats.dual}</div>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-navy mb-1">200</div>
                  <div className="text-sm text-gray-500">{t.career.stats.multi}</div>
                </div>
                <div className="bg-sky p-6 rounded-2xl text-white text-center">
                  <div className="text-3xl font-bold mb-1">No.1</div>
                  <div className="text-sm text-white/80">{t.career.stats.safety}</div>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Career;