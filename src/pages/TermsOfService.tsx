import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Termos de Uso - Privacy Flix VIP</title>
        <meta name="description" content="Termos de Uso do Privacy Flix VIP - Conheça as regras e condições de uso da nossa plataforma." />
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
            <h1 className="text-3xl font-bold text-white mb-6">Termos de Uso</h1>
            
            <div className="text-gray-300 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
                <p>Ao acessar e usar este site, você concorda em cumprir estes termos de uso. Se você não concordar com algum termo, não deve usar este site.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. Restrição de Idade</h2>
                <p className="text-yellow-400 font-semibold">ESTE SITE É DESTINADO EXCLUSIVAMENTE PARA USUÁRIOS MAIORES DE 18 ANOS.</p>
                <p>Menores de idade estão proibidos de acessar este conteúdo. Ao continuar, você declara ter mais de 18 anos.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. Natureza do Conteúdo</h2>
                <p>Este site contém conteúdo adulto e é destinado apenas para entretenimento de adultos. Todo o conteúdo está em conformidade com as leis aplicáveis.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Uso Responsável</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Você deve usar o site de forma responsável e legal</li>
                  <li>É proibido copiar, distribuir ou republicar o conteúdo</li>
                  <li>Não é permitido usar o site para atividades ilegais</li>
                  <li>Respeite os direitos autorais e propriedade intelectual</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Limitação de Responsabilidade</h2>
                <p>O site é fornecido "como está" e não oferecemos garantias sobre a disponibilidade, precisão ou adequação do conteúdo.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Links Externos</h2>
                <p>Este site pode conter links para sites externos. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Modificações</h2>
                <p>Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">8. Contato</h2>
                <p>Para questões relacionadas aos termos de uso, entre em contato através do nosso suporte no Telegram.</p>
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

export default TermsOfService;