import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  MapPin,
  Clock,
  Check,
  MessageCircle,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  UserRoundPen,
  Truck,
  Cigarette,
} from "lucide-react";
import { SteinLogo } from "@/components/SteinLogo";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import expCigars from "@/assets/exp-cigars.jpg";
import expPoker from "@/assets/exp-poker.jpg";
import expBook from "@/assets/exp-book.jpg";
import expBusiness from "@/assets/exp-business.jpg";
import expSports from "@/assets/exp-sports.jpg";
import expTasting from "@/assets/exp-tasting.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import gal5 from "@/assets/gallery-5.jpg";
import gal6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stein Premium — Lounge Privativo de Charutos & Clube de Negócios" },
      {
        name: "description",
        content:
          "Mais do que um lounge de charutos. Uma comunidade privada construída em torno de charutos premium, eventos exclusivos e conexões de negócios significativas.",
      },
      { property: "og:title", content: "Stein Premium — Lounge Privativo de Charutos" },
      {
        property: "og:description",
        content: "Charutos premium, eventos exclusivos, networking de negócios e momentos inesquecíveis.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Experiências", href: "#experiences" },
  { label: "Agenda", href: "#agenda" },
  { label: "Como Funciona", href: "#how-it-works" },
  { label: "Planos", href: "#membership" },
  { label: "FAQ", href: "#faq" },
  { label: "Galeria", href: "#gallery" },
  { label: "Localização", href: "#location" },
  { label: "Contato", href: "#contact" },
];

type AgendaEvent = {
  day: string; // ex: "Qui · 18 Jun"
  weekday: string; // ex: "Quinta-feira"
  date: string; // ex: "18 de Junho"
  time: string;
  title: string;
  category: string;
  description: string;
  week: number; // 1..4 (semana do mês)
};

const AGENDA: AgendaEvent[] = [
  {
    day: "Ter · 02",
    weekday: "Terça-feira",
    date: "02 de Junho",
    time: "20h00",
    title: "Degustação · Cohiba Behike 56",
    category: "Charuto",
    description:
      "Vertical reservada com nosso keeper, harmonizada com um single malt de 18 anos. Vagas limitadas a 12 membros.",
    week: 1,
  },
  {
    day: "Qui · 04",
    weekday: "Quinta-feira",
    date: "04 de Junho",
    time: "21h30",
    title: "Noite de Pôquer · Mesa Privativa",
    category: "Pôquer",
    description:
      "Buy-in fechado. Fichas vintage, dealer profissional e jantar de seis tempos servido entre as mãos.",
    week: 1,
  },
  {
    day: "Sáb · 06",
    weekday: "Sábado",
    date: "06 de Junho",
    time: "16h00",
    title: "UEFA · Final transmitida no lounge",
    category: "Esportes",
    description:
      "Telão privativo, charutos selecionados e serviço de sommelier durante toda a partida.",
    week: 1,
  },
  {
    day: "Qua · 10",
    weekday: "Quarta-feira",
    date: "10 de Junho",
    time: "19h30",
    title: "Clube do Livro · Biografias",
    category: "Cultura",
    description:
      "Encontro mensal da biblioteca. Whisky, leitura comentada e debate conduzido pelo curador da casa.",
    week: 2,
  },
  {
    day: "Sex · 12",
    weekday: "Sexta-feira",
    date: "12 de Junho",
    time: "20h00",
    title: "Jantar Reservado · Founders Table",
    category: "Negócios",
    description:
      "Mesa fechada para oito fundadores e investidores. Apresentações curadas, à porta fechada.",
    week: 2,
  },
  {
    day: "Ter · 16",
    weekday: "Terça-feira",
    date: "16 de Junho",
    time: "20h30",
    title: "Flight de Conhaque Vintage",
    category: "Degustação",
    description:
      "Quatro safras raras conduzidas por master-blender convidado. Reservado para membros e convidados.",
    week: 3,
  },
  {
    day: "Sáb · 20",
    weekday: "Sábado",
    date: "20 de Junho",
    time: "21h00",
    title: "Noite de Charutos Cubanos",
    category: "Charuto",
    description:
      "Seleção exclusiva da Habanos S.A. apresentada por nosso humidor master. Música ao vivo no piano.",
    week: 3,
  },
  {
    day: "Qui · 25",
    weekday: "Quinta-feira",
    date: "25 de Junho",
    time: "19h00",
    title: "Roda de Networking · C-Level",
    category: "Negócios",
    description:
      "Encontro restrito a executivos sêniores e fundadores. Mediação por convidado da casa.",
    week: 4,
  },
  {
    day: "Sex · 27",
    weekday: "Sexta-feira",
    date: "27 de Junho",
    time: "22h00",
    title: "After Hours · Jazz ao Vivo",
    category: "Música",
    description:
      "Trio de jazz no salão principal. Coquetelaria autoral até o fechamento.",
    week: 4,
  },
];


