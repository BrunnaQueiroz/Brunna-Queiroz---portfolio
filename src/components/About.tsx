import React, { useEffect, useRef } from 'react';
import { Code, Layout, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
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

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 70 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Responsive Design', level: 90 },
    { name: 'UI/UX Design', level: 75 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo Area */}
          <div
            ref={imageRef}
            className="w-full md:w-2/5 mb-8 md:mb-0 opacity-0 transition-opacity duration-1000"
          >
            <div className="relative ">
              <div className="absolute -top-3 -left-3 right-3 bottom-3 border-2 border-purple-700 dark:border-purple-500 rounded-xl opacity-50"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="./eu.jpeg"
                  alt="Brunna Queiroz"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div
            ref={contentRef}
            className="w-full md:w-3/5 opacity-0 transition-opacity duration-1000 delay-300"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 inline-block pb-2 border-b-4 border-purple-700 dark:border-purple-500">
              Sobre Mim
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Olá! Sou Brunna Queiroz, desenvolvedora front-end apaixonada por
              criar experiências digitais impactantes. Meu foco atual são
              landing pages que convertem visitantes em clientes.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Com experiência em desenvolvimento web, combino habilidades
              técnicas com design para criar sites responsivos, otimizados para
              SEO e visualmente atrativos.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                <Code size={18} />
                <span>Desenvolvimento</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full">
                <Layout size={18} />
                <span>Design Web</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">
                <Rocket size={18} />
                <span>Landing Pages</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div
          ref={skillsRef}
          className="mt-16 opacity-0 transition-opacity duration-1000 delay-500"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            Minhas Habilidades
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map(skill => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-700 to-teal-500 dark:from-purple-500 dark:to-teal-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
