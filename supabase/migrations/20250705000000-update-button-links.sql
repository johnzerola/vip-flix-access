
-- Atualizar os links dos botões para os corretos
UPDATE public.site_configs 
SET config_value = 'https://t.me/conteudo_vip_spy_bot', updated_at = now()
WHERE config_key = 'vip_link';

UPDATE public.site_configs 
SET config_value = 'https://t.me/SpyConteudos', updated_at = now()
WHERE config_key = 'preview_link';
