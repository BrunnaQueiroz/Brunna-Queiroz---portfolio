import React, { useEffect, useRef } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { inView } = useInView(sectionRef, { threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Landing Page Turismo',
      description:
        'Landing page responsiva desenvolvida para uma empresa de turismo.',
      image: './connect.png',
      tags: ['Landing Page', 'React', 'Tailwind'],
      link: 'https://connect4youitaparicatour.com/',
    },
    {
      id: 2,
      title: 'Página de Portfólio',
      description:
        'Página de portfólio desenvolvida para social media. Design moderno, responsivo e com chamadas para ação.',
      image: './portfolio.png',
      tags: ['Landing PAge', 'React', 'Tailwind'],
      link: 'https://portfolio-iris-pearl.vercel.app/',
    },
    {
      id: 3,
      title: 'Site Empresa Júnior UFBA',
      description:
        'Website completo para empresa júnior de comunicação da Universidade Federal da Bahia, com páginas de blog, portfólio e mais. Ainda está em processo de deploy pela equipe responsável.',
      image: '/produtora.png',
      tags: ['Website', 'React', 'NextJS', 'Prismic'],
      link: 'https://youtu.be/L-Sq5fkodQo',
    },
    {
      id: 4,
      title: 'Landing page para empreendimento',
      description:
        'Landing page desenvolvida para o lançamento do Quartier Horto, um empreendimento de alto padrão em Salvador. Design moderno, responsivo e alinhado à identidade visual do produto, com foco em conversão e destaque para diferenciais exclusivos do imóvel.',
      image: './quartier.png',
      tags: ['Landing Page', 'React', 'NextJS'],
      link: 'https://lp-quartier.vercel.app/',
    },
    {
      id: 5,
      title: 'Landing page para corretora de imóveis',
      description:
        'Landing page desenvolvida para uma corretora de imóveis divulgar alguns de seus produtos. Design moderno, elegante, responsivo e com foco em conversão.',
      image: './corretora.png',
      tags: ['Landing Page', 'React', 'NextJS'],
      link: 'https://lp-imobi.vercel.app/',
    },
  ];

  const filteredProjects = projects;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 inline-block pb-2 border-b-4 border-purple-700 dark:border-purple-500">
            Meus Projetos
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos recentes em desenvolvimento de
            landing pages e web design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-300 transition-colors duration-300 flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                        <span>Ver Projeto</span>
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-purple-300 transition-colors duration-300 flex items-center gap-1"
                      >
                        <Code size={16} />
                        <span>Detalhes</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Vamos Trabalhar Juntos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
