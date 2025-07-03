
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const TelegramCTA = () => {
  return (
    <div className="text-center mb-8">
      <Button 
        size="lg" 
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xl px-12 py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[70px]"
        onClick={() => window.open('https://t.me/+SeuLinkDoGrupoVip', '_blank')}
      >
        <MessageCircle className="mr-3 h-8 w-8" />
        📱 ACESSE O GRUPO DO TELEGRAM
      </Button>
      <p className="text-gray-400 mt-4 text-lg">
        Conteúdo novo todos os dias!
      </p>
    </div>
  );
};
