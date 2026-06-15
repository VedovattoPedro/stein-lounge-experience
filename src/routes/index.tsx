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
      { title: "Stein Premium — Private Cigar Lounge & Business Club" },
      {
        name: "description",
        content:
          "More than a cigar lounge. A private community built around premium cigars, exclusive events and meaningful business connections.",
      },
      { property: "og:title", content: "Stein Premium — Private Cigar Lounge" },
      {
        property: "og:description",
        content: "Premium cigars, exclusive events, business networking and unforgettable moments.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCES = [
  {
    title: "Premium Cigars",
    img: expCigars,
    text: "A curated humidor of the world's most refined hand-rolled cigars — Cuban, Dominican and Nicaraguan reserves, kept in perfect climate, served with quiet ritual.",
  },
  {
    title: "Poker Nights",
    img: expPoker,
    text: "Private tables, vintage chips and long evenings between gentlemen. Where strategy, conversation and a slow draw of smoke become the same thing.",
  },
  {
    title: "Book Club",
    img: expBook,
    text: "A monthly gathering in our library room. Whisky, biographies and ideas worth defending — the most enduring conversations rarely happen on a screen.",
  },
  {
    title: "Business Club & Networking",
    img: expBusiness,
    text: "Founders, investors and operators meet here on purpose. Curated introductions, closed-door dinners and the kind of trust that builds real ventures.",
  },
  {
    title: "Sports Broadcast Events",
    img: expSports,
    text: "Champions League, Grand Slams, title fights — broadcast in the lounge with private tables, sommelier service and the right company.",
  },
  {
    title: "Exclusive Gatherings & Tastings",
    img: expTasting,
    text: "Single-malt verticals, vintage cognac flights and master-blender evenings. Reserved for members and their invited guests.",
  },
];

const PLANS = [
  {
    name: "Bronze",
    price: "$250",
    period: "/ month",
    tagline: "An entry to the lounge.",
    features: [
      "Lounge access — weekday evenings",
      "Personal humidor locker",
      "10% off all cigars & spirits",
      "Invitations to open tastings",
    ],
  },
  {
    name: "Silver",
    price: "$540",
    period: "/ month",
    tagline: "The members' favourite.",
    features: [
      "Unlimited lounge access",
      "Premium humidor with name plate",
      "20% off all purchases",
      "Priority seats at poker nights",
      "Two guest passes per month",
    ],
    featured: true,
  },
  {
    name: "Gold",
    price: "$1,200",
    period: "/ month",
    tagline: "The full circle.",
    features: [
      "24/7 private lounge access",
      "Reserved chesterfield with brass plate",
      "30% off all purchases",
      "All exclusive events included",
      "Concierge & private room booking",
    ],
  },
];

