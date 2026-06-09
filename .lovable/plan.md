# Landing Page J&M Assessoria de Casamentos

Landing page premium em página única, paleta **Preto & Dourado** com fontes **Instrument Serif + Work Sans**, galeria masonry e CTAs direcionados ao WhatsApp **5511992772641**.

## Direção visual

- Paleta: marfim `#faf8f3` (fundo claro), areia `#e8dcc0`, dourado `#c9a861` (acento), preto `#141414` (texto/seções escuras)
- Tipografia: Instrument Serif (títulos editoriais) + Work Sans (corpo)
- Estilo: editorial elegante, alto contraste, fotos grandes, dourado como detalhe (linhas finas, ornamentos sutis, botões)
- Microinterações: fade/slide suaves no scroll (Motion), hover refinado em cards e botões

## Estrutura das seções (ordem ideal)

1. **Hero** — fundo escuro com foto de noiva em bastidores; headline editorial + sub + 2 CTAs (Orçamento WhatsApp / Ver Pacotes)
2. **Dor** — "Você está vivendo o planejamento ou sobrevivendo a ele?" — 6 pontos de identificação em grid sutil
3. **Solução** — bloco com foto à esquerda + copy à direita posicionando a J&M
4. **Benefícios** — 6 cards minimalistas com ícone dourado fino
5. **Pacotes** — 3 cards lado a lado, pacote do meio (Parcial) com selo "Mais escolhido" em dourado
6. **Galeria** — masonry com 8–10 fotos + frases curtas sobrepostas
7. **Como funciona** — timeline horizontal com 5 etapas numeradas em dourado
8. **Diferenciais** — grid 2x3 sobre fundo preto
9. **Depoimentos** — prints reais de WhatsApp das noivas em masonry (placeholder com mock até o cliente enviar)
10. **FAQ** — accordion elegante com 6 perguntas
11. **CTA Final** — seção full-bleed preta com headline emocional + botão WhatsApp grande
12. **Rodapé** — minimalista, dourado sobre preto

## Copy completa

### 1. Hero — 3 opções de título
- A: "Seu casamento merece ser vivido com leveza, não com preocupação."
- B: "Cada detalhe cuidado. Cada momento, seu."
- C: "Para que o único papel dos noivos seja se amar."

Subtítulo: "Assessoria completa de casamentos que transforma o peso dos bastidores em tranquilidade para você viver o seu dia."
CTAs: `Pedir orçamento no WhatsApp` · `Conhecer pacotes`

### 2. Dor
Título: "Planejar um casamento não deveria custar a sua paz."
Itens: medo de imprevistos · falta de tempo · fornecedores desalinhados · prazos e contratos confusos · cansaço emocional · receio do dia não sair como sonhou.

### 3. Solução
"Conheça a J&M — a assessoria que cuida de tudo para que você só precise dizer sim." Parágrafo posicionando como parceira que organiza, antecipa, executa.

### 4. Benefícios (6)
Planejamento sob controle · Menos estresse, mais presença · Fornecedores afinados · Cronograma minuto a minuto · Imprevistos resolvidos antes de chegarem a você · Apoio próximo em cada etapa.

### 5. Pacotes (refinados)

**Essência do Dia** (antes: Assessoria do Dia)
- Sub: "Para quem já planejou tudo e quer viver o grande dia em paz."
- Entregas: coordenação no dia · supervisão de fornecedores · gestão de cronograma · resolução de imprevistos · reunião de alinhamento pré-evento · kit emergência da noiva
- Perfil ideal: casal que já contratou fornecedores e quer uma equipe profissional garantindo a execução
- CTA: `Quero tranquilidade no dia`

**Essência Parcial** ⭐ Mais escolhido (antes: Assessoria Parcial)
- Sub: "Para quem começou o planejamento e precisa de direção profissional para concluir com segurança."
- Entregas: diagnóstico do que já foi feito · curadoria e negociação de fornecedores restantes · 4 reuniões de alinhamento · checklist e cronograma · coordenação completa no dia
- Perfil ideal: noiva que deu os primeiros passos mas percebeu que precisa de estratégia e organização
- CTA: `Quero direcionamento profissional`

