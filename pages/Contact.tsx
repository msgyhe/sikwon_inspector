import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-20">
      <div className="relative h-[400px] w-full bg-navy flex items-center justify-center">
        <img 
          src="https://imgur.com/VxulCAQ.jpeg" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Contact Header"
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-lg text-blue-100 max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      <Section background="white" className="-mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-navy text-white p-10 md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.infoTitle}</h3>
              <p className="text-blue-200 mb-8">
                {t.contact.infoDesc}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-sky mt-1" />
                  <div>
                    <div className="font-bold text-sm text-gray-400 uppercase tracking-wider">Email</div>
                    <a href="mailto:sikwon97@icloud.com" className="hover:text-sky transition-colors">sikwon97@icloud.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-sky mt-1" />
                  <div>
                    <div className="font-bold text-sm text-gray-400 uppercase tracking-wider">TEL</div>
                    <div className="hover:text-sky transition-colors cursor-pointer">+1 (616) 930-1374</div>
                    <div className="hover:text-sky transition-colors cursor-pointer">+82 (010) 7758-506</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-sky mt-1" />
                  <div>
                    <div className="font-bold text-sm text-gray-400 uppercase tracking-wider">Location</div>
                    <div>Michigan State Kalamazoo</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 md:mt-0 pt-10 border-t border-white/10">
               <div className="font-bold text-sm text-gray-400 mb-4">Follow Me</div>
               <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky transition-colors cursor-pointer">IN</div>
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky transition-colors cursor-pointer">YT</div>
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky transition-colors cursor-pointer">BL</div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-2/3 bg-white">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">{t.contact.labels.success}</h3>
                <p className="text-gray-600 mb-8">{t.contact.labels.successDesc}</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-sky font-semibold hover:underline"
                >
                  {t.contact.labels.reset}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-navy mb-2">{t.contact.formTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.labels.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.placeholders.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.labels.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.placeholders.email}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.labels.subject}</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky focus:border-transparent outline-none transition-all"
                  >
                    {t.contact.subjects.map((sub, idx) => (
                      <option key={idx}>{sub}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.labels.message}</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t.contact.placeholders.message}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full bg-navy hover:bg-navy-800 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" /> {t.contact.labels.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.labels.send} <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;