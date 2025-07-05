
-- Criar tabela para configurações do site
CREATE TABLE public.site_configs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  config_key TEXT NOT NULL UNIQUE,
  config_value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Inserir configurações padrão
INSERT INTO public.site_configs (config_key, config_value, description) VALUES
('main_title', '🔥 O Maior Portal VIP do Brasil', 'Título principal da página'),
('subtitle', 'OnlyFans & Privacy sem Restrições', 'Subtítulo da página'),
('stats_text', '+813 atrizes e +200 mil fotos e vídeos vazados', 'Texto de estatísticas'),
('vip_button_text', '🔴 ACESSO VIP COMPLETO', 'Texto do botão VIP'),
('vip_button_subtitle', 'Veja todos os vídeos completos, sem censura, 100% reais', 'Subtítulo do botão VIP'),
('preview_button_text', '🔵 VER PRÉVIAS GRÁTIS', 'Texto do botão de prévias'),
('vip_link', 'https://t.me/+SeuLinkDoGrupoVip', 'Link do botão VIP'),
('preview_link', 'https://t.me/+SeuLinkDoCanalDePrevias', 'Link do botão de prévias'),
('hero_image_url', '', 'URL da imagem principal (opcional)');

-- Habilitar RLS
ALTER TABLE public.site_configs ENABLE ROW LEVEL SECURITY;

-- Política para permitir que qualquer pessoa leia as configurações (necessário para o site funcionar)
CREATE POLICY "Permitir leitura de configs" 
  ON public.site_configs 
  FOR SELECT 
  USING (true);

-- Política para permitir que apenas admins autenticados editem
CREATE POLICY "Admin pode editar configs" 
  ON public.site_configs 
  FOR ALL 
  USING (auth.uid() IS NOT NULL);
