import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: t.contact.subjects[0] || '',
    message: ''
  });

  useEffect(() => {
    if (!document.getElementById('hidden_iframe')) {
      const iframe = document.createElement('iframe');
      iframe.id = 'hidden_iframe';
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_SCRIPT_URL;
    form.target = 'hidden_iframe';

    const timestamp = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

    const fields: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: timestamp
    };

    for (const key in fields) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

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

  const handleReset = () => {
    setFormState('idle');
    setErrorMessage('');
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

      <Section background="white" className="-mt-20 relativ
