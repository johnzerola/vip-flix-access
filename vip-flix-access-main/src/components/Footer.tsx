
import { Shield, Mail, FileText, AlertTriangle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        {/* SEO Keywords Section (Hidden but crawlable) */}
        <div className="sr-only">
          <p>
            vazados privacy onlyfans vazados packs premium brasileiros vídeos vazados +18 
            MC Mirella Sarah Staliceu Juliana Bond Fernanda Campos Tainá Costa Mari Avila 
            Thais Afit Brenda Trindade Isadora Valle Máximo Garcia Agnes Nunes Aline Faria Mari Ladeira
          </p>
        </div>

        {/* Disclaimer */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-4">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-bold">AVISO IMPORTANTE</span>
          </div>
          <p className="text-gray-400 text-sm max-w-3xl mx-auto leading-relaxed">
            Este site é destinado exclusivamente para maiores de 18 anos. Todo o conteúdo é compartilhado 
            de forma educativa e informativa. Não nos responsabilizamos pelo uso inadequado das informações. 
            Respeite os direitos autorais e a privacidade das pessoas.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Política de Privacidade
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Termos de Uso
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <FileText className="h-4 w-4" />
            DMCA
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Contato
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 Privacy Flix. Site criado e gerenciado por equipe especializada.</p>
          <p className="mt-2">Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
