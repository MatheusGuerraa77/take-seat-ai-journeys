
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"></path></svg>
              <span className="font-bold text-lg">TakeSeat</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando a experiência de viagem com acessibilidade personalizada através de inteligência artificial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.232.585 1.777 1.17.586.585.917 1.15 1.168 1.821.246.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.219 1.791-.465 2.427a4.902 4.902 0 01-1.168 1.777c-.545.585-1.109.92-1.777 1.17-.636.247-1.363.416-2.427.465-1.066.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.219-2.427-.465a4.902 4.902 0 01-1.777-1.17c-.585-.545-.92-1.109-1.17-1.777-.246-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.219-1.791.465-2.427a4.902 4.902 0 011.17-1.777c.545-.585 1.109-.92 1.777-1.17.636-.246 1.363-.416 2.427-.465C9.57 2.013 9.93 2 12.36 2h.055zm-.2 1.802h-.06c-2.389 0-2.735.01-3.704.056-.894.041-1.32.19-1.63.316-.41.16-.7.35-1.01.66-.31.31-.5.6-.66 1.01-.126.31-.274.736-.316 1.63-.046.969-.056 1.315-.056 3.704v.06c0 2.389.01 2.735.056 3.704.041.894.19 1.32.316 1.63.16.41.35.7.66 1.01.31.31.6.5 1.01.66.31.126.736.274 1.63.316.969.046 1.315.056 3.704.056h.06c2.389 0 2.735-.01 3.704-.056.894-.041 1.32-.19 1.63-.316.41-.16.7-.35 1.01-.66.31-.31.5-.6.66-1.01.126-.31.274-.736.316-1.63.046-.969.056-1.315.056-3.704v-.06c0-2.389-.01-2.735-.056-3.704-.041-.894-.19-1.32-.316-1.63a2.79 2.79 0 00-.66-1.01c-.31-.31-.6-.5-1.01-.66-.31-.126-.736-.274-1.63-.316-.969-.046-1.315-.056-3.704-.056zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.168 1.168 0 100 2.335 1.168 1.168 0 000-2.334z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Empresa</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Sobre nós</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Funcionalidades</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Planos</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Carreiras</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white transition-colors">Imprensa</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Recursos</h3>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/guides" className="text-gray-400 hover:text-white transition-colors">Guias de viagem</Link></li>
              <li><Link to="/api" className="text-gray-400 hover:text-white transition-colors">API</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white transition-colors">Parceiros</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-white transition-colors">Comunidade</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Suporte</h3>
            <ul className="space-y-4">
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Central de ajuda</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Entre em contato</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">Perguntas frequentes</Link></li>
              <li><Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors">Acessibilidade</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Política de privacidade</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TakeSeat. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
              Termos de Serviço
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors text-sm">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
