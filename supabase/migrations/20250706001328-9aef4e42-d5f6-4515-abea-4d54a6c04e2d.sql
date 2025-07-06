-- Atualizar o link VIP para o novo link que funciona
UPDATE public.site_configs 
SET config_value = 'https://t.me/conteudo_vip_spy_bot', updated_at = now()
WHERE config_key = 'vip_link';