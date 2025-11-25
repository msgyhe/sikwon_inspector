import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Award, Clock } from 'lucide-react';
import Section from '../components/Section';
import { STATS, TESTIMONIALS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://imgur.com/P9PUYX4.jpeg" 
            alt="Cockpit view"
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-white pt-20">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-sky/20 border border-sky text-sky font-semibold text-sm mb-6">
              {t.home.badge}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t.home.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              {t.home.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-sky hover:bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-sky-500/30 flex items-center justify-center gap-2"
              >
                {t.home.buttons.consult} <ArrowRight size={20} />
              </Link>
              <Link
                to="/program"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center"
              >
                {t.home.buttons.program}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="bg-navy-900 text-white py-12 border-b border-white/10 relative z-20 -mt-2">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS[language].map((stat, index) => (
              <div key={index} className="text-center pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-sky mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-gray-300">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Me */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t.home.why.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.home.why.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{t.home.why.safety.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.home.why.safety.desc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{t.home.why.airline.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.home.why.airline.desc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{t.home.why.efficient.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.home.why.efficient.desc}
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-sky font-bold tracking-wider uppercase text-sm">{t.home.testimonials.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">{t.home.testimonials.title}</h2>
          </div>
          <Link to="/about" className="text-navy font-semibold hover:text-sky transition-colors flex items-center gap-1 mt-4 md:mt-0">
            {t.home.testimonials.more} <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS[language].map((t, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
           </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.home.cta.title}</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            {t.home.cta.desc}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-sky hover:bg-white hover:text-navy text-white px-10 py-4 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl"
          >
            {t.home.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;