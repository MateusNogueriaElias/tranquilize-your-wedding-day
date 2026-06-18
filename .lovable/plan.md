## Objetivo

Redesenhar a seção `AppBonus` ("Bônus Exclusivo") com o layout e conteúdo solicitados pelo usuário.

## Layout solicitado

```text
+----------------------------------------------------------+
|  [EYEBROW: BÔNUS EXCLUSIVO]                              |
|                                                          |
|  +------------------------+  +-------------------------+ |
|  | Título                 |  |                         | |
|  | "A J&M organiza.       |  |   [Mockup de celular    | |
|  |  Vocês acompanham     |  |    com app de          | |
|  |  tudo com             |  |    planejamento]        | |
|  |  tranquilidade."     |  |                         | |
|  |                        |  |                         | |
|  | Texto curto            |  |                         | |
|  |                        |  |                         | |
|  | [Botão CTA]            |  |                         | |
|  +------------------------+  +-------------------------+ |
|                                                          |
|  +-----------+ +-----------+ +-----------+ +-----------+ |
|  | Ícone     | | Ícone     | | Ícone     | | Ícone     | |
|  | Tarefas   | | Fornece-  | | Organiza- | | Tranqui-  | |
|  | e prazos  | | dores     | | ção       | | lidade    | |
|  +-----------+ +-----------+ +-----------+ +-----------+ |
+----------------------------------------------------------+
```

## Mudanças

### 1. Imagem do mockup

- Gerar imagem de celular com app de planejamento de casamento.
- Converter para asset Lovable (`lovable-assets create`) e remover o arquivo JPG original.

### 2. Redesenho da função `AppBonus` em `src/routes/index.tsx`

**Coluna da esquerda:**
- Eyebrow: "BÔNUS EXCLUSIVO" (estilo `.eyebow` existente)
- Título: "A J&M organiza. Vocês acompanham tudo com tranquilidade."
- Parágrafo curto com o texto sobre a plataforma de planejamento
- Botão CTA para WhatsApp (mesmo estilo dos outros CTAs do site)

**Coluna da direita:**
- Imagem do mockup de celular, com sombra sutil e leve rotação para dar profundidade

**4 cards abaixo (grid 2x2 no mobile, 4 colunas no desktop):**
1. **Tarefas e prazos** — "Acompanhem cada etapa do planejamento."
2. **Fornecedores** — "Centralizem contatos, decisões e alinhamentos."
3. **Organização completa** — "Tudo em um só lugar, com mais clareza."
4. **Tranquilidade para o casal** — "Menos preocupação e mais segurança até o grande dia."

Cada card terá:
- Ícone (do `lucide-react`, escolhido para fazer sentido com o texto)
- Título em negrito
- Descrição curta

### 3. Animações

- Animação de entrada `fadeUp` (já existente no projeto) para a seção toda e para os cards com stagger.

### 4. Responsividade

- Mobile: colunas empilham (texto em cima, imagem embaixo), cards em grid 2x2
- Tablet/Desktop: duas colunas lado a lado, cards em grid 4 colunas

## Arquivos alterados

- `src/routes/index.tsx` — função `AppBonus` reescrita
- `src/assets/app-mockup.jpg.asset.json` — novo asset pointer
- `src/assets/app-mockup.jpg` — removido após upload

## Sem mudanças em

- Design tokens (cores, fontes)
- Outras seções do site
- Backend / lógica de dados