const EXPERIENCES = [
  {
    title: "Charutos Premium",
    img: expCigars,
    text: "Um humidor selecionado com os charutos enrolados à mão mais refinados do mundo — reservas cubanas, dominicanas e nicaraguenses, mantidas em clima perfeito e servidas com ritual silencioso.",
  },
  {
    title: "Noites de Pôquer",
    img: expPoker,
    text: "Mesas privativas, fichas vintage e longas noites entre cavalheiros. Onde estratégia, conversa e uma tragada lenta se tornam a mesma coisa.",
  },
  {
    title: "Clube do Livro",
    img: expBook,
    text: "Um encontro mensal em nossa biblioteca. Whisky, biografias e ideias que vale a pena defender — as conversas mais duradouras raramente acontecem em uma tela.",
  },
  {
    title: "Clube de Negócios & Networking",
    img: expBusiness,
    text: "Fundadores, investidores e executivos se encontram aqui com propósito. Apresentações curadas, jantares a portas fechadas e o tipo de confiança que constrói negócios reais.",
  },
  {
    title: "Transmissões Esportivas",
    img: expSports,
    text: "Champions League, Grand Slams, lutas de título — transmitidos no lounge com mesas privativas, serviço de sommelier e a companhia certa.",
  },
  {
    title: "Encontros & Degustações Exclusivas",
    img: expTasting,
    text: "Verticais de single malt, flights de conhaque vintage e noites com master-blenders. Reservado para membros e seus convidados.",
  },
];

const PLANS = [
  {
    name: "Chesterton",
    monthlyPrice: 230,
    annualMonthlyPrice: 190,
    tagline: "A porta de entrada do clube.",
    features: [
      "2 charutos premium por mês, exceto cubanos",
      "10% de desconto em todo o catálogo Stein Premium",
      "10% de desconto em consumo no Stein Lounge",
      "10% de desconto em eventos presenciais",
      "Plano anual: 1 charuto long filler de brinde",
    ],
  },
  {
    name: "Jordan",
    monthlyPrice: 410,
    annualMonthlyPrice: 330,
    tagline: "O plano preferido dos membros.",
    features: [
      "4 charutos premium por mês, podendo incluir cubanos",
      "20% de desconto em todo o catálogo Stein Premium",
      "20% de desconto em consumo no Stein Lounge",
      "20% de desconto em eventos presenciais",
      "Espaço para eventos privados e empresariais no Lounge",
      "Plano anual: 2 charutos long filler de brinde",
    ],
    featured: true,
  },
  {
    name: "Churchill",
    monthlyPrice: 1100,
    annualMonthlyPrice: 880,
    tagline: "O círculo completo.",
    features: [
      "6 charutos premium por mês, incluindo cubanos e ultrapremium",
      "25% de desconto em todo o catálogo Stein Premium",
      "25% de desconto em consumo no Stein Lounge",
      "100% de desconto em todos os eventos presenciais",
      "Espaço prioritário para eventos privados e empresariais",
      "Disponibilidade total para reuniões no Lounge",
      "2 acessórios de cortesia por ano",
      "Plano anual: 5 charutos long filler de brinde",
    ],
  },
];

const formatBRL = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

