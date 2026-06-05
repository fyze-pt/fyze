# Backlog

## Páginas / LPs

- [ ] **LP `/restauracao` (subdomínio `restauracao.fyze.pt`)**
  Copy já está no Notion. Construir como variante de `/criacao-de-websites` adaptada ao setor de restauração:
  - Hero/dores específicas do segmento (reservas, Glovo/Uber Eats, sazonalidade)
  - Cases filtrados: Boteco Dona Luzia, Teixeira Wine Bar, Patacas Bar, Oporto Tavern, Suyori
  - Reusar `SiteFormModal` com `variant="restauracao-lp"`
  - Subdomínio DNS já apontado pra Vercel; falta criar a rota e o conteúdo

## Pendências de conteúdo

- [ ] **Bastidores na `/sobre`** — hoje a seção usa imagens dos cases (CharruaFit, Teixeira, Oporto) como placeholders. Substituir por fotos reais da equipa Fyze (bastidores, gravações, reuniões, produção, edição) quando estiverem disponíveis. Editar `BASTIDORES_IMAGES` em `src/components/sobre/Bastidores.tsx`.
- [ ] **Imagens dos cases em `/sites/[slug]` e cards de `/criacao-de-websites`** — as imagens atuais foram extraídas das seções Website do Notion mas algumas podem não ser as melhores representações do site (especialmente Desentuup, cujos PNGs originais eram pequenos). Revisar e substituir por screenshots reais de melhor qualidade quando possível. Hero/gallery configuradas em `src/data/websites-cases.ts`. Imagens disponíveis em `public/notion/<cliente>-ok/` — usar `scripts/optimize-websites-cases.ts` pra reotimizar.
- [ ] **Revisão geral** das páginas novas (`/diagnostico`, `/metodo`, `/sobre`, `/sites/[slug]`) — passar com olhos frescos: copy, hierarquia visual, espaçamentos, mobile, transições entre seções. Idealmente revisar com alguém de fora.
- [ ] **Nova aba "Diagnóstico" no Apps Script** do Google Sheets — o form em `/diagnostico` envia com `formulario: "Diagnóstico"` para a mesma URL. Confirmar se o Apps Script atual já cria/usa essa aba ou se precisa atualizar a planilha.

## Marketing / Tracking

- [ ] **Validar key events do GA4** — confirmar que `form_submit` e `whatsapp_click` (marcados como key events em 2026-04-30) estão contabilizando conversões reais. Caminho: GA4 → Reports → Engagement → Conversions, ~24-48h após o setup. Se não aparecer, conferir se os eventos chegaram em "Recent events" e foram estrelados corretamente.
- [ ] **Configurar Google Ads** quando a conta estiver criada:
  - Vincular GA4 ↔ Google Ads (GA4 Admin → Product Links → Google Ads)
  - Importar `form_submit` e `whatsapp_click` como conversões em Google Ads (Tools → Conversions → Import → from GA4)
  - Verificar Consent Mode v2 está enviando consent signals corretos (já implementado no código)
- [ ] **Meta Pixel** (quando criar conta Business): adicionar env `NEXT_PUBLIC_META_PIXEL_ID` na Vercel, redeploy. Código já preparado em `Analytics.tsx` (gated por consent).
- [ ] **Vincular GA4 ↔ Search Console** (5 min, sem código) pra ver dados de busca orgânica dentro do GA4.

## Melhorias técnicas

- [ ] Migrar submissão do form (`NEXT_PUBLIC_GOOGLE_SHEETS_URL`) para uma API route do Next.js para que a URL do Apps Script não fique exposta no client. Não é urgente — risco prático é baixo (endpoint só faz `doPost`, não vaza dados).
- [ ] Remover registro TXT `"1|www.fyze.pt"` do OVH (era da verificação do GitHub Pages, agora obsoleto).
- [ ] Adicionar botão "Gerir cookies" no footer (hoje, pra mudar consent depois de ter escolhido, o usuário precisa limpar localStorage manualmente).
