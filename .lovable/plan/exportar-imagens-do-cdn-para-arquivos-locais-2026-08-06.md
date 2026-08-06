# Exportar imagens do CDN para arquivos locais

## Problema
As fotos dos álbuns e depoimentos estão hospedadas no Lovable Assets (CDN). O repositório contém apenas arquivos `.asset.json` — ponteiros JSON com URLs como `/__l5e/assets-v1/...`. Quando você faz download do código, recebe esses ponteiros, mas não os arquivos binários das imagens. O site só exibe as imagens quando publicado/preview no domínio do Lovable.

## Solução
Criar um script de exportação que baixa todas as imagens do CDN, salva nos caminhos corretos dentro de `src/assets/` e converte as importações de `.asset.json` para o caminho da imagem real.

## Passos
1. Criar `scripts/download-assets.ts` (Node/TypeScript) que:
   - Varre todos os arquivos `src/**/*.asset.json`.
   - Lê o campo `url` e monta a URL completa usando o domínio de preview/publicação.
   - Faz download de cada imagem e salva no mesmo diretório, removendo a extensão `.asset.json`.
2. Criar `scripts/rewrite-asset-imports.ts` que:
   - Localiza todos os imports terminados em `.asset.json`.
   - Substitui por imports do arquivo de imagem real.
   - Ajusta o uso: de `import x from "...asset.json"` seguido de `x.url` para `import x from "...webp"` e uso direto de `x`.
3. Rodar os scripts na sandbox para baixar as ~148 imagens e reescrever os imports.
4. Verificar o build (`bun run build`) para garantir que nenhum caminho ficou quebrado.
5. Opcional: adicionar um comando `npm run export-assets` no `package.json` para facilitar execuções futuras.

## Resultado esperado
- Todas as imagens dos álbuns e depoimentos estarão fisicamente em `src/assets/`.
- O download do código passará a incluir os arquivos de imagem.
- O site continuará funcionando normalmente, agora lendo arquivos locais em vez de URLs do CDN.

## Risco / observação
- O repositório ficará maior (~tamanho total das imagens).
- Se novas fotos forem adicionadas depois, será necessário rodar o script novamente.
