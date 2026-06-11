## Carrossel de depoimentos com autoplay

Vou transformar a grade atual de prints num **carrossel** que passa sozinho e funciona igual em mobile, tablet e desktop.

### Mudanças em `src/routes/index.tsx` — função `Testimonials`

1. **Trocar a grid por um carrossel Embla** usando o componente `Carousel` já existente em `src/components/ui/carousel.tsx`, com o plugin `embla-carousel-autoplay` (já vem com o Embla, sem nova dependência pesada — instalar `embla-carousel-autoplay` via `bun add`).
2. **Slides responsivos**: 1 por vez no mobile, 2 no tablet (`sm`), 3 no desktop (`lg`) — `basis-full sm:basis-1/2 lg:basis-1/3`.
3. **Prints sem corte**: trocar `object-cover` por `object-contain` com altura fixa (`h-[520px]`) e fundo neutro para a imagem caber inteira independente da proporção.
4. **Autoplay**: passa a cada ~3.5s, em loop infinito.
5. **Pausar ao interagir**:
   - hover do mouse → `stopOnMouseEnter: true`
   - clique/toque → `stopOnInteraction: true` (mesmo comportamento no mobile/tablet via touch)
   - retoma sozinho ao sair (`stopOnFocusIn: false`)
6. **Setas** (`CarouselPrevious` / `CarouselNext`) no desktop e **dots** discretos embaixo para feedback de progresso em qualquer tela.
7. Manter título, eyebrow, animação de entrada da seção.

### Dependência
- `bun add embla-carousel-autoplay`

### Arquivos
- editar `src/routes/index.tsx` (apenas a função `Testimonials` + import do plugin)

Sem alterações de backend, design tokens ou outras seções.