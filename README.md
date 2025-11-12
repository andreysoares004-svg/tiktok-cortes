
# TikTok Cortes — Modern site (Netlify-ready)

**O que este pacote contém**:
- React app (pasta `src/`) com design claro e chamativo
- `public/content.html` — página premium com um vídeo exemplo (YouTube)
- Netlify Functions (`netlify/functions/`) para criar e checar pagamentos via Mercado Pago PIX
- `netlify.toml` pronto para publicar no Netlify

**IMPORTANTE — VARIÁVEL DE AMBIENTE**:
Antes de publicar, configure no Netlify a variável de ambiente (Site settings → Build & deploy → Environment):
- `MP_ACCESS_TOKEN` = seu Access Token de produção do Mercado Pago (ex: APP_USR-...)

**Publicar no Netlify (resumo)**:
1. Faça login em https://app.netlify.com
2. Crie um novo site → 'New site from Git' (recomendado) ou arraste o ZIP para Netlify Drop
3. Se usar Git, o Netlify fará `npm run build`. Se usar Drop, após deploy configure a variável `MP_ACCESS_TOKEN` nas settings.
4. Teste o checkout: insira nome e clique em 'Pagar com PIX' — o QR aparecerá e, após confirmação do pagamento, o usuário será redirecionado automaticamente para `/content.html`.

**Substituir materiais**:
- Coloque seus arquivos reais na pasta `public/downloads/` (substitua `pack-templates.zip`)

**Aviso de segurança**:
- Nunca compartilhe seu `MP_ACCESS_TOKEN` publicamente. Use as Environment Variables do Netlify para protegê-lo.
- Em produção, considere usar webhooks do Mercado Pago para maior confiabilidade (opcional).

Boa publicação!
