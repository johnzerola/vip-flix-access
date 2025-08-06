import { lazy, Suspense, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Crown, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet";

// Lazy loading de componentes para reduzir bundle inicial
const AgeVerification = lazy(() => import("@/components/AgeVerification"));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

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

// Loading placeholder component otimizado para mobile
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
  </div>
);

const Index = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
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

  // Cache das configurações no sessionStorage para carregamento mais rápido
  useEffect(() => {
    const loadConfigs = async () => {
      // Verificar cache primeiro
      const cachedConfigs = sessionStorage.getItem('site_configs');
      if (cachedConfigs) {
        try {
          const parsed = JSON.parse(cachedConfigs);
          setConfigs(prev => ({ ...prev, ...parsed }));
        } catch (e) {
          console.log('Erro ao carregar cache:', e);
        }
      }

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
          
          // Salvar no cache
          sessionStorage.setItem('site_configs', JSON.stringify(configObj));
        }
      } catch (error) {
        console.log('Erro ao carregar configurações:', error);
      }
    };

    loadConfigs();
  }, []);

  // Registrar visita de forma assíncrona sem bloquear UI
  useEffect(() => {
    const registrarVisita = async () => {
      try {
        // Usar requestIdleCallback para performance
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            supabase.from('visitas').insert({
              page: '/',
              user_agent: navigator.userAgent,
              timestamp: new Date().toISOString()
            });
          });
        } else {
          setTimeout(() => {
            supabase.from('visitas').insert({
              page: '/',
              user_agent: navigator.userAgent,
              timestamp: new Date().toISOString()
            });
          }, 100);
        }
      } catch (error) {
        console.log('Erro ao registrar visita:', error);
      }
    };

    registrarVisita();
  }, []);

  // Função otimizada para registrar cliques
  const registrarClique = async (buttonName: string) => {
    try {
      // Não aguardar resposta para não bloquear navegação
      supabase.from('cliques').insert({
        button_name: buttonName,
        page: '/',
        user_agent: navigator.userAgent,
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

  if (!isAgeVerified) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AgeVerification onVerified={() => setIsAgeVerified(true)} />
      </Suspense>
    );
  }

  return (
    <>
      <Helmet>
        {/* SEO Otimizado para Mobile-First */}
        <title>🔥 Mari Avila Aline Faria Juliana Bonde Vazados - Portal VIP Brasil 2024</title>
        <meta name="description" content="🔥 VAZADOS EXCLUSIVOS 2024: Mari Avila, Aline Faria, Juliana Bonde peladas! +813 atrizes brasileiras nuas vazaram OnlyFans Privacy. Acesso VIP completo!" />
        
        {/* Keywords otimizadas para mobile */}
        <meta name="keywords" content="mari avila vazado mobile, aline faria pelada celular, juliana bonde nua app, vazados mobile brasil 2024, onlyfans app vazado, privacy mobile vazado, telegram vazados celular" />
        
        {/* Meta Tags Mobile-First */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Privacy VIP" />
        <meta name="application-name" content="Privacy VIP" />
        
        {/* Performance hints */}
        <link rel="preload" href="/lovable-uploads/721e3e0c-8717-45de-9ad8-646bd50a5449.png" as="image" />
        <link rel="prefetch" href="https://t.me/+eXtmPf2AIzY4YmQx" />
        <link rel="prefetch" href="https://t.me/spyvipconteudo" />
        
        {/* Resource hints para mobile */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        <meta name="format-detection" content="address=no" />
        
        {/* PWA básico para mobile */}
        <meta name="theme-color" content="#dc2626" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-2 py-2 md:px-4 md:py-4">
        
        {/* Layout ultra-otimizado para mobile - Máxima conversão primeira dobra */}
        <div className="max-w-[340px] md:max-w-4xl w-full text-center space-y-2 md:space-y-4">
          
          {/* Título otimizado para mobile - Compacto mas impactante */}
          <h1 className="text-lg md:text-4xl font-black text-white leading-tight animate-title-entrance mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 block">
              {configs.hero_title || configs.main_title}
            </span>
            <span className="text-white text-sm md:text-2xl mt-1 block">
              {configs.hero_subtitle || configs.subtitle}
            </span>
          </h1>

          {/* Imagem otimizada para mobile com lazy loading nativo */}
          <div className="relative mb-3 animate-fade-in">
            <img
              src={configs.hero_image_url || "/lovable-uploads/721e3e0c-8717-45de-9ad8-646bd50a5449.png"}
              alt="Portal VIP Brasil - Vazados Exclusivos"
              className="w-full max-w-[280px] mx-auto rounded-xl shadow-2xl object-cover h-[200px] md:h-[400px]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="280"
              height="200"
            />
          </div>

          {/* Stats otimizados para mobile */}
          <h2 className="text-sm md:text-2xl font-bold text-white leading-tight animate-slide-in-up mb-3 px-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600">
              {configs.stats_text}
            </span>
          </h2>

          {/* Botões otimizados para mobile - Touch-friendly */}
          <div className="space-y-2 max-w-[320px] mx-auto animate-fade-in-delay">
            
            {/* Botão VIP - Prioridade máxima mobile */}
            <div className="space-y-1">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base md:text-xl px-4 py-4 rounded-xl shadow-2xl transform active:scale-95 transition-all duration-150 min-h-[56px] w-full animate-pulse-glow-intense touch-manipulation"
                onClick={handleVipClick}
              >
                <Crown className="mr-2 h-5 w-5" />
                {configs.vip_button_text}
              </Button>
              <p className="text-gray-300 text-xs font-medium animate-pulse px-1">
                {configs.vip_button_subtitle}
              </p>
            </div>
            
            {/* Botão Prévias - Mobile otimizado */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-xl px-4 py-4 rounded-xl shadow-2xl transform active:scale-95 transition-all duration-150 min-h-[56px] w-full touch-manipulation"
              onClick={handlePreviewClick}  
            >
              <Eye className="mr-2 h-5 w-5" />
              {configs.preview_button_text}
            </Button>

            {/* Botão Suporte - Mobile otimizado */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base md:text-xl px-4 py-4 rounded-xl shadow-2xl transform active:scale-95 transition-all duration-150 min-h-[56px] w-full touch-manipulation"
              onClick={handleSupportClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              📞 FALAR COM SUPORTE
            </Button>
          </div>

          {/* Link admin discreto */}
          <div className="mt-4">
            <a 
              href="/acesso-restrito" 
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
              style={{ fontSize: '8px' }}
            >
              •
            </a>
          </div>
        </div>
        
        {/* Footer com lazy loading */}
        <Suspense fallback={<div className="h-32"></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;