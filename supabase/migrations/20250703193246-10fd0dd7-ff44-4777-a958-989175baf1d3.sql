
-- Criar tabela para registrar visitas ao site
CREATE TABLE public.visitas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  ip_address TEXT,
  page TEXT NOT NULL DEFAULT '/',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar tabela para registrar cliques nos botões
CREATE TABLE public.cliques (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  button_name TEXT NOT NULL,
  page TEXT NOT NULL DEFAULT '/',
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security (RLS) nas tabelas
ALTER TABLE public.visitas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cliques ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de dados (qualquer usuário pode registrar visitas/cliques)
CREATE POLICY "Permitir inserção de visitas" 
  ON public.visitas 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Permitir inserção de cliques" 
  ON public.cliques 
  FOR INSERT 
  WITH CHECK (true);

-- Política para leitura apenas por usuários autenticados (painel admin)
CREATE POLICY "Admin pode ver visitas" 
  ON public.visitas 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admin pode ver cliques" 
  ON public.cliques 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);

-- Criar índices para melhor performance
CREATE INDEX idx_visitas_timestamp ON public.visitas(timestamp);
CREATE INDEX idx_visitas_page ON public.visitas(page);
CREATE INDEX idx_cliques_timestamp ON public.cliques(timestamp);
CREATE INDEX idx_cliques_button_name ON public.cliques(button_name);
CREATE INDEX idx_cliques_page ON public.cliques(page);
