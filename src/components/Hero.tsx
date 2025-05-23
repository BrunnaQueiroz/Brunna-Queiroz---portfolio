import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center z-10">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 transition-opacity duration-1000 delay-300"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-600 dark:from-purple-400 dark:to-teal-400">
            Brunna Queiroz
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 transition-opacity duration-1000 delay-500"
        >
          Desenvolvedora Front-end especializada em criar landing pages e experiências web impactantes.
        </p>
        
        <div 
          ref={ctaRef} 
          className="flex flex-col sm:flex-row gap-4 opacity-0 transition-opacity duration-1000 delay-700"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Ver Projetos
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-purple-700 dark:text-purple-400 rounded-full border-2 border-purple-700 dark:border-purple-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Entrar em Contato
          </a>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-700 dark:text-gray-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;