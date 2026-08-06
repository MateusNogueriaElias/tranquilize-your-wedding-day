# Remover pasta aninhada `tranquilize-your-wedding-day`

## Objetivo
Eliminar a cópia duplicada do projeto localizada dentro de si mesma, evitando confusão de arquivos e possíveis problemas de build.

## Passos
1. Listar o conteúdo da pasta aninhada para confirmar que é redundante.
2. Comparar arquivos-chave (package.json, src/routes/index.tsx) com a raiz do projeto.
3. Remover a pasta `tranquilize-your-wedding-day/` inteira.
4. Verificar se a raiz do projeto continua intacta e se o build/dev funciona normalmente.

## Resultado esperado
Estrutura de arquivos limpa, sem duplicatas, e preview/dev server funcionando corretamente.
