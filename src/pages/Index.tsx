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
  hero_title: string;
  hero_subtitle: string;
  previas_link: string;
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
    preview_link: 'https://t.me/+eXtmPf2AIzY4YmQx',
    hero_image_url: '',
    hero_title: '🔥 O Maior Portal VIP do Brasil',
    hero_subtitle: 'OnlyFans & Privacy sem Restrições',
    previas_link: 'https://t.me/+eXtmPf2AIzY4YmQx'
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
    window.open(configs.previas_link || configs.preview_link, '_blank');
  };

  return (
    <>
      {/* Meta tags para SEO e proteção contra bots */}
      <head>
        <title>🔥 Mari Avila Aline Faria Juliana Bonde Vazados - Caiu na Net Atrizes Blogueiras Nuas Brasil</title>
        <meta name="description" content="🔥 VAZADOS CAIU NA NET: Mari Avila, Aline Faria, Juliana Bonde peladas! +800 atrizes brasileiras nuas vazaram OnlyFans Privacy. Blogueiras famosas sem roupa, MC Mirella, influenciadoras peladas - tudo vazado aqui!" />
        <meta name="keywords" content="mari avila vazado nua, aline faria pelada vazado, juliana bonde nua caiu na net, vazados atrizes brasil, blogueiras nuas vazadas, mc mirella pelada vazado, sarah staliceu nua vazado, fernanda campos pelada, caiu na net brasil, atrizes nuas vazadas, blogueiras peladas vazadas, influenciadoras nuas vazadas, onlyfans brasil vazado, privacy vazados brasil, packs vazados grátis, vídeos nuas vazados, fotos peladas vazadas, celebridades nuas vazado, famosas peladas brasil, instagram atrizes nuas, tiktokers peladas vazado, youtubers nuas vazadas, modelos nuas brasil, influencers peladas vazado, vazamentos celebridades, nudes famosas vazado, packs premium vazados, conteúdo adulto vazado brasil, atrizes sem roupa vazado, blogueiras sem censura, famosas caiu na net peladas, vazados telegram brasil, grupos vazados atrizes, canais vazados blogueiras" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-3 py-3 md:px-4 md:py-4">
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

        {/* Layout otimizado para conversão máxima - Primeira dobra completa mobile */}
        <div className="max-w-sm md:max-w-4xl w-full text-center space-y-3 md:space-y-4">
          
          {/* Título Principal Ultra Impactante - Primeira posição */}
          <h1 className="text-xl md:text-4xl font-black text-white leading-tight animate-title-entrance mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600">
              {configs.hero_title || configs.main_title}
            </span>
            <br />
            <span className="text-white text-base md:text-2xl mt-1 block">
              {configs.hero_subtitle || configs.subtitle}
            </span>
          </h1>

          {/* Imagem principal otimizada para mobile - Nova imagem PNG */}
          <div className="relative mb-4 animate-fade-in">
            {configs.hero_image_url ? (
              <img
                src={configs.hero_image_url}
                alt="VIP Content"
                className="w-full max-w-xs mx-auto rounded-xl shadow-2xl object-contain h-[200px] md:h-[400px]"
                loading="eager"
              />
            ) : (
              <img
                src="/lovable-uploads/721e3e0c-8717-45de-9ad8-646bd50a5449.png"
                alt="OnlyFans - O Melhor do Brasil"
                className="w-full max-w-sm mx-auto rounded-xl shadow-2xl object-cover h-[280px] md:h-[400px]"
                loading="eager"
              />
            )}
          </div>

          {/* Texto de autoridade com números impactantes */}
          <h2 className="text-base md:text-2xl font-bold text-white leading-tight animate-slide-in-up mb-4 px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600">
              {configs.stats_text}
            </span>
          </h2>

          {/* BOTÃO VIP - PRIORIDADE ABSOLUTA - Primeira dobra garantida */}
          <div className="space-y-2 max-w-lg mx-auto animate-fade-in-delay">
            <div className="space-y-1">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg md:text-xl px-6 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[60px] w-full animate-pulse-glow-intense"
                onClick={handleVipClick}
              >
                <Crown className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                {configs.vip_button_text}
              </Button>
              <p className="text-gray-300 text-xs font-medium animate-pulse">
                {configs.vip_button_subtitle}
              </p>
            </div>
            
            {/* Botão de prévias - Secundário, logo abaixo mas visível */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg md:text-xl px-6 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[60px] w-full mt-3"
              onClick={handlePreviewClick}  
            >
              <Eye className="mr-2 h-5 w-5 md:h-6 md:w-6" />
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
