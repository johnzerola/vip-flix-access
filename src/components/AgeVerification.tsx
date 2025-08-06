import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Check, X } from "lucide-react";

interface AgeVerificationProps {
  onVerified: () => void;
}

const AgeVerification = ({ onVerified }: AgeVerificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Verificar se o usuário já confirmou a idade
    const ageVerified = localStorage.getItem('ageVerified');
    if (ageVerified === 'true') {
      setIsVisible(false);
      onVerified();
    }
  }, [onVerified]);

  const handleAgeConfirm = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVisible(false);
    onVerified();
  };

  const handleAgeReject = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg p-6 md:p-8 max-w-md w-full border border-gray-700">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <AlertTriangle className="h-16 w-16 text-yellow-500" />
          </div>
          
          <h2 className="text-2xl font-bold text-white">Verificação de Idade</h2>
          
          <div className="text-gray-300 space-y-3">
            <p className="font-semibold text-yellow-400">
              ATENÇÃO: Este site contém conteúdo adulto
            </p>
            <p>
              Para continuar, você deve confirmar que tem <strong>18 anos ou mais</strong> 
              e concorda em visualizar conteúdo adulto.
            </p>
            <p className="text-sm">
              Se você é menor de idade ou não deseja ver este tipo de conteúdo, 
              clique em "Não tenho 18 anos" para sair.
            </p>
          </div>

          <div className="flex flex-col space-y-3 mt-6">
            <Button
              onClick={handleAgeConfirm}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
            >
              <Check className="mr-2 h-5 w-5" />
              Tenho 18 anos ou mais - ENTRAR
            </Button>
            
            <Button
              onClick={handleAgeReject}
              variant="outline"
              className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold py-3"
            >
              <X className="mr-2 h-5 w-5" />
              Não tenho 18 anos - SAIR
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Ao clicar em "Tenho 18 anos ou mais", você declara sob pena de lei 
            que possui a idade mínima exigida e aceita nossos termos de uso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;