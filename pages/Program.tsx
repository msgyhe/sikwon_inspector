import React from 'react';
import Section from '../components/Section';
import { BookOpen, Cloud, Plane, Check } from 'lucide-react';
import { PROGRAMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Program: React.FC = () => {
  const { language, t } = useLanguage();
  const programs = PROGRAMS[language];

  return (
    <div className="pt-20">
      <div className="bg-navy text-white py-16 relative overflow-hidden">
        <img 
            src="https://imgur.com/dzEK43F.jpeg" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            alt="Runway"
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">{t.program.title}</h1>
          <p className="text-blue-200">{t.program.subtitle}</p>
        </div>
      </div>

      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className={`rounded-3xl p-8 border ${prog.color} hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl bg-white`}>
              <div className="text-navy mb-6">{prog.icon}</div>
              <h3 className="text-2xl font-bold text-navy">{prog.title}</h3>
              <p className="text-sky font-semibold mb-4">{prog.subtitle}</p>
              <p className="text-gray-600 mb-8 min-h-[80px]">{prog.description}</p>
              <ul className="space-y-3">
                {prog.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
             <img 
               src="https://imgur.com/PgcBsdF.jpeg" 
               alt="Teaching" 
               className="rounded-2xl shadow-2xl"
             />
           </div>
           <div className="md:w-1/2">
             <h2 className="text-3xl font-bold text-navy mb-6">{t.program.philosophy.title}</h2>
             <div className="space-y-6">
                <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">{t.program.philosophy.p1.title}</h3>
                   <p className="text-gray-600">
                     {t.program.philosophy.p1.desc}
                   </p>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">{t.program.philosophy.p2.title}</h3>
                   <p className="text-gray-600">
                     {t.program.philosophy.p2.desc}
                   </p>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">{t.program.philosophy.p3.title}</h3>
                   <p className="text-gray-600">
                     {t.program.philosophy.p3.desc}
                   </p>
                </div>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Program;