
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Crown, Users, Image as ImageIcon, Clock, Shield } from "lucide-react";
import { MainBanner } from "@/components/MainBanner";
import { StatsSection } from "@/components/StatsSection";
import { CTAButtons } from "@/components/CTAButtons";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header/Logo */}
      <header className="py-4 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <Crown className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-white">VAZADOS PRIVACY FLIX</h1>
        </div>
        <Badge variant="destructive" className="mt-2 animate-pulse">
          🔥 EXCLUSIVO VIP
        </Badge>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-8">
        {/* Hero Banner */}
        <MainBanner />

        {/* Stats Section */}
        <StatsSection />

        {/* Main CTA Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 mb-6 leading-tight">
            VAZADOS PREMIUM
            <br />
            EXCLUSIVOS
          </h2>
          
          <div className="bg-yellow-600/20 border border-yellow-500 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-yellow-300 font-bold text-xl">
              ⚠️ CONTEÚDO VIP LIBERADO POR TEMPO LIMITADO
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Acesso completo aos vazados mais procurados do Brasil. Conteúdo premium de influenciadoras 
            famosas, totalmente grátis por hoje.
          </p>

          <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-red-300 font-bold text-lg mb-2">
              <Clock className="h-5 w-5" />
              🔥 ÚLTIMO DIA DE ACESSO GRATUITO - NÃO PERCA!
            </div>
          </div>

          {/* CTA Buttons */}
          <CTAButtons />
        </section>

        {/* Content Preview */}
        <section className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            O que você vai encontrar:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <ImageIcon className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Fotos Exclusivas</h4>
              <p className="text-gray-400">+200.000 fotos em alta resolução</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <Eye className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Vídeos Premium</h4>
              <p className="text-gray-400">Conteúdo audiovisual completo</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">+800 Atrizes</h4>
              <p className="text-gray-400">As mais famosas do Brasil</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-black text-white mb-4">
              NÃO PERCA ESTA OPORTUNIDADE!
            </h3>
            <p className="text-lg text-pink-100 mb-6">
              Conteúdo novo todos os dias! Acesse agora antes que expire.
            </p>
            <CTAButtons />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
