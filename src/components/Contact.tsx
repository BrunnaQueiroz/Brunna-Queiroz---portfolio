import React, { useRef, useState } from 'react';
import { Phone, Send, Mail, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubmitted(true);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       subject: '',
  //       message: '',
  //     });

  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //     }, 3000);
  //   }, 1500);
  // };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch('https://formsubmit.co/ajax/brunnaqueiroz724@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });

          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        } else {
          alert('Erro ao enviar. Tente novamente mais tarde.');
        }
      })
      .catch(() => alert('Erro ao enviar.'))
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const whatsappNumber = '+5571982420969';
  const whatsappMessage = encodeURIComponent(
    'Olá, vi seu portfólio e gostaria de conversar sobre um projeto.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 inline-block pb-2 border-b-4 border-purple-700 dark:border-purple-500">
            Entre em Contato
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a
            transformar suas ideias em realidade.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Obrigada pelo seu contato. Responderei o mais breve possível.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 flex items-center justify-center gap-2 rounded-lg bg-purple-700 hover:bg-purple-800 text-white font-medium transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-700 dark:text-purple-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      Email
                    </h4>
                    <a
                      href="mailto:brunnaqueiroz724@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                    >
                      brunnaqueiroz724@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-700 dark:text-purple-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      WhatsApp
                    </h4>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                    >
                      +55 71 98242-0969
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Fale comigo no WhatsApp
              </a>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
                Prometo responder o mais rápido possível!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
