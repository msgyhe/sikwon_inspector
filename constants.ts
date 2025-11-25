import { NavItem, StatItem, ExperienceItem, TestimonialItem, Language } from './types';
import { Plane, Cloud, BookOpen } from 'lucide-react';
import React from 'react';

export const NAV_ITEMS: Record<Language, NavItem[]> = {
  ko: [
    { label: '홈', path: '/' },
    { label: '경력 상세', path: '/career' },
    { label: '교육 프로그램', path: '/program' },
    { label: '강사 소개', path: '/about' },
    { label: '문의하기', path: '/contact' },
  ],
  en: [
    { label: 'Home', path: '/' },
    { label: 'Career', path: '/career' },
    { label: 'Programs', path: '/program' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]
};

export const STATS: Record<Language, StatItem[]> = {
  ko: [
    { label: '무사고 비행 시간', value: '1,500+', description: 'Flight Hours' },
    { label: '배출 학생 수', value: '30+', description: 'Certified Pilots' },
    { label: '자격 취득률', value: '98%', description: 'Pass Rate' },
  ],
  en: [
    { label: 'Accident-free Hours', value: '1,500+', description: 'Flight Hours' },
    { label: 'Certified Pilots', value: '30+', description: 'Students Passed' },
    { label: 'Pass Rate', value: '98%', description: 'Success Rate' },
  ]
};

export const CAREER_HISTORY: Record<Language, ExperienceItem[]> = {
  ko: [
    {
      year: '2024 - 현재',
      title: 'Senior Flight Instructor',
      company: 'SkyHigh Aviation Academy',
      description: 'CPL 및 계기비행(IR) 전문 교관. 학생 관리 및 커리큘럼 개발 담당.',
    },
    {
      year: '2023 - 2024',
      title: 'Flight Instructor',
      company: 'Blue Wings Flight School',
      description: 'PPL 학생 지도 및 초기 비행 훈련 전담. 안전 관리 담당자 겸임.',
    },
    {
      year: '2020 - 2024',
      title: 'Cadet Pilot',
      company: 'Global Aviation University',
      description: '자가용, 계기, 사업용 조종사 면장 취득. 학업 우수상 수상.',
    },
  ],
  en: [
    {
      year: '2024 - Present',
      title: 'Senior Flight Instructor',
      company: 'SkyHigh Aviation Academy',
      description: 'Specialized instructor for CPL and Instrument Rating (IR). In charge of student management and curriculum development.',
    },
    {
      year: '2023 - 2024',
      title: 'Flight Instructor',
      company: 'Blue Wings Flight School',
      description: 'Dedicated to PPL student guidance and initial flight training. Served as Safety Manager.',
    },
    {
      year: '2020 - 2024',
      title: 'Cadet Pilot',
      company: 'Global Aviation University',
      description: 'Obtained Private, Instrument, and Commercial Pilot Licenses. Received Academic Excellence Award.',
    },
  ]
};

export const TESTIMONIALS: Record<Language, TestimonialItem[]> = {
  ko: [
    {
      name: '김민수',
      role: 'A항공사 부기장',
      content: '단순히 비행 기술만 가르치는 것이 아니라, 조종사로서의 태도와 비상 상황 대처 능력을 길러주셨습니다. 덕분에 항공사 입사 면접에서도 큰 도움이 되었습니다.',
      rating: 5,
    },
    {
      name: '이영희',
      role: 'PPL 과정 수료',
      content: '복잡한 항공 역학을 정말 이해하기 쉽게 설명해주십니다. 두려움이 많았던 첫 솔로 비행도 교관님의 격려 덕분에 무사히 마칠 수 있었어요.',
      rating: 5,
    },
    {
      name: '박준호',
      role: 'CPL 과정 훈련생',
      content: '엄격할 땐 엄격하지만, 평소에는 정말 따뜻한 멘토입니다. 제 진로에 대해 진지하게 고민해주시는 모습에 감동받았습니다.',
      rating: 5,
    },
  ],
  en: [
    {
      name: 'Min-su Kim',
      role: 'Airline First Officer',
      content: 'He taught not just flight skills, but the attitude of a pilot and emergency response capabilities. It was a huge help during my airline interviews.',
      rating: 5,
    },
    {
      name: 'Young-hee Lee',
      role: 'PPL Graduate',
      content: 'He explains complex aerodynamics very easily. I was able to safely complete my first solo flight thanks to his encouragement.',
      rating: 5,
    },
    {
      name: 'Jun-ho Park',
      role: 'CPL Trainee',
      content: 'Strict when necessary, but a very warm mentor. I was moved by how seriously he considered my career path.',
      rating: 5,
    },
  ]
};

export const PROGRAMS = {
  ko: [
    {
      icon: React.createElement(Plane, { size: 40 }),
      title: "Private Pilot (PPL)",
      subtitle: "자가용 조종사 과정",
      description: "비행의 첫걸음. 기초 항공 이론부터 첫 솔로 비행까지 안전하고 즐겁게 배웁니다.",
      features: ["기본 항공 역학 및 법규", "이착륙 및 장주 비행", "기상 악화 시 대처법", "첫 솔로 비행 (First Solo)"],
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: React.createElement(Cloud, { size: 40 }),
      title: "Instrument Rating (IR)",
      subtitle: "계기 비행 증명",
      description: "구름 속에서도 길을 잃지 않는 법. 시계가 확보되지 않은 상황에서의 정밀한 비행을 훈련합니다.",
      features: ["IFR 절차 및 차트 독해", "정밀/비정밀 접근 절차", "악기상 비행 시뮬레이션", "항공 교통 관제(ATC) 통신 심화"],
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      icon: React.createElement(BookOpen, { size: 40 }),
      title: "Commercial Pilot (CPL)",
      subtitle: "사업용 조종사 과정",
      description: "프로 파일럿으로 가는 관문. 더 높은 수준의 조종 정밀도와 상업적 운항 지식을 습득합니다.",
      features: ["고난이도 기동 (Chandelle, Lazy 8)", "복잡한 항공기 시스템 이해", "승객 안전 및 CRM", "항공사 입사 대비 모의 평가"],
      color: "bg-sky-50 border-sky-100"
    }
  ],
  en: [
    {
      icon: React.createElement(Plane, { size: 40 }),
      title: "Private Pilot (PPL)",
      subtitle: "Private Pilot Course",
      description: "The first step in flying. Learn safely and joyfully from basic aviation theory to your first solo flight.",
      features: ["Basic Aerodynamics & Regulations", "Takeoff/Landing & Traffic Patterns", "Emergency Procedures", "First Solo Flight"],
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: React.createElement(Cloud, { size: 40 }),
      title: "Instrument Rating (IR)",
      subtitle: "Instrument Rating Course",
      description: "How not to get lost in the clouds. Train for precision flying in low visibility situations.",
      features: ["IFR Procedures & Chart Reading", "Precision/Non-Precision Approaches", "Bad Weather Simulation", "Advanced ATC Communication"],
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      icon: React.createElement(BookOpen, { size: 40 }),
      title: "Commercial Pilot (CPL)",
      subtitle: "Commercial Pilot Course",
      description: "Gateway to becoming a pro pilot. Acquire higher precision handling and commercial operation knowledge.",
      features: ["Advanced Maneuvers (Chandelle, Lazy 8)", "Complex Aircraft Systems", "Passenger Safety & CRM", "Airline Prep & Mock Eval"],
      color: "bg-sky-50 border-sky-100"
    }
  ]
};