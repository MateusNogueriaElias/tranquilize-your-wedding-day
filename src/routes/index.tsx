import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Calendar,
  HeartHandshake,
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  Users,
  Clock,
  MessageCircle,
  Camera as Instagram,
  MapPin,
  Plus,
  Minus,
  Check,
  Star,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import jessikaAsset from "@/assets/jessika.webp.asset.json";
const jessika = jessikaAsset.url;
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import depo1 from "@/assets/depo1.jpg.asset.json";
import depo2 from "@/assets/depo2.jpg.asset.json";
import depo3 from "@/assets/depo3.jpg.asset.json";
import depo4 from "@/assets/depo4.jpg.asset.json";
import depo5 from "@/assets/depo5.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "J&M Assessoria de Casamentos | Tranquilidade no seu grande dia" },
      { name: "description", content: "Assessoria completa de casamentos. Cuidamos dos bastidores para você viver o seu grande dia com leveza. Peça seu orçamento pelo WhatsApp." },
      { property: "og:title", content: "J&M Assessoria de Casamentos" },
      { property: "og:description", content: "Cuidamos dos bastidores para você viver o seu dia." },
      { property: "og:image", content: hero },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "J&M Assessoria de Casamentos",
          description: "Assessoria completa de casamentos e eventos.",
          telephone: "+5511992772641",
          areaServed: "BR",
        }),
      },
    ],
  }),
  component: Landing,
});