const HOW_IT_WORKS = [
  {
    icon: ClipboardList,
    title: "Escolha o plano ideal para você",
    text: "3 planos com vantagens progressivas, mensal ou anual.",
  },
  {
    icon: UserRoundPen,
    title: "Preencha suas informações",
    text: "Dados pessoais e endereço de entrega direto com o nosso atendimento.",
  },
  {
    icon: Truck,
    title: "Acompanhe seu pedido",
    text: "Atualizações por e-mail até seu pedido chegar onde você escolheu.",
  },
  {
    icon: Cigarette,
    title: "Desfrute seu kit mensal",
    text: "Reúna-se com os amigos ou aproveite o seu momento.",
  },
];

const FAQ = [
  {
    q: "Os produtos são originais?",
    a: "Sim. A Stein Premium preza pela integridade absoluta de seus produtos. Todos os charutos do clube são 100% originais, adquiridos de fornecedores oficiais com garantia de procedência.",
  },
  {
    q: "Posso escolher quais produtos vou receber?",
    a: "A proposta do clube é a curadoria. Selecionamos criteriosamente os charutos para proporcionar novas experiências de degustação a cada mês.",
  },
  {
    q: "Como funciona a entrega?",
    a: "O frete é tabelado para todo o Brasil de acordo com os preços de mercado, mas há possibilidades de ter frete grátis em algumas modalidades. Se você mora perto de Ivoti-RS, priorizaremos que retire seus produtos em nosso Lounge.",
  },
  {
    q: "Existe fidelidade no plano mensal?",
    a: "Não. No plano mensal, você tem total liberdade e a renovação é automática a cada 30 dias, podendo ser cancelada sem taxas ou restrições. Porém, as maiores vantagens de preço e brindes são reservadas para quem opta pelo plano anual.",
  },
  {
    q: "O que acontece se o charuto chegar danificado?",
    a: "Utilizamos embalagens especiais e umidoras para transporte. Caso ocorra qualquer imprevisto logístico, basta entrar em contato com nosso suporte que faremos a reposição imediata.",
  },
];

const GALLERY = [
  { src: gal1, h: "row-span-2", alt: "Bar iluminado dentro do Stein Premium" },
  { src: gal2, h: "row-span-1", alt: "Acendendo um charuto enrolado à mão" },
  { src: gal3, h: "row-span-1", alt: "Membros brindando no lounge" },
  { src: gal4, h: "row-span-2", alt: "Humidor privativo" },
  { src: gal5, h: "row-span-1", alt: "Cristal de whisky e cinzeiro com charuto" },
  { src: gal6, h: "row-span-1", alt: "Canto reservado de couro do lounge" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav open={open} setOpen={setOpen} scrolled={scrolled} />
      <Hero />
      <About />
      <Experiences />
      <Agenda />
      <HowItWorks />
      <Membership />
      <Faq />

      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

/* ───────────── NAV ───────────── */
function Nav({
  open,
  setOpen,
  scrolled,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  scrolled: boolean;
}) {
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-lux flex items-center justify-between">
        <a href="#home" className="text-cream">
          <SteinLogo />
        </a>
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative whitespace-nowrap text-[0.68rem] tracking-[0.12em] uppercase text-cream/75 hover:text-gold transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden xl:inline-flex btn-gold !py-2.5 !px-5 !text-[0.68rem] whitespace-nowrap">
          Agende uma Visita
        </a>
        <button
          aria-label="Toggle menu"
          className="xl:hidden text-cream"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="xl:hidden bg-ink border-t border-border animate-fade-in">
          <div className="container-lux py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.24em] uppercase text-cream/80 hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2"
            >
              Agende uma Visita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ───────────── HERO ───────────── */
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        section.style.setProperty("--mx", `${x}%`);
        section.style.setProperty("--my", `${y}%`);
        raf = 0;
      });
    };
    section.addEventListener("mousemove", onMove);
    return () => {
      section.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Stein Premium cigar lounge interior"
          width={1920}
          height={1280}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(200,164,107,0.14), transparent 60%)",
        }}
      />

      <div className="container-lux relative z-10 pt-32 pb-20">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" />
            Clube privativo · Somente para membros
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-serif text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl text-cream">
            Mais do que um lounge de charutos.
            <br />
            <span className="italic text-gradient-gold">Uma comunidade</span> construída em torno
            de experiências, conexões e grandes conversas.
          </h1>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-8 max-w-xl text-base md:text-lg text-cream/70 leading-relaxed">
            Charutos premium, eventos exclusivos, networking de negócios e momentos
            inesquecíveis — em um ambiente reservado para quem valoriza a arte lenta
            da boa conversa.
          </p>
        </Reveal>
        <Reveal delay={420}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold group">
              Agende uma Visita{" "}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#about" className="btn-ghost-gold">
              Saiba Mais
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 text-[0.65rem] tracking-[0.4em] uppercase animate-shimmer">
        Role
      </div>
    </section>
  );
}

