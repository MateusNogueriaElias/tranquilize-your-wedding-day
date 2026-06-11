## Substituir seção Solução pela apresentação da Jessika

Vou transformar a seção **Solução** em uma apresentação pessoal da fundadora, usando a foto real da Jessika no lugar da imagem gerada por IA.

### Mudanças

**1. Asset da foto**
- Já criei o pointer `src/assets/jessika.webp.asset.json` (foto real da Jessika).
- Remover `src/assets/solution.jpg` (imagem IA não será mais usada).

**2. Editar `src/routes/index.tsx` — seção Solução**
Substituir o conteúdo atual por:
- **Eyebrow** dourado: `FUNDADORA DA J&M`
- **Título editorial**: *Prazer, eu sou a Jessika.*
- **Bio**:
  > Sou apaixonada por transformar sonhos em experiências inesquecíveis. Meu propósito é garantir que você viva seu casamento com leveza, segurança e emoção.
  >
  > Cada detalhe importa. Cada sorriso conta. E eu estou aqui para cuidar de tudo isso, enquanto você vive o momento mais importante da sua vida.
- **Assinatura** em serif itálico: *Jessika — Fundadora J&M*
- **CTA WhatsApp**: "Falar com a Jessika no WhatsApp" (link `wa.me/5511992772641`)
- **Imagem**: foto real da Jessika (lado esquerdo desktop, topo mobile), com moldura dourada sutil

### Layout
- Mesma grid 2 colunas já existente na seção
- Fundo marfim, paleta preto/dourado mantida
- Animações fade/slide preservadas

### Arquivos
- editar `src/routes/index.tsx` (trocar import `solution.jpg` por `jessika.webp.asset.json` e reescrever copy da seção)
- deletar `src/assets/solution.jpg`
- atualizar `.lovable/plan.md`

Sem mudanças de dependências ou backend.