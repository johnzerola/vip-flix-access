
import { Badge } from "@/components/ui/badge";

export const MainBanner = () => {
  return (
    <section className="text-center mb-12">
      {/* Banner Image Placeholder */}
      <div className="relative mb-8">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <Badge className="bg-blue-500 hover:bg-blue-600 mb-4">
              O MELHOR DO
            </Badge>
            <div className="text-6xl font-black text-white mb-4 drop-shadow-2xl">
              OnlyFans
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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
            <p className="text-white text-lg mt-4 font-semibold">
              CRIADOR DE SONHOS • AMOR FÁCIL • CARINHO ETERNO • VOLUME MONDO
            </p>
            <p className="text-cyan-200 text-xl font-bold mt-2">
              E MUITO MAIS!
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
        O Melhor Grupo VIP do Brasil
      </h1>
      
      <div className="text-red-400 font-bold text-xl mb-6">
        ESSE GRUPO SERÁ CENSURADO EM BREVE!
      </div>
      
      <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
        Pare agora de pagar para ter acesso a esses conteúdos!
      </p>
    </section>
  );
};
