import Image from "next/image";
import type { ReactNode } from "react";

const logo = "/brand/logo-happy-day.png.png";
const footerLogo = "/brand/logotipo-happyday-2.png.png";

const heroAssets = {
  logo: "/brand/logotipo-happyday-2.png.png",
  background: "/brand/hero-background-dark-textura-premium.png.png",
  children: "/brand/hero-criancas-moldura-quebra-cabeca-premium-2.png",
};

const photos = {
  hero: "/brand/criancas-3.jpg.jpeg",
  welcome: "/brand/criancas-4.jpg.jpeg",
  garden: "/brand/criancas-11.jpg.jpeg",
  projects: "/brand/criancas-12.jpg.jpeg",
  culture: "/brand/apresentacao-criancas.jpg.jpeg",
  family: "/brand/criancas-15.jpg.jpeg",
};

const sectionAssets = {
  trustBg: "/brand/background-secao-02-confianca-light.png.png",
  trustPuzzle: "/brand/puzzle-azul-secao-02-confianca.png.png",
  reasonsBg: "/brand/background-secao-03-dez-motivos-light.png.png",
  reasonsPuzzle: "/brand/puzzle-colorido-secao-03-dez-motivos.png.png",
  environmentsBg: "/brand/background-secao-04-ambientes-light.png.png",
  yellowPuzzle: "/brand/puzzle-amarelo-elemento-decorativo-2.png.png",
  methodologyBg: "/brand/background-secao-05-metodologia-dark.png.png",
  differentialsBg: "/brand/background-secao-06-diferenciais-light.png.png",
  unitsBg: "/brand/background-secao-07-unidades-light.png.png",
  mapBg: "/brand/background-secao-08-mapa-familiar-dark.png.png",
  finalCtaBg: "/brand/background-secao-09-cta-final-light.png.png",
  footerBg: "/brand/background-secao-10-footer-dark.png.png",
};

const iconAssets = {
  agendaVisit: "/brand/2/icon-agenda-visita.png.png",
  heroIndicators: [
    "/brand/2/icon-30-anos-de-tradição-amarelo.png.png",
    "/brand/2/icon-acolhimento-próximo.png.png",
    "/brand/2/icon-proposta-pedagógica-viva.png.png",
    "/brand/2/icon-desenvolvimento-integral.png.png",
  ],
  trust: {
    tradition: "/brand/2/icon-30-anos-de-tradição-azul.png.png",
    care: "/brand/2/icon-cuidado-proximo-todos-os-dias.png.png",
    referrals: "/brand/2/icon-famílias-que-chegam-por-indicação.png.png",
    safe: "/brand/2/icon-ambiente-seguro-e-acolhedor.png.png",
  },
  reasonsFeature: "/brand/3/icon-criança-clareza-responsaveis.png.png",
  reasons: [
    "/brand/3/icon-30-anos-de-tradição-amarelo.png.png",
    "/brand/3/icon-atenção-personalizada.png.png",
    "/brand/3/icon-turmas-menores.png.png",
    "/brand/3/icon-infraestrutura-viva.png.png",
    "/brand/3/icon-aprendizagem-lúdica.png.png",
    "/brand/3/icon-formação-integral.png.png",
    "/brand/3/icon-equipe-cuidadosa.png.png",
    "/brand/3/icon-comunicação-clara.png.png",
    "/brand/3/icon-valores-para-conviver.png.png",
    "/brand/3/icon-preparo-para-futuro.png.png",
  ],
  reasonsCta: "/brand/3/icon-mais-que-uma-escola.png",
  environments: {
    yard: "/brand/4/icon-também acontece-no-quintal.png.png",
    projects: "/brand/4/icon-projetos-que -despertam-curiosidade.png.png",
    family: "/brand/4/icon-família-perto-escola.png.png",
    welcome: "/brand/4/icon-ambientes-acolhem.png.png",
  },
  methodology: [
    "/brand/4/icon-explorar.png.png",
    "/brand/4/icon-criar.png.png",
    "/brand/4/icon-conviver.png.png",
    "/brand/4/icon-crescer.png.png",
  ],
  formation: {
    Cognitivo: "/brand/4/icon-cognitivo.png.png",
    Emocional: "/brand/4/icon-emocional.png.png",
    Social: "/Icons/icon-social.png.png",
    Físico: "/Icons/icon-fisico.png.png",
    Cultural: "/Icons/icon-cultural.png.png",
  },
  mapSteps: [
    "/Icons/icon-perfil.png.png",
    "/Icons/icon-rotina-familiar.png.png",
    "/Icons/icon-unidade-indicada.png.png",
    "/Icons/icon-proximos-passos-escolas.png.png",
  ],
  mapBenefits: [
    "/Icons/icon-seguranca-decisao.png.png",
    "/Icons/icon-decisão-carinhio.png.png",
    "/Icons/icon-indicacao.png.png",
    "/Icons/icon-acompanhamento-família.png.png",
  ],
  finalPedagogicalTeam: "/Icons/icon-falar-equipe-pedagogica.png.png",
};

const reasonPuzzleNumbers = Array.from(
  { length: 10 },
  (_, index) => `/brand/puzzle-${String(index + 1).padStart(2, "0")}.png.png`,
);

const units = ["Vila Mariana", "Vila das Mercês", "Utinga", "Progresso"];

const navItems = [
  ["A Escola", "#"],
  ["Proposta", "#proposta"],
  ["Ambientes", "#ambientes"],
  ["Diferenciais", "#diferenciais"],
  ["Unidades", "#unidades"],
];

