import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Privacy Flix VIP</title>
        <meta name="description" content="Política de Privacidade do Privacy Flix VIP - Portal responsável para usuários adultos maiores de 18 anos." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button 
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Button>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 md:p-8">
            <h1 className="text-3xl font-bold text-white mb-6">Política de Privacidade</h1>
            
            <div className="text-gray-300 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Informações Gerais</h2>
                <p>Este site é destinado exclusivamente para usuários adultos maiores de 18 anos. Respeitamos sua privacidade e estamos comprometidos em proteger suas informações pessoais.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. Informações Coletadas</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
                  <li>Informações técnicas (IP, navegador, dispositivo)</li>
                  <li>Cookies para melhorar a experiência do usuário</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. Uso das Informações</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Melhorar a funcionalidade do site</li>
                  <li>Análise de tráfego e comportamento dos usuários</li>
                  <li>Segurança e prevenção de fraudes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Compartilhamento de Dados</h2>
                <p>Não compartilhamos, vendemos ou alugamos suas informações pessoais para terceiros. Seus dados são mantidos em segurança e confidencialidade.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Cookies</h2>
                <p>Utilizamos cookies para melhorar sua experiência de navegação. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Segurança</h2>
                <p>Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Alterações na Política</h2>
                <p>Esta política pode ser atualizada periodicamente. As alterações serão publicadas nesta página com a data de atualização.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">8. Contato</h2>
                <p>Para dúvidas sobre esta política de privacidade, entre em contato através do nosso suporte no Telegram.</p>
              </section>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;