**Essência Completa** (antes: Assessoria Completa)
- Sub: "Do primeiro sim ao último brinde — alguém cuidando de tudo, ao seu lado."
- Entregas: planejamento integral · curadoria e gestão completa de fornecedores · controle financeiro · cronograma detalhado · reuniões ilimitadas · apoio emocional · coordenação total no dia · pós-evento
- Perfil ideal: casais que querem acompanhamento total desde o início
- CTA: `Quero a experiência completa`

Diferenciação visual: card central elevado, borda dourada e selo; cards laterais em preto sobre marfim.

### 6. Galeria
Título: "Casamentos que respiraram leveza."
Sub: "Cada foto é uma noiva que viveu o próprio dia — sem carregar o peso dos bastidores."
Frases sobre imagens: "Bastidores no controle." · "Detalhes que emocionam." · "Noivos presentes." · "Cada minuto, planejado."

### 7. Depoimentos
Título: "O que nossas noivas dizem."
Sub: "Mensagens reais, dias depois do sim."
Formato: prints de WhatsApp das conversas (mock inicial — 4 cards estilo print de conversa, dourado/preto, com nome + pacote).

### 8. Como funciona (5 etapas)
1. Primeiro contato · 2. Entendemos seu casamento · 3. Escolha do pacote ideal · 4. Planejamento e alinhamentos · 5. Execução do grande dia.

### 9. Diferenciais
Atendimento humanizado · Olhar para cada detalhe · Rede curada de fornecedores · Presença ativa no dia · Apoio emocional aos noivos · Transformamos preocupação em presença.

### 10. FAQ
6 perguntas conforme briefing, respostas curtas e acolhedoras.

### 11. CTA Final
Título: "Seu casamento merece ser inesquecível — por todos os motivos certos."
Sub: "Fale com a J&M e descubra qual assessoria combina com o seu casamento."
Botão: `Falar no WhatsApp agora`

### 12. Rodapé
J&M Assessoria · "Cuidamos dos bastidores para você viver o seu dia." · WhatsApp 5511992772641 · Instagram @jm.assessoria (placeholder) · CTA repetido.

## Detalhes técnicos

- Stack: TanStack Start v1, Tailwind v4, shadcn/ui, Motion (framer-motion)
- Arquivo único de página: `src/routes/index.tsx` com componentes auxiliares em `src/components/landing/` (Hero, Pain, Solution, Benefits, Packages, Gallery, Process, Differentials, Testimonials, FAQ, FinalCTA, Footer)
- Fontes via `<link>` Google Fonts em `__root.tsx` head + tokens `--font-display` e `--font-sans` em `src/styles.css` (@theme)
- Cores semânticas em `src/styles.css` (`--background`, `--foreground`, `--primary` dourado, `--accent`, etc.)
- WhatsApp link: `https://wa.me/5511992772641?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento`
- Imagens: geradas via imagegen (hero, solução, 8 fotos da galeria, 4 mocks de print de WhatsApp) com estética editorial
- SEO: title "J&M Assessoria de Casamentos | Tranquilidade no seu grande dia", meta description, og:image (hero), JSON-LD LocalBusiness
- Mobile: layout single-column, pacotes em carousel/stack, galeria 2 colunas, CTAs sticky no rodapé mobile
- Microcopy botões: "Pedir orçamento", "Falar no WhatsApp", "Ver pacotes", "Quero saber mais"
- Conversão: 2 CTAs no hero, CTA por pacote, CTA flutuante WhatsApp, CTA final full-bleed, prova social antes do FAQ

## Versão resumida (alternativa direta)
Hero → Benefícios → Pacotes → Depoimentos → FAQ → CTA Final + Rodapé.

## O que NÃO está incluso (pode ser adicionado depois)
- Formulário com backend (Lovable Cloud) — atualmente só WhatsApp; posso adicionar formulário simples que envia via WhatsApp link pré-preenchido
- Prints reais de depoimentos (usarei mockups até receber os reais)
- Logo da marca (uso wordmark tipográfico até receber arquivo)
