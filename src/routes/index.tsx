import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  Car,
  Check,
  MessageCircle,
  CalendarDays,
} from "lucide-react";
import { SteinLogo } from "@/components/SteinLogo";
import { Reveal } from "@/components/Reveal";

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
  { label: "Planos", href: "#membership" },
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
    name: "Bronze",
    price: "R$ 1.250",
    period: "/ mês",
    tagline: "A porta de entrada do lounge.",
    features: [
      "Acesso ao lounge — noites de semana",
      "Locker pessoal no humidor",
      "10% de desconto em charutos e destilados",
      "Convites para degustações abertas",
    ],
  },
  {
    name: "Silver",
    price: "R$ 2.700",
    period: "/ mês",
    tagline: "O plano preferido dos membros.",
    features: [
      "Acesso ilimitado ao lounge",
      "Humidor premium com placa personalizada",
      "20% de desconto em todas as compras",
      "Lugares prioritários nas noites de pôquer",
      "Dois convites para visitantes por mês",
    ],
    featured: true,
  },
  {
    name: "Gold",
    price: "R$ 6.000",
    period: "/ mês",
    tagline: "O círculo completo.",
    features: [
      "Acesso 24/7 ao lounge privativo",
      "Poltrona chesterfield reservada com placa em latão",
      "30% de desconto em todas as compras",
      "Todos os eventos exclusivos inclusos",
      "Concierge e reserva de sala privativa",
    ],
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
      <Membership />

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
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.72rem] tracking-[0.24em] uppercase text-cream/75 hover:text-gold transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden lg:inline-flex btn-gold !py-2.5 !px-5 !text-[0.7rem]">
          Agende uma Visita
        </a>
        <button
          aria-label="Toggle menu"
          className="lg:hidden text-cream"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-ink border-t border-border animate-fade-in">
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
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Stein Premium cigar lounge interior"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      </div>

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
            <a href="#contact" className="btn-gold">
              Agende uma Visita <ArrowRight size={14} />
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
              O Stein Premium começou como as melhores instituições começam — com um
              pequeno grupo de amigos, um humidor de charutos cuidadosamente escolhidos
              e a convicção de que as melhores conversas ainda acontecem pessoalmente,
              sem pressa, atrás de uma porta fechada.
            </p>
            <p>
              O que era um canto privativo se transformou em um lounge de membros para
              fundadores, profissionais e apreciadores. Um lugar onde negócios são
              fechados sobre um Cohiba, onde uma sexta-feira vira uma mão de pôquer que
              vale ser contada, e onde estranhos saem como sócios.
            </p>
            <p>
              Nossa missão é simples: proteger o ofício, curar a companhia e manter a
              porta aberta apenas para quem entende a diferença.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat n="180+" l="Membros" />
            <Stat n="42" l="Eventos / ano" />
            <Stat n="9" l="Anos" />
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
              className="relative w-full h-[520px] md:h-[640px] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="border-t border-gold/30 pt-3">
      <div className="font-serif text-3xl md:text-4xl text-gold">{n}</div>
      <div className="text-[0.65rem] tracking-[0.25em] uppercase text-cream/50 mt-1">{l}</div>
    </div>
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
                    className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
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

/* ───────────── MEMBERSHIP ───────────── */
function Membership() {
  return (
    <section id="membership" className="py-28 md:py-40">
      <div className="container-lux">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-3" />
            Planos
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Torne-se um membro
          </h2>
          <p className="mt-6 text-cream/60 leading-relaxed">
            Três níveis, um único padrão de serviço. Todos os planos incluem humidor
            pessoal e reservas permanentes.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div
                className={`relative h-full p-10 border transition-all duration-500 hover:-translate-y-2 ${
                  p.featured
                    ? "border-gold bg-gradient-to-b from-charcoal to-ink shadow-[0_30px_80px_-30px_rgba(200,164,107,0.35)] md:scale-[1.03]"
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
                  <span className="font-serif text-5xl text-cream">{p.price}</span>
                  <span className="text-cream/50 text-sm">{p.period}</span>
                </div>
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

/* ───────────── GALLERY ───────────── */
function Gallery() {
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
            </Reveal>
          ))}
        </div>
      </div>
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
                <a href="tel:+5511999990000" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold" /> +55 (11) 99999-0000
                </a>
                <a href="tel:+5511988880000" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold" /> +55 (11) 98888-0000
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                  <Instagram size={16} className="text-gold" /> @steinpremium
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                  <Facebook size={16} className="text-gold" /> /steinpremium
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
                  <span>Seg — Qui</span><span className="text-gold">17h — 01h</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Sex — Sáb</span><span className="text-gold">17h — 03h</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span><span className="text-cream/40">Somente membros</span>
                </li>
              </ul>
              <div className="aspect-[16/10] overflow-hidden border border-border">
                <iframe
                  title="Stein Premium location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.012%2C40.704%2C-73.996%2C40.716&layer=mapnik"
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
                Rua Oscar Freire, 1042<br />
                Cobertura<br />
                Jardins — São Paulo, SP<br />
                01426-001, Brasil
              </address>
              <a
                href="https://maps.google.com/?q=Rua+Oscar+Freire+1042+Sao+Paulo"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-gold w-full mb-6"
              >
                Como Chegar <ArrowRight size={14} />
              </a>
              <div className="flex items-start gap-3 text-sm text-cream/65">
                <Car size={16} className="text-gold mt-1 shrink-0" />
                <p>
                  Valet cortesia para membros. Estacionamento público disponível na
                  esquina da Oscar Freire com a Haddock Lobo.
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
              href="https://wa.me/5511999990000"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href="https://instagram.com"
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
      href="https://wa.me/5511999990000"
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
