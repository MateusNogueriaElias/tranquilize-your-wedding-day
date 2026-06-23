# Como enviar as fotos por álbum

Não precisamos criar pastas físicas no código — as fotos vão para o CDN da Lovable (mais rápido, sem pesar o repositório). Cada foto vira um arquivo `.asset.json` pequeno, organizado logicamente por álbum em `src/assets/albums/<slug>/`.

## Estrutura lógica (criada automaticamente conforme os uploads)

```
src/assets/albums/
├── andreia-lucas/
├── angela-vinicius/
├── gabriela-nicholas/
├── gabriela-pedro/
├── nadine-flavio/
├── yasmin-gustavo/
└── milena-15-anos/
```

## Como mandar as fotos

**Anexa as fotos aqui no chat**, uma mensagem por álbum, dizendo de qual evento são. Exemplo:

> "Fotos da **Andreia & Lucas**" + arrasta as fotos

A cada mensagem eu:
1. Subo as fotos para o CDN dentro de `src/assets/albums/<slug>/`
2. Atualizo `src/data/albums.ts` trocando os placeholders pelas fotos reais
3. Coloco `alt` descritivo em cada foto (SEO + acessibilidade)

## Limites e dicas

- **Limite do chat**: 10 fotos por mensagem, 20MB cada. Se um álbum tiver mais de 10, manda em mensagens seguidas dizendo "continuação do álbum X".
- **Formato**: JPG ou WEBP, qualquer um funciona.
- **Capa**: indique qual é a capa, ou eu escolho a mais forte. Capas em **retrato (vertical)** ficam melhor — o layout é 4:5.
- **Quantidade ideal**: 6 a 12 fotos por álbum.
- **Ordem**: numere os arquivos (01_, 02_…) se quiser ordem específica.

## O que não muda

Componente `Gallery`, `AlbumLightbox`, design tokens, demais seções — tudo continua igual. Só os imports de placeholder no `src/data/albums.ts` são substituídos.

---

**Sugestão**: comece mandando **um álbum** só (ex: Andreia & Lucas) pra você ver como fica, depois manda o resto.
