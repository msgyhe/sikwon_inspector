import React, { useState, useRef } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Google Apps Script 웹앱 URL을 여기에 입력하세요
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySrluQyG_tH39HWHCF90KkLVkel_wB4aUXA7blSpgzliOnXmBsK_usvTaST2l7lzb3/exec';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: t.contact.subjects[0] || '',
    message: ''
  });

  // 입력값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // hidden form으로 실제 제출
    if (formRef.current) {
      formRef.current.submit();
    }

    // 일정 시간 후 성공 처리
    setTimeout(() => {
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        subject: t.contact.subjects[0] || '',
        message: ''
      });
    }, 2000);
  };

  // 폼 리셋
  const handleReset = () => {
    setFormState('idle');
    setErrorMessage('');
  };

  // 현재 타임스탬프
  const timestamp = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

  return (
    <div className="pt-20">
      {/* Hidden iframe for form submission */}
      <iframe 
        ref={iframeRef}
        name="hidden_iframe" 
        style={{ display: 'none' }} 
      />
      
      {/* Hidden form that actually submits to Google */}
      <form 
        ref={formRef}
        action={GOOGLE_SCRIPT_URL}
        method="POST"
        target="hidden_iframe"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="name" value={formData.name} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="subject" value={formData.subject} />
        <input type="hidden" name="message" value={formData.message} />
        <input type="hidden" name="timestamp" value={timestamp} />
      </form>

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
                  onClick={handleReset}
                  className="text-sky font-semibold hover:underline"
                >
                  {t.contact.labels.reset}
                </button>
              </div>
            ) : formState === 'error' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <AlertCircle className="text-red-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">전송 실패</h3>
                <p className="text-gray-600 mb-8">{errorMessage}</p>
                <button 
                  onClick={handleReset}
                  className="text-sky font-semibold hover:underline"
                >
                  다시 시도하기
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
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.placeholders.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.labels.email}</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.placeholders.email}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.labels.subject}</label>
                  <select 
                    id="subject"
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky focus:border-transparent outline-none transition-all"
                  >
                    {t.contact.subjects.map((sub, idx) => (
                      <option key={idx} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.labels.message}</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={5} 
                    required
                    value={formData.message}
                    onChange={handleInputChange}
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
