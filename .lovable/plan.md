Ajustar o menu da landing page para ficar fixo no topo e responsivo em tablet/celular.

## O que será feito

1. **Header fixo (sticky/fixed)**
   - Trocar `absolute` por `fixed` no `<header>` do Nav
   - Adicionar backdrop blur e transição de cor de fundo ao scrollar (de transparente para um tom escuro/opaco)
   - Usar um listener de scroll (useState/useEffect) para ativar o fundo quando sair do hero
   - Manter a z-index alta para não ser sobreposto

2. **Menu hambúrguer para mobile e tablet**
   - Esconder os links de navegação em telas menores que `md`
   - Adicionar um botão de menu hambúrguer (ícone do lucide-react, ex: `Menu` e `X`) visível apenas em mobile/tablet (`md:hidden`)
   - Ao clicar, abrir um painel/dropdown com os links empilhados
   - O painel terá fundo escuro (`bg-ink/95 backdrop-blur`), links em texto ivory, e animação simples de fade/slide
   - Fechar o menu automaticamente ao clicar em um link

3. **Ajustes de layout**
   - Ajustar o padding-top do Hero ou o posicionamento do conteúdo para não ficar escondido atrás do header fixo
   - Manter o botão "Orçamento" visível no desktop; no mobile, ele pode aparecer dentro do menu ou ser removido dependendo do espaço
   - Garantir que o logo J&M permaneça visível e alinhado em todos os breakpoints

4. **Responsividade garantida**
   - `sm` e abaixo: apenas logo + hambúrguer
   - `md` e acima: logo + links alinhados + botão Orçamento
   - Transições suaves de cor e opacidade no header

## Arquivos alterados
- `src/routes/index.tsx` — reescrever o componente `Nav`

## Não será alterado
- Nenhuma outra seção da página
- Nenhuma dependência nova (usa lucide-react já instalado)
- Nenhum arquivo de estilo global