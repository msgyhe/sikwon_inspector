import React from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

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

          <div className="p-10 md:w-2/3 bg-white">
            <h3 className="text-2xl font-bold text-navy mb-4">{t.contact.formTitle}</h3>
            <p className="text-gray-600 mb-6">
              아래 버튼을 클릭하여 문의사항을 작성해주세요. 빠른 시일 내에 답변드리겠습니다.
            </p>
            
            <a 
              href="https://forms.gle/7E2zLfYHZpsEahDm8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-navy hover:bg-navy-800 text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              문의하기 <Send size={18} />
            </a>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>💡 Tip:</strong> 문의하신 내용은 이메일로 접수되며, 영업일 기준 1-2일 이내 답변드립니다.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