/* ───────────── ABOUT ───────────── */
function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="container-lux grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" />
            Nossa História
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-cream mb-8">
            Uma casa feita para o
            <span className="italic text-gradient-gold"> ritual sereno </span>
            da boa companhia.
          </h2>
          <div className="space-y-5 text-cream/70 leading-relaxed">
            <p>
              A Stein Premium nasceu do sonho compartilhado de dois amigos — Daniel
              Stein e Junior Volcan. Mais do que criar uma marca ou um produto, o
              objetivo sempre foi estabelecer um novo padrão de experiência e
              excelência para apreciadores de charutos.
            </p>
            <p>
              Desenvolvemos um clube de assinatura e um serviço particular de
              curadoria especializada, e inauguramos nosso lounge em Ivoti, no Rio
              Grande do Sul. Ali, negócios se fecham sobre um bom charuto e uma
              sexta-feira vira uma conversa que vale a pena continuar.
            </p>
            <p>
              O coração deste projeto é o Clube Stein, desenvolvido para entregar aos
              nossos assinantes a melhor curadoria de charutos do Brasil, mês após mês.
            </p>
          </div>
        </Reveal>
        <Reveal delay={200} className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/30" />
            <img
              src={aboutImg}
              alt="Founders of Stein Premium in the lounge"
              width={1280}
              height={1280}
              loading="lazy"
              className="relative w-full aspect-[4/5] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── EXPERIENCES ───────────── */
