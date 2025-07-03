
import { Button } from "@/components/ui/button";
import { Eye, Crown } from "lucide-react";

export const CTAButtons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
      <Button 
        size="lg" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 w-full md:w-auto min-h-[60px]"
        onClick={() => window.open('https://t.me/+SeuLinkDoCanalDePrevias', '_blank')}
      >
        <Eye className="mr-2 h-6 w-6" />
        🔵 VER PRÉVIAS GRÁTIS
      </Button>
      
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 w-full md:w-auto min-h-[60px]"
        onClick={() => window.open('https://t.me/+SeuLinkDoGrupoVip', '_blank')}
      >
        <Crown className="mr-2 h-6 w-6" />
        🔴 ACESSO VIP COMPLETO
      </Button>
    </div>
  );
};
