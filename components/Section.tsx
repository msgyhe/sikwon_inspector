import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'navy';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, background = 'white' }) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-background',
    navy: 'bg-navy text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-28 px-6 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
