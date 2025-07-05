
import { Badge } from "@/components/ui/badge";

export const StatsSection = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <div className="flex flex-wrap justify-center gap-4 text-lg font-bold">
          <Badge variant="outline" className="bg-red-900/30 border-red-500 text-red-300 px-4 py-2">
            📸 +813 atrizes exclusivas
          </Badge>
          <Badge variant="outline" className="bg-orange-900/30 border-orange-500 text-orange-300 px-4 py-2">
            🔥 +200.000 fotos e vídeos
          </Badge>
        </div>
        <p className="text-gray-300 mt-4 text-lg">
          Conteúdos atualizados todos os dias com o melhor dos vazados do Brasil
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
        <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
          <div className="text-3xl font-black text-pink-500 mb-2">47.600</div>
          <p className="text-gray-400">visualizações hoje</p>
        </div>
        <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
          <div className="text-3xl font-black text-blue-500 mb-2">3.254</div>
          <p className="text-gray-400">online agora</p>
        </div>
        <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
          <div className="text-3xl font-black text-red-500 mb-2">01:53:38</div>
          <p className="text-gray-400">acesso expira</p>
        </div>
      </div>
    </section>
  );
};
