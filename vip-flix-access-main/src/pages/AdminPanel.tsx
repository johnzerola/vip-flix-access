import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eye, Users, MousePointer, TrendingUp, LogOut, Save, Edit } from "lucide-react";
import { toast } from "sonner";

interface AnalyticsData {
  totalVisitas: number;
  visitasUnicas: number;
  totalCliques: number;
  cliquesPorBotao: { button_name: string; count: number }[];
  botaoMaisClicado: string;
}

interface SiteConfig {
  config_key: string;
  config_value: string;
  description: string;
}

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [configs, setConfigs] = useState<SiteConfig[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("analytics");

  // Senha corrigida
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Acesso autorizado!");
      loadAnalytics();
      loadConfigs();
    } else {
      toast.error("Senha incorreta!");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setAnalytics(null);
    setConfigs([]);
  };

  const loadAnalytics = async () => {
    setLoading(true);
    try {
      const { data: visitas, error: visitasError } = await supabase
        .from('visitas')
        .select('*');

      if (visitasError) throw visitasError;

      const { data: cliques, error: cliquesError } = await supabase
        .from('cliques')
        .select('*');

      if (cliquesError) throw cliquesError;

      const totalVisitas = visitas?.length || 0;
      const uniqueVisitors = new Set(visitas?.map(v => v.user_agent)).size;
      const totalCliques = cliques?.length || 0;

      const cliquesPorBotao = cliques?.reduce((acc: any, clique) => {
        const existing = acc.find((item: any) => item.button_name === clique.button_name);
        if (existing) {
          existing.count++;
        } else {
          acc.push({ button_name: clique.button_name, count: 1 });
        }
        return acc;
      }, []) || [];

      const botaoMaisClicado = cliquesPorBotao.length > 0 
        ? cliquesPorBotao.reduce((prev: any, current: any) => 
            prev.count > current.count ? prev : current
          ).button_name
        : "Nenhum";

      setAnalytics({
        totalVisitas,
        visitasUnicas: uniqueVisitors,
        totalCliques,
        cliquesPorBotao,
        botaoMaisClicado
      });

    } catch (error) {
      toast.error("Erro ao carregar dados!");
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadConfigs = async () => {
    try {
      const { data, error } = await supabase
        .from('site_configs')
        .select('*')
        .order('config_key');

      if (error) throw error;
      setConfigs(data || []);
    } catch (error) {
      toast.error("Erro ao carregar configurações!");
      console.error('Erro:', error);
    }
  };

  const updateConfig = async (configKey: string, newValue: string) => {
    try {
      const { error } = await supabase
        .from('site_configs')
        .update({ 
          config_value: newValue,
          updated_at: new Date().toISOString()
        })
        .eq('config_key', configKey);

      if (error) throw error;

      // Atualizar estado local
      setConfigs(prev => prev.map(config => 
        config.config_key === configKey 
          ? { ...config, config_value: newValue }
          : config
      ));

      toast.success("Configuração salva com sucesso!");
    } catch (error) {
      toast.error("Erro ao salvar configuração!");
      console.error('Erro:', error);
    }
  };

  const handleConfigChange = (configKey: string, value: string) => {
    setConfigs(prev => prev.map(config => 
      config.config_key === configKey 
        ? { ...config, config_value: value }
        : config
    ));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-gray-800 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">🔐 Acesso Restrito</CardTitle>
            <CardDescription className="text-gray-400">
              Digite a senha de administrador
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Senha de administrador"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Button 
              onClick={handleLogin} 
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Entrar
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Senha: admin123
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">📊 Painel Administrativo</h1>
          <div className="flex gap-4">
            <Button 
              onClick={() => setActiveTab("analytics")}
              variant={activeTab === "analytics" ? "default" : "outline"}
              className={activeTab === "analytics" ? "bg-blue-600" : "border-gray-600 text-gray-300"}
            >
              📈 Analytics
            </Button>
            <Button 
              onClick={() => setActiveTab("cms")}
              variant={activeTab === "cms" ? "default" : "outline"}
              className={activeTab === "cms" ? "bg-green-600" : "border-gray-600 text-gray-300"}
            >
              <Edit className="h-4 w-4 mr-2" />
              CMS
            </Button>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Analytics</h2>
              <Button 
                onClick={loadAnalytics} 
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                🔄 Atualizar
              </Button>
            </div>

            {loading ? (
              <div className="text-center text-white text-xl">Carregando dados...</div>
            ) : analytics ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-300">
                        Total de Visitas
                      </CardTitle>
                      <Eye className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">{analytics.totalVisitas}</div>
                      <p className="text-xs text-gray-400">
                        Todas as visitas registradas
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-300">
                        Visitantes Únicos
                      </CardTitle>
                      <Users className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">{analytics.visitasUnicas}</div>
                      <p className="text-xs text-gray-400">
                        Baseado em user-agent único
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-300">
                        Total de Cliques
                      </CardTitle>
                      <MousePointer className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">{analytics.totalCliques}</div>
                      <p className="text-xs text-gray-400">
                        Cliques em todos os botões
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-300">
                        Botão Mais Clicado
                      </CardTitle>
                      <TrendingUp className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold text-white">{analytics.botaoMaisClicado}</div>
                      <p className="text-xs text-gray-400">
                        Maior performance
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {analytics.cliquesPorBotao.length > 0 && (
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">📈 Detalhamento de Cliques por Botão</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {analytics.cliquesPorBotao.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                            <span className="text-white font-medium">{item.button_name}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-2xl font-bold text-blue-400">{item.count}</span>
                              <span className="text-sm text-gray-400">cliques</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <div className="text-center text-gray-400 text-lg">
                Clique em "Atualizar" para carregar os dados
              </div>
            )}
          </>
        )}

        {/* CMS Tab */}
        {activeTab === "cms" && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Sistema de Gerenciamento de Conteúdo</h2>
              <Button 
                onClick={loadConfigs} 
                disabled={loading}
                className="bg-green-600 hover:bg-green-700"
              >
                🔄 Recarregar
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {configs.map((config) => (
                <Card key={config.config_key} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">
                      {config.description}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Chave: {config.config_key}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {config.config_key.includes('text') || config.config_key.includes('title') ? (
                      <Textarea
                        value={config.config_value}
                        onChange={(e) => handleConfigChange(config.config_key, e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                        placeholder={config.description}
                      />
                    ) : (
                      <Input
                        value={config.config_value}
                        onChange={(e) => handleConfigChange(config.config_key, e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder={config.description}
                      />
                    )}
                    <Button
                      onClick={() => updateConfig(config.config_key, config.config_value)}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Salvar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
