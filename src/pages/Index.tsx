
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Crown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  // Registrar visita ao carregar a página
  useEffect(() => {
    const registrarVisita = async () => {
      try {
        const userAgent = navigator.userAgent;
        await supabase
          .from('visitas')
          .insert({
            page: '/',
            user_agent: userAgent,
            timestamp: new Date().toISOString()
          });
      } catch (error) {
        console.log('Erro ao registrar visita:', error);
      }
    };

    registrarVisita();
  }, []);

  // Função para registrar cliques nos botões
  const registrarClique = async (buttonName: string) => {
    try {
      const userAgent = navigator.userAgent;
      await supabase
        .from('cliques')
        .insert({
          button_name: buttonName,
          page: '/',
          user_agent: userAgent,
          timestamp: new Date().toISOString()
        });
    } catch (error) {
      console.log('Erro ao registrar clique:', error);
    }
  };

  const handleVipClick = () => {
    registrarClique('Acesso VIP Completo');
    window.open('https://t.me/+SeuLinkDoGrupoVip', '_blank');
  };

  const handlePreviewClick = () => {
    registrarClique('Ver Prévias Grátis');
    window.open('https://t.me/+SeuLinkDoCanalDePrevias', '_blank');
  };

  return (
    <>
      {/* Meta tags para SEO e proteção contra bots */}
      <head>
        <title>OnlyFans Privacy Vazados - +813 Atrizes Brasileiras - Fotos e Vídeos Vazados</title>
        <meta name="description" content="Acesso exclusivo a +813 atrizes brasileiras, +200 mil fotos e vídeos vazados do OnlyFans e Privacy. Conteúdo premium das maiores influenciadoras." />
        <meta name="keywords" content="OnlyFans, Privacy, vazados, atrizes brasileiras, vídeos vazados, fotos vazadas, influenciadoras" />
        
        {/* Proteção contra bots específicos */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="facebookbot" content="noindex, nofollow" />
        <meta name="twitterbot" content="noindex, nofollow" />
        
        {/* Open Graph para controle de compartilhamento */}
        <meta property="og:title" content="Conteúdo Exclusivo VIP" />
        <meta property="og:description" content="Acesso restrito disponível" />
        <meta property="og:type" content="website" />
      </head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-4">
        {/* Proteção JavaScript contra bots conhecidos */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const userAgent = navigator.userAgent.toLowerCase();
              const botPatterns = [
                'facebookexternalhit', 'twitterbot', 'linkedinbot', 
                'whatsapp', 'telegrambot', 'instagrambot', 'googlebot'
              ];
              
              if (botPatterns.some(bot => userAgent.includes(bot))) {
                document.body.innerHTML = '<div style="text-align:center;margin-top:50px;"><h1>Site em Manutenção</h1><p>Volte em breve.</p></div>';
                return;
              }
            })();
          `
        }} />

        {/* Conteúdo Principal */}
        <div className="max-w-4xl w-full text-center space-y-8">
          
          {/* Imagem Principal */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-red-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center">
                    <span className="text-4xl">👩‍🦳</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center">
                    <span className="text-4xl">👩‍🦱</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center">
                    <span className="text-4xl">👩‍🦰</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center">
                    <span className="text-4xl">👱‍♀️</span>
                  </div>
                </div>
                <div className="text-white text-2xl md:text-3xl font-bold">
                  OnlyFans & Privacy
                </div>
              </div>
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600">
              +813 atrizes e +200 mil fotos e vídeos vazados
            </span>
            <br />
            <span className="text-white text-2xl md:text-4xl mt-2 block">
              Privacy e OnlyFans
            </span>
          </h1>

          {/* Botões Principais */}
          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl px-8 py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[80px] w-full"
              onClick={handleVipClick}
            >
              <Crown className="mr-3 h-8 w-8" />
              🔴 ACESSO VIP COMPLETO
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xl px-8 py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[80px] w-full"
              onClick={handlePreviewClick}  
            >
              <Eye className="mr-3 h-8 w-8" />
              🔵 VER PRÉVIAS GRÁTIS
            </Button>
          </div>

          {/* Link discreto para admin */}
          <div className="mt-16">
            <a 
              href="/acesso-restrito" 
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
              style={{ fontSize: '10px' }}
            >
              •
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