function Experiences() {
  return (
    <section id="experiences" className="py-28 md:py-40 bg-charcoal border-y border-border">
      <div className="container-lux">
        <Reveal className="text-center max-w-2xl mx-auto mb-24">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-3" />
            A Experiência
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            O que oferecemos
          </h2>
          <p className="mt-6 text-cream/60 leading-relaxed">
            Seis formas de passar uma noite no Stein — todas construídas sobre ofício,
            discrição e a companhia que você escolhe ter.
          </p>
        </Reveal>

        <div className="space-y-28 md:space-y-36">
          {EXPERIENCES.map((e, i) => (
            <div
              key={e.title}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <Reveal
                className={i % 2 === 1 ? "lg:order-2" : ""}
                delay={i % 2 === 1 ? 150 : 0}
              >
                <div className="group relative overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                </div>
              </Reveal>
              <Reveal
                className={i % 2 === 1 ? "lg:order-1" : ""}
                delay={150}
              >
                <p className="eyebrow mb-4">0{i + 1} · Experiência</p>
                <h3 className="font-serif text-3xl md:text-5xl leading-tight text-cream mb-6">
                  {e.title}
                </h3>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="text-cream/65 leading-relaxed text-lg max-w-lg">{e.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── AGENDA ───────────── */
function Agenda() {
  const [view, setView] = useState<"week" | "month">("week");
  const currentWeek = 1;
  const events = view === "week" ? AGENDA.filter((e) => e.week === currentWeek) : AGENDA;

  const monthLabel = "Junho de 2026";
  const weekLabel = "01 — 07 de Junho";

  return (
    <section id="agenda" className="py-28 md:py-40 bg-ink">
      <div className="container-lux">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-3" />
            Agenda
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Eventos do <span className="italic text-gradient-gold">mês</span>
          </h2>
          <p className="mt-6 text-cream/60 leading-relaxed">
            Noites curadas, jantares fechados e encontros reservados. A agenda
            é atualizada quinzenalmente — vagas sob reserva.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 border-b border-border pb-6">
            <div>
              <div className="flex items-center gap-3 text-gold mb-2">
                <CalendarDays size={18} />
                <span className="text-[0.7rem] tracking-[0.3em] uppercase text-cream/60">
                  {view === "week" ? "Esta semana" : "Este mês"}
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-cream">
                {view === "week" ? weekLabel : monthLabel}
              </h3>
            </div>
            <div className="inline-flex border border-border self-start md:self-auto">
              <button
                onClick={() => setView("week")}
                className={`px-6 py-3 text-[0.7rem] tracking-[0.3em] uppercase transition-colors ${
                  view === "week"
                    ? "bg-gold text-ink"
                    : "text-cream/60 hover:text-gold"
                }`}
              >
                Semana
              </button>
              <button
                onClick={() => setView("month")}
                className={`px-6 py-3 text-[0.7rem] tracking-[0.3em] uppercase transition-colors border-l border-border ${
                  view === "month"
                    ? "bg-gold text-ink"
                    : "text-cream/60 hover:text-gold"
                }`}
              >
                Mês
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-px bg-gold/15">
          {events.map((e, i) => (
            <Reveal key={`${e.day}-${e.title}`} delay={i * 60}>
              <article className="group bg-ink hover:bg-charcoal/60 transition-colors duration-500 p-6 md:p-8">
                <div className="grid md:grid-cols-[180px_120px_1fr_auto] gap-6 md:gap-10 items-start md:items-center">
                  <div>
                    <div className="font-serif text-3xl md:text-4xl text-gold leading-none">
                      {e.day.split(" · ")[1]}
                    </div>
                    <div className="text-[0.65rem] tracking-[0.3em] uppercase text-cream/50 mt-2">
                      {e.weekday}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-cream/80">
                    <Clock size={14} className="text-gold" />
                    <span className="text-sm tracking-wider">{e.time}</span>
                  </div>
                  <div>
                    <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold/80 mb-2">
                      {e.category}
                    </p>
                    <h4 className="font-serif text-xl md:text-2xl text-cream group-hover:text-gold transition-colors mb-2">
                      {e.title}
                    </h4>
                    <p className="text-sm text-cream/60 leading-relaxed max-w-2xl">
                      {e.description}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="btn-ghost-gold group !py-2.5 !px-5 !text-[0.65rem] whitespace-nowrap"
                  >
                    Reservar{" "}
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center text-cream/55 text-xs tracking-[0.25em] uppercase mt-10">
            Eventos sujeitos a confirmação · Reservas mediante contato
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── HOW IT WORKS ───────────── */
function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 md:py-40 bg-ink">
      <div className="container-lux">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-3" />
            Como Funciona
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Do primeiro passo ao seu <span className="italic text-gradient-gold">kit mensal</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {HOW_IT_WORKS.map((step, i) => (
            <Reveal key={step.title} delay={i * 120} className="text-center lg:text-left">
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                <span className="font-serif text-5xl text-gold/70 leading-none">0{i + 1}</span>
                <step.icon size={22} className="hidden lg:block text-gold mt-4 mb-3" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-cream mt-3 mb-2">{step.title}</h3>
              <p className="text-cream/65 text-sm leading-relaxed">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={480} className="text-center mt-16">
          <a href="#membership" className="btn-ghost-gold">
            Ver Planos
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── MEMBERSHIP ───────────── */

function Membership() {
  const [annual, setAnnual] = useState(false);
  const maxSavingsPct = Math.round(
    Math.max(...PLANS.map((p) => (p.monthlyPrice - p.annualMonthlyPrice) / p.monthlyPrice)) * 100
  );

  return (
    <section id="membership" className="py-28 md:py-40">
      <div className="container-lux">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-3" />
            Planos
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Torne-se um membro
          </h2>
          <p className="mt-6 text-cream/60 leading-relaxed">
            Três planos com curadoria mensal de charutos premium e vantagens
            progressivas no catálogo, no Lounge e em eventos presenciais. Sem
            fidelidade no plano mensal — os melhores benefícios ficam com o plano
            anual.
          </p>
        </Reveal>

        <Reveal delay={80} className="flex items-center justify-center gap-4 mb-12">
          <Label
            htmlFor="billing-toggle"
            className={`text-xs tracking-[0.2em] uppercase cursor-pointer ${!annual ? "text-cream" : "text-cream/50"}`}
          >
            Mensal
          </Label>
          <Switch
            id="billing-toggle"
            checked={annual}
            onCheckedChange={setAnnual}
            className="data-[state=checked]:bg-gold data-[state=unchecked]:bg-charcoal"
          />
          <Label
            htmlFor="billing-toggle"
            className={`text-xs tracking-[0.2em] uppercase cursor-pointer ${annual ? "text-cream" : "text-cream/50"}`}
          >
            Anual
          </Label>
          <span className="ml-2 text-[0.65rem] tracking-[0.15em] uppercase text-gold/80 border border-gold/30 px-2 py-1">
            Economize até {maxSavingsPct}%
          </span>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} variant="pop">
              <div
                className={`relative h-full p-10 border transition-all duration-500 hover:-translate-y-2 hover:shadow-gold-glow ${
                  p.featured
                    ? "border-gold bg-gradient-to-b from-charcoal to-ink shadow-gold-glow md:scale-[1.03]"
                    : "border-border bg-charcoal/40 hover:border-gold/60"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink px-4 py-1 text-[0.6rem] tracking-[0.3em] uppercase">
                    Mais Escolhido
                  </div>
                )}
                <p className="eyebrow">{p.name}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-5xl text-cream">
                    {formatBRL(annual ? p.annualMonthlyPrice : p.monthlyPrice)}
                  </span>
                  <span className="text-cream/50 text-sm">/ mês</span>
                </div>
                <p className="mt-2 text-[0.7rem] tracking-wide text-gold/80">
                  {annual
                    ? `Economize R$ ${(p.monthlyPrice - p.annualMonthlyPrice) * 12} por ano · cobrado 12x`
                    : "Sem fidelidade · renovação mensal"}
                </p>
                <p className="mt-3 italic text-cream/60 font-serif text-lg">{p.tagline}</p>
                <div className="w-10 h-px bg-gold my-7" />
                <ul className="space-y-4 mb-10">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-cream/75">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={p.featured ? "btn-gold w-full" : "btn-ghost-gold w-full"}
                >
                  Tornar-se Membro
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── FAQ ───────────── */
function Faq() {
  return (
    <section id="faq" className="py-28 md:py-40 bg-charcoal border-y border-border">
      <div className="container-lux max-w-3xl">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-3" />
            Dúvidas
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Perguntas frequentes
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border">
                <AccordionTrigger className="font-serif text-lg md:text-xl text-cream hover:no-underline hover:text-gold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-cream/65 leading-relaxed text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── GALLERY ───────────── */
function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <section id="gallery" className="py-28 md:py-40 bg-charcoal border-y border-border">
      <div className="container-lux">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-3" />
            Galeria
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Dentro do lounge
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {GALLERY.map((g, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className={`${g.h} group overflow-hidden relative cursor-pointer`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-colors duration-500" />
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/60 transition-colors duration-500" />
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Ampliar imagem: ${g.alt}`}
                className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              />
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={activeIndex !== null} onOpenChange={(o) => !o && setActiveIndex(null)}>
        <DialogContent className="max-w-4xl w-full bg-ink border border-gold/25 p-0 overflow-hidden sm:rounded-none">
          <DialogTitle className="sr-only">Galeria de fotos do Stein Premium</DialogTitle>
          <DialogDescription className="sr-only">
            Visualização ampliada das fotos do lounge, com navegação entre as imagens.
          </DialogDescription>
          {activeIndex !== null && (
            <div className="relative">
              <img
                src={GALLERY[activeIndex].src}
                alt={GALLERY[activeIndex].alt}
                className="w-full max-h-[80vh] object-contain bg-ink"
              />
              <p className="p-4 text-center text-sm text-cream/70">{GALLERY[activeIndex].alt}</p>
              <button
                type="button"
                onClick={showPrev}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-ink/70 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-ink/70 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ───────────── LOCATION ───────────── */
function Location() {
  return (
    <section id="location" className="py-28 md:py-40 bg-ink">
      <div className="container-lux">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-3" />
            Onde Estamos
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Visite o Stein Premium
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-gold/20">
          {/* Col 1 */}
          <Reveal>
            <div className="bg-ink p-10 md:p-12 h-full">
              <div className="text-gold mb-6">
                <SteinLogo />
              </div>
              <p className="text-cream/60 text-sm mb-8 leading-relaxed">
                Reservas e atendimento a membros — respondemos pessoalmente.
              </p>
              <div className="space-y-4 text-sm">
                <a href="https://wa.me/555196713152" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                  <MessageCircle size={16} className="text-gold" /> +55 51 9671-3152
                </a>
                <a href="https://wa.me/555199771731" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                  <MessageCircle size={16} className="text-gold" /> +55 51 9977-1731
                </a>
                <a href="https://instagram.com/stein_premium" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                  <Instagram size={16} className="text-gold" /> @stein_premium
                </a>
              </div>
            </div>
          </Reveal>

          {/* Col 2 */}
          <Reveal delay={120}>
            <div className="bg-ink p-10 md:p-12 h-full">
              <div className="flex items-center gap-3 text-gold mb-6">
                <Clock size={18} />
                <h3 className="font-serif text-2xl text-cream">Horário de Funcionamento</h3>
              </div>
              <ul className="space-y-3 text-sm text-cream/75 mb-8">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Terça — Sexta</span><span className="text-gold">17h — 22h</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Sábado</span><span className="text-gold">15h — 21h</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo — Segunda</span><span className="text-cream/55">Fechado</span>
                </li>
              </ul>
              <div className="aspect-[16/10] overflow-hidden border border-border">
                <iframe
                  title="Stein Premium location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-51.1786%2C-29.6103%2C-51.1396%2C-29.5883&layer=mapnik"
                  className="w-full h-full grayscale-[60%] contrast-110"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Col 3 */}
          <Reveal delay={240}>
            <div className="bg-ink p-10 md:p-12 h-full">
              <div className="flex items-center gap-3 text-gold mb-6">
                <MapPin size={18} />
                <h3 className="font-serif text-2xl text-cream">Endereço</h3>
              </div>
              <address className="not-italic text-cream/75 text-sm leading-relaxed mb-8">
                Rua Santa Rita, 56<br />
                Concórdia<br />
                Ivoti — RS, Brasil
              </address>
              <a
                href="https://maps.google.com/?q=Rua+Santa+Rita+56+Ivoti+RS"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-gold group w-full mb-6"
              >
                Como Chegar{" "}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <div className="flex items-start gap-3 text-sm text-cream/65">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <p>
                  Mora perto de Ivoti? Priorizamos a retirada dos kits do clube
                  diretamente em nosso Lounge.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────── CONTACT / CTA ───────────── */
function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={gal3}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
      </div>
      <div className="container-lux relative z-10 text-center max-w-3xl mx-auto">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-3" /> Reservas
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-7xl leading-[1.05] text-cream mb-8">
            Faça parte da nossa
            <span className="italic text-gradient-gold"> comunidade</span>.
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Agende uma visita privativa. Conheça o humidor, fale com o nosso keeper
            e descubra se o Stein Premium é o lugar que você estava procurando.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/555196713152"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href="https://instagram.com/stein_premium"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-gold"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── FOOTER ───────────── */
function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-ink">
      <div className="container-lux flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-[0.2em] uppercase text-cream/40">
        <div className="text-gold/80">
          <SteinLogo />
        </div>
        <p>© {new Date().getFullYear()} Stein Premium · Todos os direitos reservados</p>
        <p className="text-cream/30">Feito com discrição</p>
      </div>
    </footer>
  );
}

/* ───────────── WHATSAPP FLOAT ───────────── */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/555196713152"
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold text-ink shadow-[0_15px_40px_-10px_rgba(200,164,107,0.6)] group-hover:scale-110 transition-transform duration-300">
        <MessageCircle size={24} strokeWidth={1.8} />
      </span>
    </a>
  );
}
