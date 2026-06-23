
# Auditoria SEO — J&M Assessoria de Casamentos

> Análise feita sobre o **preview do Lovable** (`id-preview--…lovable.app`). O site **ainda não foi publicado**, então não há indexação real no Google, Search Console, backlinks nem dados de campo (CrUX). O que é possível auditar agora: código-fonte, estrutura, performance teórica e UX. Para dados reais, é preciso publicar (botão **Publish**) ou conectar domínio próprio.

---

## A. Resumo geral

Site institucional single-page (landing) de assessoria de casamentos, bem desenhado visualmente, com tipografia clara (Instrument Serif + Work Sans), hierarquia visual forte e bom uso de imagens. Tecnicamente roda em **TanStack Start** com SSR, o que é ótimo para SEO. Porém, o site é **uma página só** com âncoras (#sobre, #servicos, #faq…) — o que limita muito o potencial de ranquear para múltiplas intenções de busca. Faltam **sitemap.xml**, **robots.txt**, **dados estruturados ricos**, e **otimização de imagens da galeria** (são pesadas). Não está publicado, então não está indexado.

---

## B–F. Pontuações

| Item | Nota | Comentário |
|---|---|---|
| **B. SEO Técnico** | **5,5 / 10** | Boa base (SSR, meta, canonical, JSON-LD básico), mas falta sitemap, robots, schema rico, e estrutura multi-página |
| **C. Performance Desktop** | **7,5 / 10** | SSR + fontes via Google Fonts CDN; galeria com muitas imagens (~233MB no repo, agora no CDN) pode pesar |
| **D. Performance Tablet** | **7,0 / 10** | Igual desktop, mas com mais reflow nas grids |
| **E. Performance Mobile** | **6,0 / 10** | Hero JPG sem `fetchpriority`, várias imagens lazy mas a capa não tem `width/height` explícitos — risco de CLS; carrossel autoplay consome CPU |
| **F. UX** | **8,0 / 10** | Layout limpo, CTAs claros (WhatsApp), boa hierarquia, menu mobile presente |

---

## G. Principais problemas encontrados

1. **Site não publicado** → zero indexação. Bloqueador #1.
2. **Não existe `public/robots.txt`** nem `sitemap.xml` (nem estático nem como rota).
3. **Single-page com âncoras** (#sobre, #servicos, #portfolio, #depoimentos, #faq, #contato) — perde a chance de ranquear cada seção como página própria (ex.: "assessoria de casamento SP", "cerimonialista", "15 anos").
4. **Álbuns do portfólio não têm URL própria** — abrem em lightbox. Páginas tipo `/portfolio/andreia-lucas` seriam ouro pra SEO long-tail ("casamento Andreia e Lucas", "casamento campo SP" etc.).
5. **JSON-LD `LocalBusiness` incompleto** — falta `address`, `image`, `url`, `priceRange`, `openingHours`, `sameAs` (Instagram), `aggregateRating`.
6. **Hero image (`hero.jpg`) sem `fetchpriority="high"` e sem `<link rel="preload">`** — afeta LCP em mobile.
7. **Google Fonts via `<link>` do CDN** no `__root.tsx` — bloqueia render. Melhor self-host via `@fontsource`.
8. **Imagens da galeria** subidas como `.webp` (bom), mas sem `width`/`height` no `<img>` → risco de CLS, e sem `srcset`/`sizes` (mesma imagem grande no mobile).
9. **Carrossel com `Autoplay`** dispara JS antes do necessário — pode afetar INP.
10. **Conteúdo textual escasso** — pouca cópia descritiva por seção; Google tem pouco a indexar. Sem blog/conteúdo.
11. **Alt text repetitivo** nos álbuns (`"título — foto N"`) — perde oportunidade de descrever a cena.
12. **`og:url` e `canonical` relativos (`"/"`)** — aceitável agora (sem domínio), mas precisa virar absoluto após publicar.
13. **Sem favicon customizado, sem `manifest.json`, sem `apple-touch-icon`**.
14. **Sem Open Graph image otimizada** (1200×630) — compartilhamentos no WhatsApp/Insta ficam ruins.
15. **Sem Google Search Console nem Analytics** configurado.

---

## H. Melhorias por prioridade

### Alta prioridade (fazer agora)
- **Publicar o site** e conectar domínio (`.com.br`).
- Criar **`public/robots.txt`** com `Allow: /` + linha `Sitemap:`.
- Criar **`/sitemap.xml`** como rota dinâmica (TanStack Start) listando home + futuras páginas de álbum.
- **Transformar cada álbum em rota própria** (`/portfolio/$slug`) com `head()` com title, description, og:image próprios e JSON-LD `ImageGallery` ou `Event`.
- **Quebrar em páginas reais**: `/sobre`, `/servicos`, `/portfolio`, `/contato`, `/faq` — manter o scroll suave da landing, mas com URLs canônicas.
- Enriquecer **JSON-LD `LocalBusiness`**: endereço, telefone, Instagram (`sameAs`), `image`, `priceRange`, `areaServed` detalhado (cidades).
- **Preload + `fetchpriority="high"`** no hero; `width`/`height` em todas imagens.
- Configurar **Google Search Console** e **Google Analytics 4** após publicar.

### Média prioridade
- Self-hostar fontes via `@fontsource/instrument-serif` e `@fontsource/work-sans`.
- Gerar **OG image** 1200×630 com identidade visual (Lovable consegue).
- Gerar `srcset`/`sizes` para imagens grandes (hero + capas de álbum).
- Adicionar **favicon, apple-touch-icon e manifest.json**.
- Reescrever **alt text** dos álbuns com descrição real ("Noivos se beijando no altar ao ar livre, casamento Andreia e Lucas").
- Adicionar **FAQPage JSON-LD** na seção FAQ (já tem o conteúdo, só falta marcar).
- Adicionar **BreadcrumbList JSON-LD** nas páginas internas (quando existirem).
- Conteúdo: 2–3 parágrafos extras em **Sobre** e **Serviços** com palavras-chave naturais ("assessoria de casamento", "cerimonialista", "wedding planner [cidade]").

### Baixa prioridade
- Iniciar **blog** (`/blog`) com posts tipo "Como escolher o buffet", "Cronograma de casamento 12 meses" — tráfego orgânico de cauda longa.
- Adicionar **microdados Review/aggregateRating** se houver avaliações Google.
- Lazy-import do carrossel Embla para reduzir JS inicial.
- Comprimir imagens de portfólio para < 200 KB cada (target).
- Vídeo curto na home (`<video>` com `preload="none"` e poster).

---

## I. Plano de ação — próximos 30 dias

**Semana 1 — Fundação técnica**
- [ ] Publicar o site e conectar domínio próprio.
- [ ] Criar `robots.txt` + `sitemap.xml` (rota dinâmica).
- [ ] Atualizar `canonical` e `og:url` para URL absoluta.
- [ ] Verificar propriedade no **Google Search Console** + submeter sitemap.
- [ ] Instalar **GA4**.

**Semana 2 — Arquitetura de páginas**
- [ ] Criar rotas: `/sobre`, `/servicos`, `/portfolio`, `/portfolio/$slug`, `/contato`, `/faq`.
- [ ] `head()` único por página (title, description, og).
- [ ] Manter home como landing-resumo com links pras páginas.

**Semana 3 — Schema + conteúdo**
- [ ] LocalBusiness JSON-LD completo.
- [ ] FAQPage JSON-LD.
- [ ] ImageGallery JSON-LD nos álbuns.
- [ ] Escrever copy extra para Sobre, Serviços e cada álbum (mínimo 150 palavras por página).

**Semana 4 — Performance + UX**
- [ ] Self-host fontes.
- [ ] Preload hero + `fetchpriority`.
- [ ] `width/height` em todas imagens.
- [ ] Gerar `srcset` para hero e capas.
- [ ] OG image 1200×630.
- [ ] Rodar **PageSpeed Insights** e **Lighthouse** (mobile e desktop), iterar até verde nos Core Web Vitals.

---

## J. Checklist técnico final

**Indexação**
- [ ] Site publicado em domínio próprio (HTTPS)
- [ ] `robots.txt` permitindo crawl + linha `Sitemap:`
- [ ] `sitemap.xml` acessível em `/sitemap.xml`
- [ ] Search Console verificado e sitemap submetido
- [ ] Nenhuma página retornando 404 (testar com Screaming Frog)

**Head / meta**
- [ ] `<title>` único por rota (50–60 chars)
- [ ] `<meta description>` única por rota (140–160 chars)
- [ ] `<link rel="canonical">` absoluto em cada rota
- [ ] `og:title`, `og:description`, `og:url`, `og:image` (1200×630) em cada rota
- [ ] `twitter:card = summary_large_image`

**Dados estruturados**
- [ ] `LocalBusiness` completo no root
- [ ] `FAQPage` no FAQ
- [ ] `ImageGallery` nas páginas de álbum
- [ ] `BreadcrumbList` nas páginas internas
- [ ] Validar em [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

**Performance / CWV**
- [ ] LCP < 2,5s mobile (hero preload + fetchpriority)
- [ ] CLS < 0,1 (width/height em todas imagens)
- [ ] INP < 200ms (lazy-import de carrossel pesado)
- [ ] Fontes self-hosted com `font-display: swap`
- [ ] Imagens em WebP/AVIF com `srcset`/`sizes`
- [ ] `loading="lazy"` em tudo abaixo da dobra (✅ já tem)

**Mobile-first**
- [ ] Viewport meta (✅ já tem)
- [ ] Botões com área ≥ 44×44px
- [ ] Sem pop-ups intersticiais
- [ ] Texto mínimo 16px no body

**UX / conversão**
- [ ] CTA WhatsApp visível no header e no fim de cada seção (✅ já tem)
- [ ] Formulário de contato como alternativa ao WhatsApp
- [ ] Selos / credenciais visíveis
- [ ] Depoimentos com foto e nome real (✅ já tem)

---

## Dados que faltam (e como obter)

| Informação | Como verificar |
|---|---|
| Indexação real, impressões, cliques, queries | **Google Search Console** após publicar e verificar domínio |
| Core Web Vitals de campo (CrUX) | **PageSpeed Insights** (`pagespeed.web.dev`) após publicar |
| Performance lab (LCP/CLS/INP simulados) | **Lighthouse** (DevTools) ou PSI |
| Erros 404, redirecionamentos, links quebrados | **Screaming Frog SEO Spider** (free até 500 URLs) |
| Backlinks, autoridade de domínio | **Semrush** (já integrado aqui) ou **Ahrefs** |
| Palavras-chave atuais e dos concorrentes | **Semrush** → `domain_analysis` + `competitive_analysis` |
| Volume de busca por keyword | **Semrush** → `keyword_research` ou Google Keyword Planner |

---

**Próximo passo sugerido:** aprovar este plano para eu começar pela **Semana 1** (robots.txt + sitemap.xml dinâmico + JSON-LD completo + preparar pra publicação). Depois disso a gente publica, conecta no Search Console e ataca a arquitetura de páginas.
