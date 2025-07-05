-- Adicionar configurações específicas solicitadas se não existirem
INSERT INTO public.site_configs (config_key, config_value, description) VALUES
('hero_image_url', '', 'URL da imagem principal do hero')
ON CONFLICT (config_key) DO NOTHING;

INSERT INTO public.site_configs (config_key, config_value, description) VALUES
('hero_title', '🔥 O Maior Portal VIP do Brasil', 'Título principal do hero')
ON CONFLICT (config_key) DO NOTHING;

INSERT INTO public.site_configs (config_key, config_value, description) VALUES
('hero_subtitle', 'OnlyFans & Privacy sem Restrições', 'Subtítulo do hero')
ON CONFLICT (config_key) DO NOTHING;

INSERT INTO public.site_configs (config_key, config_value, description) VALUES
('previas_link', 'https://t.me/SpyConteudos', 'Link do botão de prévias grátis')
ON CONFLICT (config_key) DO NOTHING;