const heroIndicators = [
  { title: "Mais de 30 anos de tradição", icon: iconAssets.heroIndicators[0], bar: "bg-[#FFCC29]" },
  { title: "Acolhimento próximo", icon: iconAssets.heroIndicators[1], bar: "bg-[#ED3237]" },
  { title: "Proposta pedagógica viva", icon: iconAssets.heroIndicators[2], bar: "bg-[#77E7FF]" },
  { title: "Desenvolvimento integral", icon: iconAssets.heroIndicators[3], bar: "bg-[#F4E800]" },
];

const trustHighlights = [
  {
    title: "Mais de 30 anos de tradição",
    text: "Uma história construída com cuidado, consistência pedagógica e proximidade real com as famílias.",
    tone: "blue",
    icon: iconAssets.trust.tradition,
  },
  {
    title: "Famílias que chegam por indicação",
    text: "A confiança se espalha no boca a boca de quem viveu a rotina Happy Day por perto.",
    tone: "green",
    icon: iconAssets.trust.referrals,
  },
  {
    title: "Cuidado próximo todos os dias",
    text: "Turmas menores, escuta atenta e educadores presentes em cada fase da infância.",
    tone: "yellow",
    icon: iconAssets.trust.care,
  },
  {
    title: "Ambiente seguro e acolhedor",
    text: "Espaços preparados para brincar, aprender, conviver e se sentir em casa.",
    tone: "red",
    icon: iconAssets.trust.safe,
  },
];

const reasons = [
  ["Tradição reconhecida", "Mais de três décadas dedicadas a uma educação infantil afetiva, organizada e confiável."],
  ["Atenção personalizada", "Cada criança é acompanhada em seu ritmo, com um olhar próximo para suas descobertas."],
  ["Turmas menores", "Rotina mais tranquila, vínculos mais fortes e mais espaço para escuta individual."],
  ["Infraestrutura viva", "Ambientes amplos, arejados, verdes e pensados para o bem-estar da criança."],
  ["Aprendizagem lúdica", "Projetos, brincadeiras, arte e investigação transformam curiosidade em conhecimento."],
  ["Formação integral", "Desenvolvimento cognitivo, emocional, social, físico e cultural no mesmo percurso."],
  ["Equipe cuidadosa", "Educadores preparados para acolher, orientar e inspirar com presença diária."],
  ["Comunicação clara", "Famílias acompanham a rotina com proximidade, transparência e segurança."],
  ["Valores para conviver", "Respeito, empatia, autonomia e responsabilidade fazem parte do cotidiano."],
  ["Preparo para o futuro", "A criança cresce com repertório, criatividade, confiança e vontade de aprender."],
];

const differentials = [
  {
    title: "Google Education",
    text: "Tecnologia aplicada com equilíbrio, intenção pedagógica e acompanhamento.",
    image: "/brand/Google%20Education.jpg",
  },
  {
    title: "Mackenzie Educacional",
    text: "Base estruturada, reconhecida e conectada ao desenvolvimento da criança.",
    image: "/brand/mackenzie-educacional.png",
  },
  {
    title: "Valores cristãos",
    text: "Convivência guiada por respeito, empatia, responsabilidade e cuidado.",
    image: "/brand/valores-cristaos-3.png.png",
    featured: true,
  },
  {
    title: "Profissionais capacitados",
    text: "Equipe preparada para unir conhecimento, afeto e presença no dia a dia.",
    image: "/brand/profissionais-capacitados.png",
  },
];

const learningFlow = [
  ["Explorar", "A criança observa, toca, pergunta e descobre o mundo em experiências reais."],
  ["Criar", "Arte, projetos e brincadeiras abrem espaço para expressão e pensamento."],
  ["Conviver", "O grupo ensina respeito, linguagem, autonomia e cuidado com o outro."],
  ["Crescer", "Cada etapa fortalece confiança, repertório e prazer em aprender."],
];

const formation = ["Cognitivo", "Emocional", "Social", "Físico", "Cultural"];

const tones: Record<string, string> = {
  blue: "bg-[#0098DA]",
  green: "bg-[#A8CF45]",
  yellow: "bg-[#FFCC29]",
  red: "bg-[#ED3237]",
};

