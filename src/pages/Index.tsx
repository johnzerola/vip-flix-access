import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Crown, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet";

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

  const handleSupportClick = () => {
    registrarClique('Falar com Suporte');
    window.open('https://t.me/spyvipconteudo', '_blank');
  };

  return (
    <>
      <Helmet>
        {/* SEO Otimizado para Primeira Página do Google */}
        <title>🔥 Mari Avila Aline Faria Juliana Bonde Vazados - Caiu na Net Atrizes Blogueiras Nuas Brasil 2024</title>
        <meta name="description" content="🔥 VAZADOS EXCLUSIVOS 2024: Mari Avila, Aline Faria, Juliana Bonde peladas! +813 atrizes brasileiras nuas vazaram OnlyFans Privacy. Blogueiras famosas sem roupa, MC Mirella, Sarah Stiiceu, influenciadoras peladas - Acesso VIP completo com +200.000 fotos e vídeos vazados!" />
        
        {/* Keywords Ultra-Específicas para SEO */}
        <meta name="keywords" content="mari avila vazado nua 2024, aline faria pelada vazado onlyfans, juliana bonde nua caiu na net hoje, vazados atrizes brasil 2024, blogueiras nuas vazadas telegram, mc mirella pelada vazado privacy, sarah staliceu nua vazado completo, fernanda campos pelada onlyfans, caiu na net brasil 2024, atrizes nuas vazadas hoje, blogueiras peladas vazadas grátis, influenciadoras nuas vazadas telegram, onlyfans brasil vazado 2024, privacy vazados brasil completo, packs vazados grátis download, vídeos nuas vazados hd, fotos peladas vazadas sem censura, celebridades nuas vazado 2024, famosas peladas brasil caiu na net, instagram atrizes nuas vazadas, tiktokers peladas vazado hoje, youtubers nuas vazadas 2024, modelos nuas brasil vazado, influencers peladas vazado telegram, vazamentos celebridades 2024, nudes famosas vazado completo, packs premium vazados grátis, conteúdo adulto vazado brasil hoje, atrizes sem roupa vazado onlyfans, blogueiras sem censura vazadas, famosas caiu na net peladas 2024, vazados telegram brasil vip, grupos vazados atrizes premium, canais vazados blogueiras exclusivo, mari avila onlyfans vazado completo, aline faria privacy vazado hd, juliana bonde pelada sem censura, mc mirella vazado telegram vip, sarah staliceu onlyfans vazado, fernanda campos privacy vazado, bruna biancardi vazado nua, virginia fonseca pelada vazado, anitta nua vazado 2024, bruna marquezine pelada caiu na net, larissa manoela vazado onlyfans, marina ruy barbosa nua vazado, paolla oliveira pelada vazado, grazi massafera nua caiu na net, deborah secco vazado pelada, juliana paes onlyfans vazado, claudia leitte nua vazado, ivete sangalo pelada caiu na net, bianca andrade vazado nua, camila coelho onlyfans vazado, thassia naves pelada vazado, gabi brandt nua caiu na net, gabriela pugliesi vazado pelada, leticia shirayuki vazado nua, karen bachini pelada vazado, camila loures onlyfans vazado, niina secrets nua caiu na net, amanda trivizas vazado pelada, duda reis onlyfans vazado nua, rafa kalimann pelada caiu na net, jade picon vazado nua 2024, blogueiras fitness nuas vazadas, youtubers brasileiras peladas vazado, tiktokers famosas nuas caiu na net, atrizes globo peladas vazado, apresentadoras nuas vazadas 2024, cantoras brasileiras peladas vazado, modelos instagram nuas caiu na net, dançarinas funk peladas vazado, mc's mulheres nuas vazadas, influencers fitness peladas vazado, blogueiras moda nuas caiu na net, youtubers beleza peladas vazado, tiktokers dança nuas vazadas, atrizes record peladas caiu na net, apresentadoras sbt nuas vazado, cantoras sertanejo peladas vazado, funkeiras nuas vazadas 2024, atrizes novela peladas caiu na net, modelos playboy nuas vazado, ring girls peladas vazadas, cheerleaders nuas caiu na net, dançarinas axé peladas vazado, musas carnaval nuas vazadas, rainhas bateria peladas caiu na net, modelos webcam nuas vazado, cam girls brasileiras peladas, atrizes pornô amadoras vazado, modelos alternativas nuas caiu na net, influencers tatuadas peladas vazado, blogueiras góticas nuas vazadas, gamers girls brasileiras peladas, streamers mulheres nuas vazado, cosplayers brasileiras peladas caiu na net" />
        
        {/* Meta Tags Técnicas para SEO */}
        <meta name="author" content="Privacy Flix - Portal VIP Brasil" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.country" content="Brasil" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="adult" />
        <meta name="content-rating" content="mature" />
        
        {/* Open Graph Otimizado */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Privacy Flix VIP" />
        <meta property="og:url" content="https://vazadosprivacyflix.com/" />
        <meta property="og:title" content="🔥 Mari Avila Aline Faria Juliana Bonde Vazados - Portal VIP Brasil 2024" />
        <meta property="og:description" content="VAZADOS EXCLUSIVOS: +813 atrizes brasileiras nuas! Mari Avila, Aline Faria, Juliana Bonde peladas. Acesso VIP com +200.000 fotos e vídeos vazados OnlyFans Privacy." />
        <meta property="og:image" content="https://vazadosprivacyflix.com/og-image-2024.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Portal VIP Brasil - Atrizes e Blogueiras Vazadas" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrivacyFlixVIP" />
        <meta name="twitter:creator" content="@PrivacyFlixVIP" />
        <meta name="twitter:url" content="https://vazadosprivacyflix.com/" />
        <meta name="twitter:title" content="🔥 Mari Avila Aline Faria Juliana Bonde Vazados - Portal VIP 2024" />
        <meta name="twitter:description" content="VAZADOS: +813 atrizes brasileiras nuas! Acesso VIP total com +200.000 fotos e vídeos vazados." />
        <meta name="twitter:image" content="https://vazadosprivacyflix.com/og-image-2024.jpg" />
        
        {/* Schema.org Structured Data para SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Privacy Flix VIP - Portal Exclusivo Brasil",
            "alternateName": "Vazados Brasil VIP",
            "url": "https://vazadosprivacyflix.com",
            "description": "Portal VIP exclusivo com conteúdo de atrizes e blogueiras brasileiras. Acesso premium com mais de 813 modelos e +200.000 fotos e vídeos.",
            "publisher": {
              "@type": "Organization",
              "name": "Privacy Flix",
              "logo": {
                "@type": "ImageObject",
                "url": "https://vazadosprivacyflix.com/logo.png"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://vazadosprivacyflix.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "inLanguage": "pt-BR",
            "audience": {
              "@type": "Audience",
              "audienceType": "Adult"
            }
          })}
        </script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vazadosprivacyflix.com/" />
        
        {/* Preconnect para Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//t.me" />
        <link rel="dns-prefetch" href="//telegram.org" />
        
        {/* Hreflang para Localização */}
        <link rel="alternate" hrefLang="pt-br" href="https://vazadosprivacyflix.com/" />
        <link rel="alternate" hrefLang="pt" href="https://vazadosprivacyflix.com/" />
        
        {/* Additional Meta Tags para Mobile e Performance */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>

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
                alt="Portal VIP Brasil - Mari Avila Aline Faria Juliana Bonde Vazados"
                className="w-full max-w-xs mx-auto rounded-xl shadow-2xl object-contain h-[200px] md:h-[400px]"
                loading="eager"
              />
            ) : (
              <img
                src="/lovable-uploads/721e3e0c-8717-45de-9ad8-646bd50a5449.png"
                alt="OnlyFans Privacy Brasil - Atrizes Blogueiras Vazadas VIP"
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

            {/* NOVO: Botão de Suporte no Telegram */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg md:text-xl px-6 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[60px] w-full mt-3"
              onClick={handleSupportClick}
            >
              <MessageCircle className="mr-2 h-5 w-5 md:h-6 md:w-6" />
              📞 FALAR COM SUPORTE
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
