
import React from 'react';
import Section from '../components/Section';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const images = [
    "https://imgur.com/7r8ss0Z.jpeg",
    "https://imgur.com/j0sDVRE.jpeg",
    "https://imgur.com/lvJqeVj.jpeg",
    "https://imgur.com/G0wuYpL.jpeg",
  ];

  return (
    <div className="pt-20">
      <Section background="white">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 relative">
             <div className="absolute inset-0 bg-navy rounded-2xl transform translate-x-4 translate-y-4"></div>
             <img 
               src="https://imgur.com/oDCor4Y.jpeg" 
               alt="Instructor Profile" 
               className="relative rounded-2xl shadow-lg w-full h-auto z-10"
             />
          </div>
          <div className="lg:w-2/3">
             <h1 className="text-4xl font-bold text-navy mb-2">{t.about.name}</h1>
             <p className="text-sky font-semibold text-lg mb-6">{t.about.role}</p>
             
             <div className="prose prose-lg text-gray-600 mb-8">
               {t.about.bio.map((paragraph, idx) => (
                 <p key={idx} className="mb-4">{paragraph}</p>
               ))}
             </div>

             <div className="bg-background p-6 rounded-xl border-l-4 border-navy relative">
               <Quote className="absolute top-4 left-4 text-navy/10 w-12 h-12" />
               <p className="italic text-gray-700 relative z-10 pl-4">
                 "{t.about.quote}"
               </p>
             </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-3xl font-bold text-center text-navy mb-12">{t.about.galleryTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className={`overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group ${idx === 1 || idx === 3 ? 'md:mt-8' : ''}`}>
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
