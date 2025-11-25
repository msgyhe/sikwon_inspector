import React from 'react';

export const translations = {
  ko: {
    home: {
      badge: "Professional Flight Instructor",
      headline: React.createElement(React.Fragment, null, "더 높이, 더 안전하게.", React.createElement("br"), React.createElement("span", { className: "text-sky" }, "당신의 날개"), "가 되어드립니다."),
      subheadline: React.createElement(React.Fragment, null, "검증된 1,500시간 무사고 교육 경력. 항공사 입사까지 고려한 체계적인 멘토링.", React.createElement("br", { className: "hidden md:block" }), "복잡한 이론을 직관적으로 풀어내는 맞춤형 교육을 경험하세요."),
      buttons: {
        consult: "무료 커리어 상담",
        program: "교육 과정 보기"
      },
      why: {
        title: "Why SkyMentor?",
        desc: "단순한 비행 기술 전달을 넘어, 진정한 파일럿이 되기 위한 마인드셋과 안전 철학을 교육합니다.",
        safety: {
          title: "Safety First",
          desc: "1,500시간 무사고 비행의 노하우. 비상 상황 대처 능력과 CRM(Crew Resource Management)을 중점적으로 교육하여 안전을 습관화합니다."
        },
        airline: {
          title: "Airline Ready",
          desc: "항공사 입사 전형을 고려한 맞춤형 커리큘럼. 모의 면접 및 실제 라인 조종사들이 사용하는 절차(SOP)를 미리 경험해봅니다."
        },
        efficient: {
          title: "Efficient Training",
          desc: "개인별 학습 속도와 성향을 분석한 1:1 맞춤 교육. 불필요한 비행 시간을 줄이고 효율적으로 목표 면장을 취득하도록 돕습니다."
        }
      },
      testimonials: {
        label: "Testimonials",
        title: "수강생 리얼 후기",
        more: "더 알아보기"
      },
      cta: {
        title: "지금 바로 비행의 꿈을 시작하세요",
        desc: React.createElement(React.Fragment, null, "망설이는 시간에도 하늘은 열려있습니다. ", React.createElement("br"), "전문 교관과의 1:1 무료 상담을 통해 구체적인 로드맵을 그려보세요."),
        button: "상담 신청하기"
      }
    },
    career: {
      title: "Career Detail",
      subtitle: "전문성과 신뢰로 쌓아온 비행 기록",
      timelineTitle: "Professional Timeline",
      licensesTitle: "Licenses & Certifications",
      logbookTitle: "Logbook Summary",
      chartTitle: "Aircraft Type Experience",
      stats: {
        hours: "Total Hours",
        dual: "Dual Given (Instruction)",
        multi: "Multi-Engine",
        safety: "Safety Record"
      }
    },
    program: {
      title: "Training Programs",
      subtitle: "기초부터 프로페셔널까지, 단계별 맞춤 커리큘럼",
      philosophy: {
        title: "Teaching Philosophy",
        p1: { title: "1. Why, not just How", desc: "단순히 '어떻게' 조종하는지가 아니라, '왜' 그렇게 움직여야 하는지 공기역학적 원리를 이해시킵니다. 원리를 알면 응용이 가능해집니다." },
        p2: { title: "2. Visual & Intuitive", desc: "복잡한 계기판과 절차를 직관적인 그림과 시뮬레이션으로 설명합니다. 아이패드를 활용한 디지털 브리핑으로 이해도를 극대화합니다." },
        p3: { title: "3. Life-long Mentoring", desc: "면장 취득은 끝이 아닙니다. 항공사 입사 준비, 서류 검토, 모의 면접까지 책임지는 든든한 멘토가 되겠습니다." }
      }
    },
    about: {
      name: "Captain Sikwon Gye",
      role: "Senior Flight Instructor / Safety Manager",
      bio: [
        "어린 시절, 공항 근처에서 자라며 매일 뜨고 내리는 비행기를 보며 꿈을 키웠습니다. 그 막연했던 동경이 현실이 되기까지 수많은 땀과 노력이 있었습니다.",
        "제가 겪었던 시행착오를 제 학생들은 겪지 않기를 바라는 마음으로 교관 생활을 시작했습니다. 모든 학생은 저마다의 학습 속도와 방식이 있습니다. 그것을 찾아내어 최적의 길로 안내하는 것이 저의 역할입니다.",
        "비행은 겸손을 배우는 과정입니다. 자연 앞에서의 겸손함, 그리고 규정 앞에서의 정직함을 가르치겠습니다. 여러분의 첫 이륙부터 항공사 기장이 되는 그날까지 함께하겠습니다."
      ],
      quote: "A good pilot is always learning. 자만심을 버리고 끊임없이 배우는 태도, 그것이 가장 훌륭한 안전 장치입니다.",
      galleryTitle: "Moments in the Sky"
    },
    contact: {
      title: "Contact Me",
      subtitle: React.createElement(React.Fragment, null, "비행 교육, 진로 상담, 무엇이든 물어보세요.", React.createElement("br"), "24시간 이내에 성실하게 답변 드리겠습니다."),
      infoTitle: "Contact Info",
      infoDesc: "방문 상담을 원하시면 미리 예약 부탁드립니다.",
      formTitle: "Send a Message",
      labels: {
        name: "이름",
        email: "이메일",
        subject: "관심 분야",
        message: "메시지",
        send: "상담 신청하기",
        sending: "전송 중...",
        success: "메시지가 전송되었습니다!",
        successDesc: "확인 후 빠른 시일 내에 연락드리겠습니다.",
        reset: "새로운 메시지 보내기"
      },
      placeholders: {
        name: "홍길동",
        email: "name@example.com",
        message: "현재 비행 경력이나 궁금한 점을 자유롭게 적어주세요."
      },
      subjects: [
        "자가용 조종사 (PPL) 문의",
        "사업용/계기비행 (CPL/IR) 문의",
        "진로/취업 상담",
        "기타 문의"
      ]
    }
  },
  en: {
    home: {
      badge: "Professional Flight Instructor",
      headline: React.createElement(React.Fragment, null, "Higher, Safer.", React.createElement("br"), "I will be ", React.createElement("span", { className: "text-sky" }, "Your Wings"), "."),
      subheadline: React.createElement(React.Fragment, null, "Proven 1,500+ hours of accident-free instruction. Systematic mentoring for airline careers.", React.createElement("br", { className: "hidden md:block" }), "Experience intuitive education that simplifies complex theories."),
      buttons: {
        consult: "Free Consultation",
        program: "View Programs"
      },
      why: {
        title: "Why SkyMentor?",
        desc: "Beyond teaching flight skills, I educate on the mindset and safety philosophy required to become a true pilot.",
        safety: {
          title: "Safety First",
          desc: "Know-how from 1,500 hours of accident-free flying. We focus on emergency handling and CRM (Crew Resource Management) to make safety a habit."
        },
        airline: {
          title: "Airline Ready",
          desc: "Customized curriculum considering airline recruitment. Experience mock interviews and SOPs (Standard Operating Procedures) used by actual line pilots."
        },
        efficient: {
          title: "Efficient Training",
          desc: "1:1 personalized training analyzing individual learning speed and style. Helping you acquire licenses efficiently by reducing unnecessary flight time."
        }
      },
      testimonials: {
        label: "Testimonials",
        title: "Student Reviews",
        more: "Read More"
      },
      cta: {
        title: "Start Your Dream of Flying Now",
        desc: React.createElement(React.Fragment, null, "The sky is open even while you hesitate. ", React.createElement("br"), "Draw a concrete roadmap through a 1:1 free consultation with a professional instructor."),
        button: "Apply for Consultation"
      }
    },
    career: {
      title: "Career Detail",
      subtitle: "Flight records built on professionalism and trust",
      timelineTitle: "Professional Timeline",
      licensesTitle: "Licenses & Certifications",
      logbookTitle: "Logbook Summary",
      chartTitle: "Aircraft Type Experience",
      stats: {
        hours: "Total Hours",
        dual: "Dual Given (Instruction)",
        multi: "Multi-Engine",
        safety: "Safety Record"
      }
    },
    program: {
      title: "Training Programs",
      subtitle: "Step-by-step curriculum from basics to professional",
      philosophy: {
        title: "Teaching Philosophy",
        p1: { title: "1. Why, not just How", desc: "Understanding the 'Why' behind aerodynamic principles, not just 'How' to maneuver. Understanding principles enables application." },
        p2: { title: "2. Visual & Intuitive", desc: "Explaining complex instruments and procedures with intuitive diagrams and simulations. Maximizing understanding through digital briefings using iPads." },
        p3: { title: "3. Life-long Mentoring", desc: "License acquisition is not the end. I will be a reliable mentor responsible for airline preparation, document review, and mock interviews." }
      }
    },
    about: {
      name: "Captain Sikwon Gye",
      role: "Senior Flight Instructor / Safety Manager",
      bio: [
        "Growing up near the airport, I dreamed of flying while watching planes take off and land every day. There was a lot of sweat and effort until that vague longing became reality.",
        "I started my instructor career hoping my students wouldn't go through the trials and errors I experienced. Every student has their own learning speed and style. My role is to find that and guide them to the optimal path.",
        "Flying is a process of learning humility. I will teach humility before nature and honesty before regulations. I will be with you from your first takeoff to the day you become an airline captain."
      ],
      quote: "A good pilot is always learning. The attitude of abandoning arrogance and constantly learning is the best safety device.",
      galleryTitle: "Moments in the Sky"
    },
    contact: {
      title: "Contact Me",
      subtitle: React.createElement(React.Fragment, null, "Flight training, career counseling, ask anything.", React.createElement("br"), "I will answer sincerely within 24 hours."),
      infoTitle: "Contact Info",
      infoDesc: "Please make a reservation for a visit.",
      formTitle: "Send a Message",
      labels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message Sent!",
        successDesc: "I will contact you as soon as possible.",
        reset: "Send New Message"
      },
      placeholders: {
        name: "John Doe",
        email: "name@example.com",
        message: "Feel free to write about your current flight experience or any questions."
      },
      subjects: [
        "Private Pilot (PPL) Inquiry",
        "Commercial/Instrument (CPL/IR) Inquiry",
        "Career/Employment Counseling",
        "Other Inquiries"
      ]
    }
  }
};