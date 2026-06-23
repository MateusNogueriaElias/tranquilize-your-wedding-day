# Como enviar as fotos por álbum

Boa notícia: **não precisamos criar pastas físicas no código**. As fotos são enviadas para o CDN da Lovable (mais rápido, sem inchar o repositório) e cada uma vira um arquivo pequeno `.asset.json` que aponta para a imagem.

Mas vamos sim **organizar logicamente por álbum** dentro de `src/assets/albums/<slug-do-album>/` — assim fica fácil saber quais fotos pertencem a cada evento.

## Estrutura que vou criar

```
src/assets/albums/
├── andreia-lucas/        → fotos de Andreia & Lucas
├── angela-vinicius/      → fotos de Angela & Vinicius
├── gabriela-nicholas/    → fotos de Gabriela & Nicholas
├── gabriela-pedro/       → fotos de Gabriela & Pedro
├── nadine-flavio/        → fotos de Nadine & Flavio
├── yasmin-gustavo/       → fotos de Yasmin & Gustavo
└── milena-15-anos/       → fotos do 15 anos da Milena
```

## Como você manda as fotos

A maneira mais simples: **mande aqui no chat, álbum por álbum**, em mensagens separadas, mais ou menos assim:

> "Essas são da **Andreia & Lucas**" + arrasta/anexa as fotos da Andreia
> (próxima mensagem) "Essas são da **Angela & Vinicius**" + anexa…

Pode mandar várias fotos por mensagem (limite de 10 por mensagem, até 20MB cada). Se um álbum tiver mais de 10 fotos, manda em duas mensagens dizendo "continuação do álbum X".

A cada mensagem eu:
1. Subo as fotos para o CDN dentro de `src/assets/albums/<album>/`
2. Atualizo o `src/data/albums.ts` para usar as fotos reais (capa + galeria) no lugar dos placeholders
3. Defino um `alt` descritivo para cada foto (SEO + acessibilidade)

## Dicas para as fotos

- **Formato**: JPG ou WEBP, ambos funcionam (WEBP é mais leve, mas eu otimizo no CDN de qualquer jeito)
- **Capa**: indique qual foto é a capa do álbum (ou eu escolho a mais forte). Capas funcionam melhor em formato **retrato (vertical)** — o layout é 4:5
- **Quantidade**: 6 a 12 fotos por álbum é o ideal para o lightbox; mais que isso fica cansativo
- **Ordem**: se quiser uma ordem específica (ex: cerimônia → festa → bastidores), numere os arquivos (01_, 02_…) ou me diga na mensagem

## O que NÃO muda

- A estrutura do componente `Gallery` e o `AlbumLightbox` continuam iguais
- Só troco os imports de placeholder (`g1`–`g8`) pelas fotos reais no `src/data/albums.ts`
- Nenhuma outra seção do site é alterada

---

**Pode começar a mandar quando aprovar este plano.** Sugestão: comece por **um álbum** só, pra você ver o resultado, e depois manda o resto.
