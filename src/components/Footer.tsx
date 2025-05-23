import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-bold text-purple-400 flex items-center"
            >
              <span className="text-3xl font-extrabold">Brunna</span>
              <span className="ml-1">Queiroz</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-xs">
              Desenvolvendo experiências web impactantes e landing pages que
              convertem.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/brunna-queiroz-4a7255257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/brunnalorraneq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors text-sm"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={16} />
              <span>Voltar ao topo</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Brunna Queiroz. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