const WHATSAPP =
  "https://wa.me/5511992772641?text=Ol%C3%A1%20J%26M%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20assessoria%20para%20o%20meu%20casamento.";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Pain />
      <Solution />
      <Benefits />
      <Packages />
      <Gallery />
      <Process />
      <Differentials />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="font-display text-2xl tracking-wide text-ivory">
          J<span className="text-gold">&amp;</span>M
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-ivory/80 md:flex">
          <a href="#pacotes" className="hover:text-gold transition-colors">Pacotes</a>
          <a href="#galeria" className="hover:text-gold transition-colors">Galeria</a>
          <a href="#processo" className="hover:text-gold transition-colors">Como funciona</a>
          <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden border border-gold/60 px-5 py-2 text-xs uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-gold hover:text-ink md:inline-block"
        >
          Orçamento
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-ink">
      <img
        src={hero}
        alt="Noiva em momento sereno no pôr do sol"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />

      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-32 md:px-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <span className="eyebrow">Assessoria de Casamentos</span>
          <span className="gold-divider ml-4 align-middle" />
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-[5.5rem]">
            Seu casamento merece ser{" "}
            <em className="text-gold">vivido com leveza</em>,
            <br className="hidden md:block" /> não com preocupação.
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-ivory/80 md:text-lg">
            Assessoria completa que transforma o peso dos bastidores em
            tranquilidade — para que você só precise dizer sim, dançar e se
            emocionar.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs uppercase tracking-[0.28em] text-ink transition-all hover:bg-ivory"
            >
              Pedir orçamento <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="#pacotes"
              className="inline-flex items-center justify-center border border-ivory/30 px-8 py-4 text-xs uppercase tracking-[0.28em] text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Conhecer pacotes
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pain() {
  const pains = [
    "Medo de imprevistos no grande dia",
    "Falta de tempo para organizar tudo",
    "Fornecedores que não conversam entre si",
    "Prazos, contratos e cronogramas confusos",
    "Cansaço emocional ao longo do planejamento",
    "Receio de que algo saia do que você sonhou",
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-3xl">
          <span className="eyebrow">A verdade</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Planejar um casamento não deveria{" "}
            <em className="text-gold">custar a sua paz.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A noiva carrega dezenas de decisões, fornecedores e expectativas. No
            fim, o que era para ser o dia mais feliz vira o mais cansativo. Se
            algum desses pontos parece familiar, você está no lugar certo.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {pains.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-4 bg-background p-8"
            >
              <span className="font-display text-2xl text-gold">0{i + 1}</span>
              <p className="text-base font-light leading-relaxed text-foreground/90">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="bg-ink py-24 text-ivory md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img
            src={jessika}
            alt="Jessika, fundadora da J&M Assessoria"
            loading="lazy"
            width={1200}
            height={1400}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/30" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col justify-center">
          <span className="eyebrow">Fundadora da J&amp;M</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Prazer, eu sou a <em className="text-gold">Jessika</em>.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-ivory/75 md:text-lg">
            Sou apaixonada por transformar sonhos em experiências inesquecíveis.
            Meu propósito é garantir que você viva seu casamento com
            <em className="text-gold"> leveza, segurança e emoção</em>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ivory/75 md:text-lg">
            Cada detalhe importa. Cada sorriso conta. E eu estou aqui para
            cuidar de tudo isso, enquanto você vive o momento mais importante
            da sua vida.
          </p>
          <p className="mt-8 font-display text-xl italic text-gold">
            Jessika — Fundadora J&amp;M
          </p>
          <div className="mt-10">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs uppercase tracking-[0.28em] text-ink transition-all hover:bg-ivory"
            >
              Falar com a Jessika no WhatsApp <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-gold">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/60">{label}</div>
    </div>
  );
}

function Benefits() {
  const items = [
    { icon: ClipboardCheck, title: "Planejamento sob controle", desc: "Cada etapa documentada, revisada e dentro do prazo — sem brechas para o caos." },
    { icon: HeartHandshake, title: "Menos estresse, mais presença", desc: "Você decide o que importa. A gente carrega o resto, com leveza." },
    { icon: Users, title: "Fornecedores afinados", desc: "Curadoria e alinhamento entre todos os parceiros para que tudo flua como deve." },
    { icon: Calendar, title: "Cronograma minuto a minuto", desc: "Roteiro do dia ensaiado e compartilhado com cada profissional envolvido." },
    { icon: ShieldCheck, title: "Imprevistos resolvidos antes de chegarem a você", desc: "Nossa equipe antecipa, contorna e protege seu dia em silêncio." },
    { icon: Sparkles, title: "Apoio próximo em cada etapa", desc: "Atendimento humano, atento e disponível — do primeiro 'oi' ao último brinde." },
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <span className="eyebrow">Benefícios</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            O que muda quando a <em className="text-gold">J&amp;M</em> está com você.
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-background p-10 transition-colors hover:bg-sand/30"
            >
              <Icon className="h-7 w-7 stroke-[1.2] text-gold" />
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const packages = [
    {
      name: "Essência do Dia",
      sub: "Para quem já planejou tudo e quer viver o grande dia em paz.",
      desc: "Você organizou cada detalhe. Agora, deixe que a nossa equipe execute — para que você apenas viva.",
      highlight: false,
      includes: [
        "Coordenação completa no dia do evento",
        "Supervisão de todos os fornecedores",
        "Gestão minuciosa do cronograma",
        "Resolução discreta de imprevistos",
        "Reunião de alinhamento pré-evento",
        "Kit emergência da noiva",
      ],
      ideal: "Casais que já contrataram fornecedores e querem profissionais garantindo cada minuto.",
      cta: "Quero tranquilidade no dia",
    },
    {
      name: "Essência Parcial",
      sub: "Para quem começou e precisa de direção profissional para concluir com segurança.",
      desc: "Você deu os primeiros passos — a gente assume o leme e leva o planejamento ao porto seguro.",
      highlight: true,
      includes: [
        "Diagnóstico completo do planejamento atual",
        "Curadoria e negociação dos fornecedores restantes",
        "4 reuniões de alinhamento estratégico",
        "Checklist e cronograma personalizados",
        "Coordenação completa no dia do evento",
        "Suporte por WhatsApp em horário comercial",
      ],
      ideal: "Noivas que já começaram, mas perceberam que precisam de estratégia e organização.",
      cta: "Quero direcionamento profissional",
    },
    {
      name: "Essência Completa",
      sub: "Do primeiro sim ao último brinde — alguém cuidando de tudo, ao seu lado.",
      desc: "A experiência completa: somos a sua dupla criativa, executiva e emocional do início ao fim.",
      highlight: false,
      includes: [
        "Planejamento integral do casamento",
        "Curadoria e gestão de todos os fornecedores",
        "Controle financeiro e contratos",
        "Cronograma detalhado em todas as fases",
        "Reuniões ilimitadas com a noiva",
        "Apoio emocional dedicado",
        "Coordenação total no dia + pós-evento",
      ],
      ideal: "Casais que querem acompanhamento total desde o início, com mãos profissionais em cada decisão.",
      cta: "Quero a experiência completa",
    },
  ];

  return (
    <section id="pacotes" className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pacotes</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Três formas de viver o seu dia <em className="text-gold">sem peso.</em>
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Cada pacote foi desenhado para um momento diferente da noiva. Escolha
            o que combina com você — ou fale com a gente e descobrimos juntos.
          </p>
        </motion.div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-4">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={
                p.highlight
                  ? "relative flex flex-col bg-ink p-10 text-ivory shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)] lg:-my-6 lg:p-12"
                  : "relative flex flex-col border border-border bg-background p-10"
              }
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-ink">
                  Mais escolhido
                </div>
              )}
              <h3 className={`font-display text-3xl ${p.highlight ? "text-ivory" : ""}`}>
                {p.name}
              </h3>
              <p className="mt-3 text-sm italic text-gold">{p.sub}</p>
              <p className={`mt-4 text-sm leading-relaxed ${p.highlight ? "text-ivory/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>

              <div className={`my-6 h-px ${p.highlight ? "bg-ivory/15" : "bg-border"}`} />

              <ul className="space-y-3">
                {p.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className={p.highlight ? "text-ivory/85" : "text-foreground/85"}>{inc}</span>
                  </li>
                ))}
              </ul>

              <div className={`mt-6 border-t pt-4 text-xs ${p.highlight ? "border-ivory/15 text-ivory/60" : "border-border text-muted-foreground"}`}>
                <span className="uppercase tracking-[0.2em] text-gold">Ideal para </span>
                <p className="mt-2 leading-relaxed">{p.ideal}</p>
              </div>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className={
                  p.highlight
                    ? "mt-8 inline-flex items-center justify-center bg-gold px-6 py-4 text-xs uppercase tracking-[0.28em] text-ink transition-colors hover:bg-ivory"
                    : "mt-8 inline-flex items-center justify-center border border-ink px-6 py-4 text-xs uppercase tracking-[0.28em] text-ink transition-colors hover:bg-ink hover:text-ivory"
                }
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const photos = [
    { src: g1, alt: "Cerimônia elegante com velas", caption: "Cada minuto, planejado." },
    { src: g4, alt: "Buquê da noiva", caption: "Detalhes que emocionam." },
    { src: g3, alt: "Noivos felizes", caption: "Noivos presentes." },
    { src: g2, alt: "Mesa de jantar elegante", caption: null },
    { src: g6, alt: "Bastidores da noiva", caption: "Bastidores no controle." },
    { src: g5, alt: "Salão de recepção", caption: null },
    { src: g7, alt: "Alianças sobre bandeja", caption: null },
    { src: g8, alt: "Primeira dança", caption: "Para sempre começa aqui." },
  ];
  return (
    <section id="galeria" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <span className="eyebrow">Galeria</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Casamentos que <em className="text-gold">respiraram leveza.</em>
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Cada foto é uma noiva que viveu o próprio dia — sem carregar o peso
            dos bastidores.
          </p>
        </motion.div>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {photos.map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative break-inside-avoid overflow-hidden"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              {p.caption && (
                <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-display text-xl italic text-ivory">{p.caption}</span>
                </figcaption>
              )}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Primeiro contato", d: "Você fala com a gente pelo WhatsApp e contamos como podemos ajudar." },
    { n: "02", t: "Entendemos seu casamento", d: "Reunião para conhecer seu sonho, estilo, datas e prioridades." },
    { n: "03", t: "Escolha do pacote ideal", d: "Recomendamos o formato que mais combina com o seu momento." },
    { n: "04", t: "Planejamento & alinhamentos", d: "Cronograma, fornecedores, contratos e reuniões periódicas." },
    { n: "05", t: "O grande dia", d: "Coordenamos cada minuto enquanto você apenas vive — e se emociona." },
  ];
  return (
    <section id="processo" className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Contratar a J&amp;M é <em className="text-gold">simples e seguro.</em>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <div className="font-display text-5xl text-gold">{s.n}</div>
              <div className="mt-3 h-px w-12 bg-ink" />
              <h3 className="mt-4 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    "Atendimento próximo e humanizado",
    "Olhar atento para cada detalhe",
    "Rede curada de fornecedores confiáveis",
    "Presença ativa no dia do evento",
    "Apoio emocional aos noivos",
    "Transformamos preocupação em presença",
  ];
  return (
    <section className="bg-ink py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Por que noivas escolhem a <em className="text-gold">J&amp;M.</em>
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-px bg-ivory/10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => (
            <motion.div
              key={d}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-4 bg-ink p-8"
            >
              <Sparkles className="mt-1 h-5 w-5 shrink-0 stroke-[1.2] text-gold" />
              <p className="font-display text-xl">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  const prints = [
    { src: depo1.url, name: "Gabriela" },
    { src: depo2.url, name: "Gabriela" },
    { src: depo3.url, name: "Elaine — Milena" },
    { src: depo4.url, name: "Ana & Bruno" },
    { src: depo5.url, name: "Carol & Leandro" },
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            O que as nossas <em className="text-gold">noivas dizem.</em>
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Mensagens reais que recebemos no WhatsApp, dias depois do sim.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prints.map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="overflow-hidden border border-border bg-card shadow-sm ring-1 ring-inset ring-gold/10"
            >
              <img
                src={p.src}
                alt={`Mensagem de ${p.name} para a J&M`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}


function FAQ() {
  const items = [
    { q: "Com quanto tempo de antecedência devo contratar?", a: "O ideal é entre 8 e 12 meses para a Essência Completa e a partir de 60 dias para a Essência do Dia. Mas se faltam poucos meses, fale com a gente — costumamos encontrar um caminho." },
    { q: "Vocês trabalham apenas no dia do casamento?", a: "Não. Temos três pacotes: do acompanhamento integral à coordenação focada no dia. Escolhemos juntas o formato ideal para o seu momento." },
    { q: "Posso contratar se já tiver alguns fornecedores?", a: "Sim. Fazemos um diagnóstico do que já foi contratado, alinhamos com cada parceiro e seguimos com o planejamento a partir dali — sem retrabalho." },
    { q: "A assessoria ajuda na escolha de fornecedores?", a: "Ajuda. Temos uma rede curada de profissionais já testados em casamentos reais e cuidamos da negociação, contratos e alinhamento criativo." },
    { q: "Vocês cuidam do cronograma do evento?", a: "Sim — e esse é um dos cuidados que mais transformam o seu dia. Cada minuto é planejado e compartilhado com fornecedores, família e equipe técnica." },
    { q: "Como faço para saber qual pacote é ideal para mim?", a: "Fale com a gente pelo WhatsApp. Conversamos sobre o seu casamento e indicamos com transparência o pacote que faz mais sentido — sem pressão de venda." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <span className="eyebrow">Perguntas</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Tudo que você queria <em className="text-gold">perguntar.</em>
          </h2>
        </motion.div>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold"
                >
                  <span className="font-display text-xl md:text-2xl">{it.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-gold" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gold" />
                  )}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <div className="min-h-0">
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ivory md:py-36">
      <div className="absolute inset-0 opacity-20">
        <img src={g8} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto max-w-3xl px-6 text-center md:px-10"
      >
        <span className="eyebrow">Vamos conversar</span>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
          Seu casamento merece ser inesquecível —
          <br className="hidden md:block" /> por todos os{" "}
          <em className="text-gold">motivos certos.</em>
        </h2>
        <p className="mt-8 text-base leading-relaxed text-ivory/70 md:text-lg">
          Fale com a J&amp;M e descubra qual assessoria combina com o seu
          casamento. Atendimento próximo, sem compromisso e com total cuidado.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 bg-gold px-10 py-5 text-xs uppercase tracking-[0.32em] text-ink transition-colors hover:bg-ivory"
        >
          <MessageCircle className="h-4 w-4" /> Falar no WhatsApp agora
        </a>
        <p className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-ivory/50">
          <Clock className="h-3.5 w-3.5" /> Respondemos em poucas horas
        </p>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-ivory/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 md:px-10">
        <div>
          <div className="font-display text-3xl text-ivory">
            J<span className="text-gold">&amp;</span>M
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Cuidamos dos bastidores para você viver o seu dia. Assessoria de
            casamentos e eventos com alma e precisão.
          </p>
        </div>
        <div>
          <div className="eyebrow">Contato</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold">
                <MessageCircle className="h-4 w-4 text-gold" /> (11) 99277-2641
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold">
                <Instagram className="h-4 w-4 text-gold" /> @jm.assessoria
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" /> São Paulo e região
            </li>
          </ul>
        </div>
        <div className="md:text-right">
          <div className="eyebrow">Pronta para começar?</div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center border border-gold px-6 py-3 text-xs uppercase tracking-[0.28em] text-ivory transition-colors hover:bg-gold hover:text-ink"
          >
            Pedir orçamento
          </a>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-ivory/10 px-6 pt-6 text-center text-xs tracking-wide text-ivory/40 md:px-10">
        © {new Date().getFullYear()} J&amp;M Assessoria de Casamentos. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
