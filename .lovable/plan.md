# Nova seção Galeria — álbuns clicáveis

Vou reformular a seção `#galeria` em `src/routes/index.tsx` para virar uma galeria de **álbuns**, cada um abrindo um lightbox com várias fotos.

## Conteúdo

**Cabeçalho**
- Eyebrow: "Galeria"
- Título: *Eventos que respiraram leveza.*
- Subtítulo: *Cada celebração carrega uma história, um cuidado e uma experiência pensada para ser vivida com tranquilidade.*

**Álbuns (cards de capa)**

Casamentos:
1. Andreia & Lucas
2. Angela & Vinicius
3. Gabriela & Nicholas
4. Gabriela & Pedro
5. Nadine & Flavio
6. Yasmin & Gustavo

Evento especial (destaque sutil — badge dourado "Evento especial"):
7. Milena — 15 anos

## Layout dos cards

- Grid responsivo: 1 col (mobile) · 2 cols (tablet) · 3 cols (desktop)
- Cada card:
  - Capa grande (proporção 4/5, `object-cover`, `loading="lazy"`, WebP)
  - Categoria pequena (eyebrow dourado) acima do nome
  - Nome do evento em fonte display
  - Overlay escuro suave no hover com texto "Ver álbum →"
  - Zoom discreto da imagem no hover, transição elegante
  - Card 7 (Milena) com borda/badge dourado discreto para diferenciar

## Comportamento — Lightbox

Ao clicar num card, abre um **modal** (Dialog do shadcn já instalado) com:
- Header: nome do evento + categoria
- Foto principal grande com setas ‹ › de navegação
- Tira de miniaturas clicáveis abaixo
- Suporte a teclado (← → Esc)
- Swipe no mobile
- Botão fechar (X) visível no canto
- CTA no rodapé: **"Quero uma celebração assim"** → rola para `#contato` (ou WhatsApp, o que vocês preferirem depois)
- Layout responsivo, fundo `bg-ink/90 backdrop-blur`

## Estrutura de dados

```ts
type Album = {
  slug: string;
  title: string;
  category: "Casamento" | "Evento especial";
  cover: string;        // url WebP
  coverAlt: string;
  photos: { src: string; alt: string }[];
};
const albums: Album[] = [ /* 7 álbuns */ ];
```

Tudo num arquivo separado `src/data/albums.ts` para facilitar a manutenção quando as fotos chegarem.

## Imagens (aguardando upload)

- Aceito as fotos quando você enviar (WebP de preferência, ou converto)
- Subo todas via Lovable Assets (CDN, lazy loading nativo)
- Por enquanto deixo placeholders neutros para você ver a estrutura funcionando
- Cada foto recebe `alt` descritivo (ex: "Andreia e Lucas — cerimônia ao ar livre") para SEO

## Acessibilidade & técnico

- Dialog acessível (Radix): foco preso, Esc fecha, `aria-label` no botão de cada card
- `loading="lazy"` + `decoding="async"` em todas as imagens
- Alt text individual por foto
- Sem mudanças de backend, sem novas dependências (Dialog e lucide-react já estão no projeto)

## Arquivos

- `src/routes/index.tsx` — substituir o bloco atual da seção `#galeria`
- `src/data/albums.ts` (novo) — lista de álbuns e fotos
- `src/components/AlbumLightbox.tsx` (novo) — componente do modal com navegação

## Não vou mexer

- Menu, hero, pacotes, depoimentos, bônus, contato — nada disso muda
- Tokens de design e fontes permanecem iguais

Quando aprovar, eu implemento a estrutura com placeholders. Assim que você mandar as fotos, faço o upload e troco as capas + galerias.