const toneStyles = [
  { text: "text-[#0098DA]", border: "border-t-[#0098DA]", bg: "bg-[#0098DA]", soft: "bg-[#0098DA]/10" },
  { text: "text-[#A8CF45]", border: "border-t-[#A8CF45]", bg: "bg-[#A8CF45]", soft: "bg-[#A8CF45]/10" },
  { text: "text-[#FFB923]", border: "border-t-[#FFCC29]", bg: "bg-[#FFCC29]", soft: "bg-[#FFCC29]/14" },
  { text: "text-[#ED3237]", border: "border-t-[#ED3237]", bg: "bg-[#ED3237]", soft: "bg-[#ED3237]/10" },
];

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto ${className}`} style={{ width: "min(1240px, calc(100% - 32px))" }}>
      {children}
    </div>
  );
}

function BrandRail({ className = "" }: { className?: string }) {
  return (
    <div className={`grid h-2 grid-cols-4 overflow-hidden rounded-full ${className}`}>
      <span className="bg-[#0098DA]" />
      <span className="bg-[#A8CF45]" />
      <span className="bg-[#FFCC29]" />
      <span className="bg-[#ED3237]" />
    </div>
  );
}

function BrandIcon({ src, className = "" }: { src: string; className?: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={160}
      height={160}
      className={`h-auto max-h-full max-w-full object-contain ${className}`}
    />
  );
}

function HeroIcon({ type, className = "" }: { type: string; className?: string }) {
  const shared = {
    width: 54,
    height: 54,
    viewBox: "0 0 54 54",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true,
  };

  if (type === "heart") {
    return (
      <svg {...shared}>
        <circle cx="27" cy="27" r="24" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M27 38s-11-6.7-11-15.1c0-4.1 2.8-7 6.3-7 2.1 0 3.8 1 4.7 2.6.9-1.6 2.6-2.6 4.7-2.6 3.5 0 6.3 2.9 6.3 7C38 31.3 27 38 27 38Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "book") {
    return (
      <svg {...shared}>
        <circle cx="27" cy="27" r="24" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15 17.5h8.5c3 0 4.5 1.7 4.5 4.8v16.2c0-2.8-1.6-4.3-4.5-4.3H15V17.5Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M39 17.5h-8.5c-3 0-4.5 1.7-4.5 4.8v16.2c0-2.8 1.6-4.3 4.5-4.3H39V17.5Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (type === "sprout") {
    return (
      <svg {...shared}>
        <circle cx="27" cy="27" r="24" stroke="currentColor" strokeWidth="1.6" />
        <path d="M27 39V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M27 25c-7.5-1.2-10.4-5.4-9.3-11.1 5.9.5 9.6 4.2 9.3 11.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M28 31c7.2-.8 10.5-4.4 10-10.5-6.3.2-10.2 3.8-10 10.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <circle cx="27" cy="27" r="24" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m27 13.5 3.9 8 8.8 1.3-6.4 6.2 1.5 8.7-7.8-4.1-7.8 4.1 1.5-8.7-6.4-6.2 8.8-1.3 3.9-8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M15 37.5c2 3.1 6.3 5 12 5s10-1.9 12-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function LineIcon({ type, className = "" }: { type: string; className?: string }) {
  const shared = {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true,
  };

  if (type === "location") {
    return (
      <svg {...shared}>
        <path d="M24 42s12-11.4 12-23A12 12 0 0 0 12 19c0 11.6 12 23 12 23Z" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="24" cy="19" r="4.3" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    );
  }

  if (type === "school") {
    return (
      <svg {...shared}>
        <path d="M8 40h32V19L24 9 8 19v21Z" stroke="currentColor" strokeWidth="2.1" />
        <path d="M18 40V28h12v12M16 22h16M24 9v9" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg {...shared}>
        <circle cx="24" cy="18" r="6" stroke="currentColor" strokeWidth="2.1" />
        <path d="M13 38c1.7-7 5.6-10 11-10s9.3 3 11 10" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M12 25c-3.5.6-6 3.4-7 8M36 25c3.5.6 6 3.4 7 8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...shared}>
        <path d="M11 14h26a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="2.1" />
        <path d="M15 8v8M33 8v8M8 22h32M20 31l3 3 7-8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg {...shared}>
        <path d="M24 7 38 12v10c0 9.7-5.2 16.2-14 20-8.8-3.8-14-10.3-14-20V12l14-5Z" stroke="currentColor" strokeWidth="2.1" />
        <path d="m18 24 4 4 8-9" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "chat") {
    return (
      <svg {...shared}>
        <path d="M10 13h28v19H20l-8 6v-6h-2V13Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
        <path d="M18 23h.2M24 23h.2M30 23h.2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "rocket") {
    return (
      <svg {...shared}>
        <path d="M29 7c5 1 9 5 10 10L27 29l-8-8L29 7Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
        <path d="M18 30 12 36M16 23l-7 2 6 6M25 32l-2 7-6-6M31 16h.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "magnifier") {
    return (
      <svg {...shared}>
        <circle cx="21" cy="21" r="10" stroke="currentColor" strokeWidth="2.1" />
        <path d="m29 29 9 9" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2.1" />
      <path d="M24 12v24M12 24h24" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className={`text-sm font-black uppercase ${light ? "text-[#FFCC29]" : "text-[#0098DA]"}`}>{eyebrow}</p>
      <h2
        className={`mt-4 text-[2rem] font-black leading-[1.08] sm:text-[2.75rem] md:text-[3.35rem] ${
          light ? "text-white" : "text-[#12304A]"
        }`}
      >
        {title}
      </h2>
      {text ? <p className={`mt-5 text-lg leading-8 ${light ? "text-white/82" : "text-[#536B7B]"}`}>{text}</p> : null}
    </div>
  );
}

function PhotoCard({
  src,
  alt,
  title,
  text,
  className = "",
}: {
  src: string;
  alt: string;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <article className={`overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_65px_rgba(35,73,82,0.12)] ${className}`}>
      <div className="relative min-h-[280px]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-black leading-tight text-[#12304A]">{title}</h3>
        <p className="mt-3 text-base leading-7 text-[#536B7B]">{text}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FBF8] text-[#12304A]">
      <section className="relative isolate z-[100] overflow-hidden bg-[#05172A] pb-8 pt-28 text-white md:pb-10 lg:pt-32">
        <Image
          src={heroAssets.background}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_71%_44%,rgba(0,152,218,0.18),transparent_32%),linear-gradient(90deg,rgba(2,12,27,0.66)_0%,rgba(2,12,27,0.26)_52%,rgba(2,12,27,0.52)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#020B16] to-transparent" />
        <Container>
          <header
            className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center justify-between gap-4 rounded-full border border-white/10 bg-[#04182B]/78 px-4 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl lg:gap-6 lg:px-5"
            style={{ width: "calc(100vw - 32px)", maxWidth: "1240px" }}
          >
            <a href="#" aria-label="Inicio Happy Day" className="shrink-0">
              <Image
                src={heroAssets.logo}
                alt="Colégio Happy Day"
                width={460}
                height={118}
                loading="eager"
                fetchPriority="high"
                className="h-auto w-36 sm:w-56 lg:w-[17rem] xl:w-[18rem]"
              />
            </a>
            <nav className="ml-auto hidden items-center gap-5 text-[0.98rem] font-semibold text-white/88 lg:flex xl:gap-7">
              {navItems.map(([label, href], index) => (
                <div key={label} className="flex items-center gap-5 xl:gap-7">
                  {index > 0 ? <span className="h-1.5 w-1.5 rounded-full bg-[#FFCC29]" /> : null}
                  <a href={href} className="transition hover:text-[#FFCC29]">
                    {label}
                  </a>
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hidden min-h-14 items-center gap-3 rounded-full border border-[#FFCC29]/85 bg-[#FFD45A] px-5 py-3 text-sm font-black text-[#15100A] shadow-[0_0_0_2px_rgba(255,204,41,0.22),0_18px_45px_rgba(255,178,21,0.26),inset_0_2px_0_rgba(255,255,255,0.55)] transition hover:-translate-y-0.5 sm:inline-flex xl:px-7"
              >
                <BrandIcon src={iconAssets.agendaVisit} className="w-8 shrink-0" />
                Agendar visita
              </a>
              <a
                href="#"
                aria-label="Agendar visita"
                className="absolute right-3 top-1/2 grid h-12 w-12 shrink-0 -translate-y-1/2 place-items-center rounded-full border border-[#FFE28D] bg-[#FFD45A] text-[#161007] shadow-[0_0_0_2px_rgba(255,204,41,0.22),0_14px_34px_rgba(255,178,21,0.26),inset_0_2px_0_rgba(255,255,255,0.55)] transition hover:scale-[1.03] sm:hidden"
              >
                <BrandIcon src={iconAssets.agendaVisit} className="w-7" />
              </a>
            </div>
          </header>

          <div className="relative z-10 grid w-full max-w-[22.5rem] gap-8 pt-12 sm:mx-auto sm:max-w-none lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-4 lg:pt-11 xl:pt-14">
            <div className="max-w-full lg:max-w-[43rem]">
              <p className="text-[0.72rem] font-black uppercase text-[#FFCC29] sm:text-sm">
                Educação infantil de alto padrão
              </p>
              <h1
                className="mt-6 text-[2.35rem] font-black leading-[0.98] text-white sm:text-[4.35rem] lg:hidden"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", textShadow: "0 18px 48px rgba(0,0,0,0.42)" }}
              >
                <span className="block">Uma infância</span>
                <span className="block text-[#FFB923]" style={{ textShadow: "0 0 28px rgba(255,185,35,0.22)" }}>
                  segura, feliz
                </span>
                <span className="block">e cheia de</span>
                <span className="block">descobertas.</span>
              </h1>
              <h1
                className="mt-6 hidden font-black leading-[0.98] text-white lg:block lg:text-[4.45rem] xl:text-[4.95rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", textShadow: "0 18px 48px rgba(0,0,0,0.42)" }}
              >
                Uma infância
                <br />
                <span className="text-[#FFB923]" style={{ textShadow: "0 0 28px rgba(255,185,35,0.22)" }}>
                  segura, feliz
                </span>
                <br />
                e cheia de
                <br />
                descobertas.
              </h1>
              <p className="mt-6 max-w-full text-base leading-8 text-white/88 sm:max-w-[35rem] sm:text-xl sm:leading-9">
                Acolhimento, presença pedagógica e desenvolvimento integral para que seu filho cresça com{" "}
                <span className="font-black text-[#FFCC29]">confiança</span>,{" "}
                <span className="font-black text-[#FFCC29]">autonomia</span> e{" "}
                <span className="font-black text-[#FFCC29]">alegria</span> todos os dias.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex min-h-16 w-full max-w-full items-center justify-center gap-3 rounded-full border border-[#FFE28D] bg-[#FFD45A] px-5 py-4 text-base font-black text-[#161007] shadow-[0_0_0_2px_rgba(255,204,41,0.2),0_20px_50px_rgba(255,178,21,0.28),inset_0_2px_0_rgba(255,255,255,0.58)] transition hover:-translate-y-0.5 sm:w-auto sm:px-8"
                >
                  <BrandIcon src={iconAssets.agendaVisit} className="w-9 shrink-0" />
                  Agendar visita
                </a>
                <a
                  href="#proposta"
                  className="inline-flex min-h-16 w-full max-w-full items-center justify-center gap-4 rounded-full border border-[#FFB923] bg-[#061B31]/62 px-5 py-4 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#FFE28D] hover:text-[#FFCC29] sm:w-auto sm:px-8"
                >
                  Conhecer a proposta
                  <span className="text-2xl leading-none">→</span>
                </a>
              </div>
            </div>

            <div className="relative hidden min-h-[260px] sm:min-h-[430px] lg:block lg:min-h-[560px] xl:min-h-[620px]">
              <Image
                src={heroAssets.children}
                alt="Crianças no pátio do Colégio Happy Day em uma moldura de quebra-cabeça"
                width={1220}
                height={760}
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1280px) 760px, (min-width: 1024px) 58vw, 100vw"
                className="relative mx-auto h-auto w-full max-w-[22.5rem] drop-shadow-[0_34px_58px_rgba(0,0,0,0.46)] sm:max-w-[780px] lg:absolute lg:left-0 lg:top-1/2 lg:max-w-none lg:-translate-y-1/2 lg:scale-[1.04] xl:-left-8 xl:scale-[1.1]"
              />
            </div>
          </div>

          <div className="relative z-20 mt-6 w-full max-w-[22.5rem] rounded-[1.4rem] border border-white/10 bg-[#031325]/66 px-5 py-5 shadow-[0_28px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur sm:mx-auto sm:max-w-none md:mt-2 md:px-8 lg:px-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {heroIndicators.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-center gap-4 py-2 lg:px-7 ${index > 0 ? "lg:border-l lg:border-[#B8652B]/55" : ""}`}
                >
                  <BrandIcon src={item.icon} className="w-16 shrink-0 sm:w-[4.5rem]" />
                  <div>
                    <p className="text-lg font-semibold leading-tight text-white sm:text-xl">{item.title}</p>
                    <span className={`mt-3 block h-0.5 w-11 rounded-full ${item.bar}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden bg-[#FFF9EE] py-20 md:py-28"
        style={{ backgroundImage: `url(${sectionAssets.trustBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-black uppercase text-[#B66E15]">Confiança para a família</p>
            <h2 className="mx-auto mt-5 max-w-[24rem] text-[1.8rem] font-black leading-[1.08] text-[#071B35] sm:max-w-none sm:text-[4rem] sm:leading-[1.04]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              A escola precisa ser <span className="text-[#C77A12]">bonita</span>{" "}
              <span className="inline sm:inline-block">por fora e <span className="text-[#C77A12]">segura</span> por dentro.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-[68rem] text-xl leading-9 text-[#243A54] lg:text-[1.28rem]">
              Por isso, o Colégio Happy Day combina história, apoio pedagógico e acolhimento com uma rotina que respeita a infância sem abrir mão da estrutura que ela precisa para crescer com <strong className="text-[#C77A12]">confiança</strong>.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative">
              <Image src={sectionAssets.trustPuzzle} alt="" width={130} height={130} className="absolute -bottom-8 -left-7 z-10 hidden w-28 drop-shadow-[0_16px_22px_rgba(0,152,218,0.28)] sm:block" />
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.65rem] border border-[#E8A53A]/70 bg-white shadow-[0_26px_70px_rgba(101,65,24,0.16)] md:min-h-[520px]">
                <Image src={photos.welcome} alt="Crianças do Colégio Happy Day sentadas no jardim" fill loading="eager" sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-[50%_42%]" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {trustHighlights.map((item, index) => {
                const tone = toneStyles[index % toneStyles.length];
                return (
                  <article key={item.title} className={`min-h-[245px] rounded-[1.3rem] border border-[#E8D3B0] border-t-4 ${tone.border} bg-white/88 p-6 text-center shadow-[0_18px_48px_rgba(101,65,24,0.10)] backdrop-blur`}>
                    <div className="mx-auto grid h-24 w-24 place-items-center">
                      <BrandIcon src={item.icon} className={item.title === "Ambiente seguro e acolhedor" ? "w-[5.25rem] sm:w-[5.65rem]" : "w-24"} />
                    </div>
                    <h3 className="mt-6 text-2xl font-black leading-tight text-[#071B35]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-[#243A54]">{item.text}</p>
                    <span className={`mx-auto mt-5 block h-0.5 w-16 rounded-full ${tone.bg}`} />
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="proposta"
        className="relative overflow-hidden bg-[#FFFDF8] py-20 md:py-28"
        style={{ backgroundImage: `url(${sectionAssets.reasonsBg})`, backgroundSize: "cover", backgroundPosition: "top center" }}
      >
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase text-[#C77A12]">10 motivos para escolher o Happy Day</p>
            <h2 className="mt-5 text-[2.35rem] font-black leading-[1.04] text-[#071B35] sm:text-[4rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Uma escolha que aparece na rotina, <span className="text-[#C77A12]">não no discurso.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#243A54]">Mais do que promessas, entregamos o que realmente importa: confiança, cuidado e desenvolvimento todos os dias.</p>
          </div>

          <div className="relative mt-12 rounded-[1.6rem] border border-[#D58A19] bg-[#061B31] p-6 text-white shadow-[0_24px_60px_rgba(4,20,38,0.22)] md:p-9 md:pr-72 lg:pr-80">
            <Image src={sectionAssets.reasonsPuzzle} alt="" width={360} height={285} className="absolute right-0 top-[43%] z-10 hidden w-[21rem] -translate-y-1/2 drop-shadow-[0_22px_34px_rgba(0,0,0,0.24)] md:block lg:-right-2 lg:w-[23rem]" />
            <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-center md:gap-6">
              <div className="grid h-24 w-24 place-items-center md:h-32 md:w-32">
                <BrandIcon src={iconAssets.reasonsFeature} className="w-24 md:w-32" />
              </div>
              <p className="max-w-xl text-[1.55rem] font-black leading-[1.12] sm:text-3xl md:text-[2.45rem] md:leading-tight" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Leveza para a <span className="text-[#FFB923]">criança</span>, clareza para os <span className="text-[#FFB923]">responsáveis</span>.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {reasons.map(([title, text], index) => {
              return (
                <article key={title} className="relative grid min-h-[205px] gap-5 rounded-[1.25rem] border border-[#E5C693] bg-white/90 p-5 shadow-[0_16px_42px_rgba(96,65,25,0.09)] backdrop-blur sm:grid-cols-[140px_1fr]">
                  <Image src={reasonPuzzleNumbers[index]} alt="" width={120} height={120} className="absolute -left-5 top-5 z-10 w-20 drop-shadow-[0_12px_20px_rgba(0,90,140,0.18)] sm:-left-7 sm:w-24" />
                  <div className="grid min-h-32 place-items-center rounded-[1rem] bg-[#061B31]">
                    <BrandIcon src={iconAssets.reasons[index]} className="w-20 sm:w-24" />
                  </div>
                  <div className="self-center">
                    <h3 className="text-2xl font-black leading-tight text-[#071B35]">{title}</h3>
                    <p className="mt-4 text-[1.05rem] leading-8 text-[#243A54]">{text}</p>
                    <span className={`mt-5 block h-1 w-14 rounded-full ${toneStyles[index % toneStyles.length].bg}`} />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 rounded-[1.45rem] border border-[#D58A19] bg-[#061B31] p-7 text-white shadow-[0_24px_60px_rgba(4,20,38,0.18)] md:grid-cols-[140px_1fr_auto] md:items-center">
            <div className="grid h-28 w-28 place-items-center">
              <BrandIcon src={iconAssets.reasonsCta} className="w-28" />
            </div>
            <p className="text-[1.85rem] font-black leading-tight sm:text-3xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Mais do que uma escola, um lugar que faz parte da <span className="text-[#FFB923]">história da sua família.</span>
            </p>
            <a href="#" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#FFE28D] bg-[#FFD45A] px-8 py-4 text-base font-black text-[#161007] shadow-[0_16px_34px_rgba(255,185,35,0.22)] transition hover:-translate-y-0.5">
              <BrandIcon src={iconAssets.agendaVisit} className="w-8 shrink-0" />
              Agendar visita <span className="text-2xl">→</span>
            </a>
          </div>
        </Container>
      </section>

      <section
        id="ambientes"
        className="relative overflow-hidden bg-[#FFFDF8] py-20 md:py-28"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="lg:pt-8">
              <p className="text-sm font-black uppercase text-[#C77A12]">Ambientes e experiências</p>
              <h2 className="mt-5 max-w-[40rem] text-[2.1rem] font-black leading-[1.08] text-[#071B35] sm:text-[3.35rem] sm:leading-[1.06] lg:text-[3.2rem] xl:text-[3.45rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                <span className="block">A infância aprende</span>
                <span className="block">melhor quando tem</span>
                <span className="block text-[#C77A12]">espaço para viver.</span>
              </h2>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-[#243A54]">Fotos reais, rotina viva e ambientes que acolhem movimento, conversa, arte, natureza e descobertas.</p>
            </div>
            <div className="relative">
              <Image src={sectionAssets.yellowPuzzle} alt="" width={128} height={128} className="absolute -right-4 -top-8 z-10 hidden w-24 drop-shadow-xl sm:block" />
              <div className="relative min-h-[300px] overflow-hidden rounded-[1.3rem] border border-[#E09A2A] bg-white shadow-[0_18px_50px_rgba(101,65,24,0.14)] md:min-h-[390px]">
                <Image src={photos.garden} alt="Crianças em atividade ao ar livre" fill loading="eager" sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
              </div>
              <article className="mt-5 grid gap-4 rounded-[1.2rem] border border-[#E09A2A]/70 bg-white p-6 shadow-[0_18px_46px_rgba(101,65,24,0.12)] sm:grid-cols-[80px_1fr] sm:items-center">
                <div className="grid h-20 w-20 place-items-center">
                  <BrandIcon src={iconAssets.environments.yard} className="w-20" />
                </div>
                <div>
                  <h3 className="text-2xl font-black leading-tight text-[#071B35]">Aprender também acontece no quintal</h3>
                  <p className="mt-2 text-[1.05rem] leading-8 text-[#243A54]">O contato com áreas abertas ajuda a criança a brincar com liberdade, explorar e criar memórias de escola.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:mt-20 lg:grid-cols-[0.92fr_1.08fr]">
            {[
              { src: photos.projects, title: "Projetos que despertam curiosidade", text: "Experiências ativas tornam o aprendizado mais concreto, participativo e prazeroso.", icon: iconAssets.environments.projects },
              { src: photos.culture, title: "Família perto da escola", text: "A parceria com os responsáveis fortalece vínculos e dá segurança para cada etapa.", icon: iconAssets.environments.family },
            ].map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.25rem] border border-[#E09A2A]/60 bg-white shadow-[0_16px_44px_rgba(101,65,24,0.11)]">
                <div className="relative min-h-[230px]">
                  <Image src={item.src} alt={item.title} fill loading="eager" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-[80px_1fr] sm:items-center">
                  <div className="grid h-20 w-20 place-items-center">
                    <BrandIcon src={item.icon} className="w-20" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#071B35]">{item.title}</h3>
                    <p className="mt-2 text-[1.05rem] leading-8 text-[#243A54]">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 rounded-[1.35rem] border border-[#D58A19] bg-[#061B31] p-7 text-white shadow-[0_24px_60px_rgba(4,20,38,0.18)] md:grid-cols-[140px_1fr_auto] md:items-center">
            <BrandIcon src={iconAssets.environments.welcome} className="w-24 md:w-28" />
            <p className="text-[1.7rem] font-black leading-[1.12] sm:text-3xl sm:leading-tight" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Ambientes que <span className="text-[#FFB923]">acolhem</span>, experiências que <span className="text-[#FFB923]">transformam</span>.
            </p>
            <a href="#" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#FFE28D] bg-[#FFD45A] px-8 py-4 text-base font-black text-[#161007] shadow-[0_16px_34px_rgba(255,185,35,0.22)] transition hover:-translate-y-0.5">
              <BrandIcon src={iconAssets.agendaVisit} className="w-8 shrink-0" />
              Agendar visita <span className="text-2xl">→</span>
            </a>
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden bg-[#04182B] py-20 text-white md:py-28"
        style={{ backgroundImage: `url(${sectionAssets.methodologyBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#FFCC29]">Metodologia</p>
              <h2 className="mt-6 max-w-[38rem] text-[2.05rem] font-black leading-[1.08] text-white sm:text-[3.05rem] sm:leading-[1.06] lg:text-[3.05rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif", textShadow: "0 16px 42px rgba(0,0,0,0.34)" }}>
                <span className="block">Brincar, investigar</span>
                <span className="block">e conviver fazem</span>
                <span className="block">parte do <span className="text-[#FFB923]">mesmo</span></span>
                <span className="block text-[#FFB923]">aprendizado.</span>
              </h2>
              <p className="mt-7 max-w-xl text-xl leading-9 text-white/86">A criança participa da própria rotina: explora materiais, cria vínculos, se expressa, aprende com o grupo e ganha autonomia.</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {formation.map((item, index) => {
                  const tone = toneStyles[index % toneStyles.length];
                  const icons = ["magnifier", "heart", "people", "rocket", "school"];
                  const formationIcon = iconAssets.formation[item as keyof typeof iconAssets.formation];
                  return (
                    <div key={item} className="grid min-h-20 grid-cols-[56px_1fr] items-center gap-4 rounded-[1rem] border border-[#D58A19]/45 bg-[#061B31]/70 p-4 backdrop-blur">
                      {formationIcon ? <BrandIcon src={formationIcon} className="w-12" /> : <LineIcon type={icons[index]} className={`h-11 w-11 ${tone.text}`} />}
                      <div>
                        <span className={`mb-2 block h-1 w-16 rounded-full ${tone.bg}`} />
                        <p className="text-xl font-black">{item}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {learningFlow.map(([title, text], index) => {
                const tone = toneStyles[index % toneStyles.length];
                return (
                  <article key={title} className={`min-h-[300px] rounded-[1.35rem] border border-[#E6CFAE] border-t-8 ${tone.border} bg-[#FFF9EE] p-8 text-center text-[#071B35] shadow-[0_26px_60px_rgba(0,0,0,0.22)]`}>
                    <div className="mx-auto grid h-24 w-24 place-items-center">
                      <BrandIcon src={iconAssets.methodology[index]} className="w-24" />
                    </div>
                    <h3 className="mt-7 text-3xl font-black sm:text-4xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</h3>
                    <p className="mt-5 text-[1.05rem] leading-8 text-[#243A54]">{text}</p>
                    <span className="mx-auto mt-8 block h-px w-32 bg-[#D58A19]" />
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="diferenciais"
        className="relative overflow-hidden bg-[#FFFDF8] py-20 md:py-28"
        style={{ backgroundImage: `url(${sectionAssets.differentialsBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-black uppercase text-[#0098DA]">Diferenciais</p>
            <h2 className="mt-5 text-[2.05rem] font-black leading-[1.08] text-[#071B35] sm:text-[4rem] sm:leading-[1.04]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Recursos importantes com direção pedagógica e cuidado humano.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#243A54]">Tecnologia, base educacional, valores e equipe preparada aparecem de forma integrada, sem perder o acolhimento da infância.</p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {differentials.map((item, index) => {
              const tone = toneStyles[index % toneStyles.length];
              return (
                <article key={item.title} className="grid gap-7 rounded-[1.35rem] border border-[#E8D3B0] bg-white/90 p-8 shadow-[0_20px_54px_rgba(96,65,25,0.10)] backdrop-blur md:grid-cols-[170px_1fr] md:items-center">
                  <div className="grid min-h-36 place-items-center rounded-[1rem] bg-white p-5">
                    <Image src={item.image} alt={item.title} width={150} height={120} loading="eager" className="max-h-32 w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black leading-tight text-[#071B35]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{item.title}</h3>
                    <span className={`mt-5 block h-0.5 w-16 rounded-full ${tone.bg}`} />
                    <p className="mt-5 text-lg leading-8 text-[#243A54]">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="unidades"
        className="relative overflow-hidden bg-[#FFFCF4] py-20 md:py-28"
        style={{ backgroundImage: `url(${sectionAssets.unitsBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#C77A12]">Unidades</p>
              <h2 className="mt-5 max-w-[38rem] text-[2.1rem] font-black leading-[1.08] text-[#071B35] sm:text-[3.3rem] sm:leading-[1.06] lg:text-[2.35rem] xl:text-[2.7rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                <span className="block">Quatro endereços</span>
                <span className="block">com a mesma essência</span>
                <em className="block font-black">Happy Day.</em>
              </h2>
              <span className="mt-9 block h-1 w-16 rounded-full bg-[#FFCC29]" />
              <p className="mt-8 max-w-lg text-xl leading-9 text-[#243A54]">Escolha a unidade mais conveniente para a sua família e receba orientação para conhecer a proposta de perto.</p>
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              {units.map((unit, index) => {
                const tone = toneStyles[index % toneStyles.length];
                return (
                  <article key={unit} className={`min-h-[255px] rounded-[1.25rem] border border-[#E8D3B0] border-t-4 ${tone.border} bg-white/88 p-8 shadow-[0_20px_54px_rgba(96,65,25,0.10)]`}>
                    <div className={`grid h-16 w-16 place-items-center rounded-full border ${tone.text} ${tone.soft}`}>
                      <LineIcon type="location" className="h-10 w-10" />
                    </div>
                    <h3 className="mt-6 text-[2.1rem] font-black leading-tight text-[#071B35] sm:text-4xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{unit}</h3>
                    <span className={`mt-5 block h-0.5 w-16 rounded-full ${tone.bg}`} />
                    <p className="mt-5 text-[1.05rem] leading-8 text-[#243A54]">Atendimento próximo para orientar sua visita e tirar dúvidas com calma.</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="mt-12 grid gap-6 rounded-[1.2rem] border border-[#E8D3B0] bg-white/82 p-7 shadow-[0_20px_54px_rgba(96,65,25,0.10)] backdrop-blur md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-2xl font-black text-[#071B35]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Estamos prontos para receber você e sua família.</h3>
              <p className="mt-2 text-lg text-[#536B7B]">Fale com nossa equipe e agende sua visita.</p>
            </div>
            <a href="#" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#E8B52A] px-8 py-4 text-base font-black text-[#161007] shadow-[0_14px_32px_rgba(232,181,42,0.22)] transition hover:-translate-y-0.5">
              Falar com nossa equipe
            </a>
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden bg-[#04182B] py-20 text-white md:py-28"
        style={{ backgroundImage: `url(${sectionAssets.mapBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#FFCC29]">Mapa Familiar de Escolha Escolar</p>
              <h2 className="mt-6 max-w-[40rem] text-[2.35rem] font-black leading-[1.06] text-white sm:text-[3.35rem] lg:text-[3.35rem] xl:text-[3.65rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif", textShadow: "0 16px 42px rgba(0,0,0,0.34)" }}>
                <span className="block">Ainda não sabe</span>
                <span className="block">qual a melhor</span>
                <span className="block">escolha para</span>
                <span className="block text-[#FFB923]">o seu filho?</span>
              </h2>
              <p className="mt-7 max-w-xl text-xl leading-9 text-white/86">Criamos um guia rápido e personalizado para ajudar sua família a decidir com mais segurança, clareza e carinho.</p>
              <a href="https://happy-day-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#FFE28D] bg-[#FFD45A] px-7 py-4 text-base font-black text-[#161007] shadow-[0_18px_42px_rgba(255,185,35,0.28)] transition hover:-translate-y-0.5">
                Descobrir a melhor opção para o meu filho <span className="text-2xl">→</span>
              </a>
            </div>
            <div className="rounded-[1.6rem] border border-[#D58A19]/45 bg-[#061B31]/68 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur md:p-8">
              {["Perfil da criança", "Rotina da família", "Unidade mais indicada", "Próximo passo com a escola"].map((item, index) => {
                const tone = toneStyles[index % toneStyles.length];
                const widths = ["w-7/12", "w-8/12", "w-10/12", "w-11/12"];
                return (
                  <div key={item} className="mb-5 grid gap-5 rounded-[1rem] border border-[#D58A19]/35 bg-white/5 p-5 last:mb-0 sm:grid-cols-[74px_1fr_54px] sm:items-center">
                    <div className="grid h-16 w-16 place-items-center">
                      <BrandIcon src={iconAssets.mapSteps[index]} className="w-16" />
                    </div>
                    <div>
                      <p className="text-2xl font-black" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{item}</p>
                      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/14">
                        <div className={`h-full rounded-full ${tone.bg} ${widths[index]}`} />
                      </div>
                    </div>
                    <span className={`text-3xl font-black ${tone.text}`}>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-12 grid gap-5 rounded-[1.2rem] border border-[#D58A19]/35 bg-[#061B31]/68 p-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {["Mais segurança na decisão", "Decisões com clareza e carinho", "Recomendação personalizada", "Acompanhamento da família"].map((item, index) => (
              <div key={item} className={`flex items-center gap-4 ${index > 0 ? "lg:border-l lg:border-[#D58A19]/55 lg:pl-6" : ""}`}>
                <BrandIcon src={iconAssets.mapBenefits[index]} className="w-14 shrink-0" />
                <p className="text-xl font-semibold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden bg-[#FFFDF8] py-20 md:py-28"
        style={{ backgroundImage: `url(${sectionAssets.finalCtaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative min-h-[520px] overflow-hidden rounded-[1.45rem] border border-[#E8B64B]/70 bg-white shadow-[0_24px_70px_rgba(96,65,25,0.13)]">
              <Image src={photos.family} alt="Família em evento do Colégio Happy Day" fill loading="eager" sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
            </div>
            <div className="rounded-[1.45rem] border border-[#E8D3B0] bg-white/88 p-7 shadow-[0_24px_70px_rgba(96,65,25,0.10)] backdrop-blur md:p-12">
              <Image src={logo} alt="Colégio Happy Day" width={290} height={70} className="h-auto w-56" />
              <BrandRail className="mt-8 h-2" />
              <h2 className="mt-9 text-[2.05rem] font-black leading-[1.08] text-[#071B35] sm:text-[3.7rem] sm:leading-[1.06]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Venha conhecer uma escola onde seu filho pode se sentir em casa.
              </h2>
              <span className="mt-8 block h-px w-24 bg-[#C77A12]" />
              <p className="mt-8 text-xl leading-9 text-[#243A54]">Agende uma conversa com a equipe pedagógica e descubra como a Happy Day une tradição, acolhimento, segurança e formação integral.</p>
              <a href="#formulario" className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#FFE28D] bg-[#FFD45A] px-8 py-4 text-base font-black text-[#161007] shadow-[0_18px_42px_rgba(255,185,35,0.22)] transition hover:-translate-y-0.5">
                <BrandIcon src={iconAssets.finalPedagogicalTeam} className="w-6 shrink-0" />
                Falar com a equipe pedagógica
              </a>
            </div>
          </div>
        </Container>
      </section>

      <footer
        className="relative overflow-hidden bg-[#04182B] py-16 text-white md:py-24"
        style={{ backgroundImage: `url(${sectionAssets.footerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr_0.85fr] lg:items-center">
            <div>
              <Image src={footerLogo} alt="Colégio Happy Day" width={460} height={118} className="h-auto w-72 lg:w-80" />
              <div className="mt-10 flex items-center gap-5 text-[#FFCC29]">
                <span className="h-px flex-1 bg-[#D58A19]" />
                <HeroIcon type="heart" className="h-9 w-9" />
                <span className="h-px flex-1 bg-[#D58A19]" />
              </div>
              <p className="mt-8 max-w-md text-xl leading-10 text-white/86">Mais de 30 anos de educação acolhedora, segura e próxima das famílias.</p>
            </div>
            <div className="border-y border-[#D58A19]/35 py-8 lg:border-x lg:border-y-0 lg:px-10">
              <p className="text-center text-2xl font-black uppercase text-[#FFCC29]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Unidades</p>
              <div className="mt-8 grid gap-4">
                {units.map((unit) => (
                  <div key={unit} className="flex items-center gap-5 rounded-[1rem] border border-[#D58A19]/55 bg-white/5 px-5 py-4 backdrop-blur">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white/8 text-[#FFCC29]">
                      <LineIcon type="location" className="h-8 w-8" />
                    </span>
                    <p className="text-2xl font-black">{unit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black uppercase text-[#FFCC29]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Happy Day</h3>
              <span className="mt-6 block h-0.5 w-16 bg-[#FFCC29]" />
              <p className="mt-8 text-xl leading-10 text-white/86">Confiança, afeto, aprendizagem ativa e formação integral para cada fase da infância.</p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
