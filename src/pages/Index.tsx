
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Crown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface SiteConfigs {
  main_title: string;
  subtitle: string;
  stats_text: string;
  vip_button_text: string;
  vip_button_subtitle: string;
  preview_button_text: string;
  vip_link: string;
  preview_link: string;
  hero_image_url: string;
}

const Index = () => {
  const [configs, setConfigs] = useState<SiteConfigs>({
    main_title: '🔥 O Maior Portal VIP do Brasil',
    subtitle: 'OnlyFans & Privacy sem Restrições',
    stats_text: '+813 atrizes e +200 mil fotos e vídeos vazados',
    vip_button_text: '🔴 ACESSO VIP COMPLETO',
    vip_button_subtitle: 'Veja todos os vídeos completos, sem censura, 100% reais',
    preview_button_text: '🔵 VER PRÉVIAS GRÁTIS',
    vip_link: 'https://t.me/+SeuLinkDoGrupoVip',
    preview_link: 'https://t.me/+SeuLinkDoCanalDePrevias',
    hero_image_url: ''
  });

  // Carregar configurações do Supabase
  useEffect(() => {
    const loadConfigs = async () => {
      try {
        const { data, error } = await supabase
          .from('site_configs')
          .select('config_key, config_value');

        if (error) throw error;

        if (data) {
          const configObj: any = {};
          data.forEach(item => {
            configObj[item.config_key] = item.config_value;
          });
          setConfigs(prev => ({ ...prev, ...configObj }));
        }
      } catch (error) {
        console.log('Erro ao carregar configurações:', error);
      }
    };

    loadConfigs();
  }, []);

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
    registrarClique(configs.vip_button_text);
    window.open(configs.vip_link, '_blank');
  };

  const handlePreviewClick = () => {
    registrarClique(configs.preview_button_text);
    window.open(configs.preview_link, '_blank');
  };

  return (
    <>
      {/* Meta tags para SEO e proteção contra bots */}
      <head>
        <title>OnlyFans Privacy Vazados - +813 Atrizes Brasileiras - Fotos e Vídeos Vazados</title>
        <meta name="description" content="Acesso exclusivo a +813 atrizes brasileiras, +200 mil fotos e vídeos vazados do OnlyFans e Privacy. Conteúdo premium das maiores influenciadoras." />
        <meta name="keywords" content="OnlyFans, Privacy, vazados, atrizes brasileiras, vídeos vazados, fotos vazadas, influenciadoras, Kim Kardashian,Kylie Jenner,Kendall Jenner,Anitta,Bruna Marquezine,Larissa Manoela,Marina Ruy Barbosa,Paolla Oliveira,Grazi Massafera,Deborah Secco,Juliana Paes,Claudia Leitte,Ivete Sangalo,Virginia Fonseca,Bianca Andrade,Camila Coelho,Thassia Naves,Gabi Brandt,Gabriela Pugliesi,Carlinhos Maia,Whindersson Nunes,Lady Gaga,Rihanna,Beyonce,Shakira,Taylor Swift,Billie Eilish,Selena Gomez,Megan Fox,Jennifer Lopez,Margot Robbie,Gal Gadot,Emma Watson,Scarlett Johansson,Zendaya,Natalie Portman,Emma Stone,Reese Witherspoon,Jennifer Lawrence,Kristen Stewart,Mila Kunis,Kate Upton,Ashley Graham,Sophie Turner,Cara Delevingne,Addison Rae,Charli D'Amelio,Dixie D'Amelio,Bella Hadid,Gigi Hadid" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-4 py-4">
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

        {/* Layout otimizado para conversão máxima - Primeira dobra completa */}
        <div className="max-w-4xl w-full text-center space-y-4">
          
          {/* Título Principal Ultra Impactante - Primeira posição */}
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight animate-title-entrance mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600">
              {configs.main_title}
            </span>
            <br />
            <span className="text-white text-xl md:text-3xl mt-2 block">
              {configs.subtitle}
            </span>
          </h1>

          {/* Imagem compacta - Tamanho reduzido para economizar espaço vertical */}
          <div className="relative mb-4 animate-fade-in">
            {configs.hero_image_url ? (
              <img 
                src={configs.hero_image_url} 
                alt="VIP Content" 
                className="w-full max-w-md mx-auto rounded-xl shadow-xl"
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
            ) : (
              <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-red-600 rounded-xl p-4 relative overflow-hidden max-w-md mx-auto">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-2xl">👩‍🦳</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-2xl">👩‍🦱</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-2xl">👩‍🦰</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-2xl">👱‍♀️</span>
                    </div>
                  </div>
                  <div className="text-white text-lg font-bold">
                    OnlyFans & Privacy
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Texto de autoridade com números impactantes */}
          <h2 className="text-xl md:text-2xl font-bold text-white leading-tight animate-slide-in-up mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600">
              {configs.stats_text}
            </span>
          </h2>

          {/* BOTÃO VIP - PRIORIDADE ABSOLUTA - Primeira dobra garantida */}
          <div className="space-y-3 max-w-lg mx-auto animate-fade-in-delay">
            <div className="space-y-2">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg md:text-xl px-6 py-5 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[65px] w-full animate-pulse-glow-intense"
                onClick={handleVipClick}
              >
                <Crown className="mr-2 h-6 w-6 md:h-8 md:w-8" />
                {configs.vip_button_text}
              </Button>
              <p className="text-gray-300 text-sm font-medium animate-pulse">
                {configs.vip_button_subtitle}
              </p>
            </div>
            
            {/* Botão de prévias - Secundário, pode ficar ligeiramente abaixo */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg md:text-xl px-6 py-5 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[65px] w-full"
              onClick={handlePreviewClick}  
            >
              <Eye className="mr-2 h-6 w-6 md:h-8 md:w-8" />
              {configs.preview_button_text}
            </Button>
          </div>

          {/* Link discreto para admin */}
          <div className="mt-6">
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