const GALLERY = [
  { src: gal1, h: "row-span-2", alt: "Backlit bar inside Stein Premium" },
  { src: gal2, h: "row-span-1", alt: "Lighting a hand-rolled cigar" },
  { src: gal3, h: "row-span-1", alt: "Members toasting in the lounge" },
  { src: gal4, h: "row-span-2", alt: "Private humidor cabinet" },
  { src: gal5, h: "row-span-1", alt: "Crystal whiskey and cigar ashtray" },
  { src: gal6, h: "row-span-1", alt: "Quiet leather corner of the lounge" },
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
          Schedule a Visit
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
              Schedule a Visit
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
            Established in spirit · Private members only
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-serif text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl text-cream">
            More than a cigar lounge.
            <br />
            <span className="italic text-gradient-gold">A community</span> built around
            experiences, connections and great conversations.
          </h1>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-8 max-w-xl text-base md:text-lg text-cream/70 leading-relaxed">
            Premium cigars, exclusive events, business networking and unforgettable moments —
            in a private setting designed for those who value the slow art of conversation.
          </p>
        </Reveal>
        <Reveal delay={420}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold">
              Schedule a Visit <ArrowRight size={14} />
            </a>
            <a href="#about" className="btn-ghost-gold">
              Learn More
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 text-[0.65rem] tracking-[0.4em] uppercase animate-shimmer">
        Scroll
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
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-cream mb-8">
            A house built for the
            <span className="italic text-gradient-gold"> slow ritual </span>
            of good company.
          </h2>
          <div className="space-y-5 text-cream/70 leading-relaxed">
            <p>
              Stein Premium began the way the best institutions do — with a small group of
              friends, a humidor of carefully chosen cigars, and the conviction that the
              best conversations still happen in person, unhurried, behind a closed door.
            </p>
            <p>
              What started as a private corner has grown into a members' lounge for
              founders, professionals and connoisseurs. A place where business gets done
              over a Cohiba, where a Friday night becomes a poker hand worth telling
              about, and where strangers leave as partners.
            </p>
            <p>
              Our mission is simple: protect the craft, curate the company, and keep the
              door open only to those who understand the difference.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat n="180+" l="Members" />
            <Stat n="42" l="Events / yr" />
            <Stat n="9" l="Years" />
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
            The Experience
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            What we offer
          </h2>
          <p className="mt-6 text-cream/60 leading-relaxed">
            Six ways to spend an evening at Stein — every one built on craft, discretion
            and the company you choose to keep.
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
                <p className="eyebrow mb-4">0{i + 1} · Experience</p>
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
            Membership
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Become a member
          </h2>
          <p className="mt-6 text-cream/60 leading-relaxed">
            Three tiers, one standard of service. All memberships include a personal
            humidor and standing reservations.
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
                    Most Chosen
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
                  Become a Member
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
            Gallery
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Inside the lounge
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
            Find Us
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-cream">
            Visit Stein Premium
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
                Reservations and member services — we answer personally.
              </p>
              <div className="space-y-4 text-sm">
                <a href="tel:+15551234567" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold" /> +1 (555) 123-4567
                </a>
                <a href="tel:+15557654321" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold" /> +1 (555) 765-4321
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
                <h3 className="font-serif text-2xl text-cream">Opening Hours</h3>
              </div>
              <ul className="space-y-3 text-sm text-cream/75 mb-8">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Mon — Thu</span><span className="text-gold">5pm — 1am</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Fri — Sat</span><span className="text-gold">5pm — 3am</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span><span className="text-cream/40">Members only</span>
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
                <h3 className="font-serif text-2xl text-cream">Address</h3>
              </div>
              <address className="not-italic text-cream/75 text-sm leading-relaxed mb-8">
                42 Madison Avenue<br />
                Penthouse Floor<br />
                New York, NY 10010<br />
                United States
              </address>
              <a
                href="https://maps.google.com/?q=42+Madison+Avenue+New+York"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-gold w-full mb-6"
              >
                Get Directions <ArrowRight size={14} />
              </a>
              <div className="flex items-start gap-3 text-sm text-cream/65">
                <Car size={16} className="text-gold mt-1 shrink-0" />
                <p>
                  Complimentary valet for members. Public parking available across the street
                  on Madison & 27th.
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
            <span className="gold-rule mr-3" /> Reservations
            <span className="gold-rule ml-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-7xl leading-[1.05] text-cream mb-8">
            Join our
            <span className="italic text-gradient-gold"> community</span>.
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Schedule a private visit. Walk the humidor, meet the keeper, share an evening
            with us — and see if Stein Premium is the room you've been looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/15551234567"
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
        <p>© {new Date().getFullYear()} Stein Premium · All rights reserved</p>
        <p className="text-cream/30">Crafted with discretion</p>
      </div>
    </footer>
  );
}

/* ───────────── WHATSAPP FLOAT ───────────── */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold text-ink shadow-[0_15px_40px_-10px_rgba(200,164,107,0.6)] group-hover:scale-110 transition-transform duration-300">
        <MessageCircle size={24} strokeWidth={1.8} />
      </span>
    </a>
  );
}
