import Image from "next/image";
import type { ReactNode } from "react";

const logo = "/brand/logo-happy-day.png.png";

const photos = {
  hero: "/brand/criancas-3.jpg.jpeg",
  welcome: "/brand/criancas-4.jpg.jpeg",
  garden: "/brand/criancas-11.jpg.jpeg",
  projects: "/brand/criancas-12.jpg.jpeg",
  culture: "/brand/apresentacao-criancas.jpg.jpeg",
  family: "/brand/criancas-15.jpg.jpeg",
};

const units = ["Vila Mariana", "Vila das Mercês", "Utinga", "Progresso"];

const navItems = [
  ["Proposta", "#proposta"],
  ["Ambientes", "#ambientes"],
  ["Diferenciais", "#diferenciais"],
  ["Unidades", "#unidades"],
];

const trustHighlights = [
  {
    title: "Mais de 30 anos de tradição",
    text: "Uma história construída com cuidado, consistência pedagógica e proximidade real com as famílias.",
    tone: "blue",
  },
  {
    title: "Famílias que chegam por indicação",
    text: "A confiança se espalha no boca a boca de quem viveu a rotina Happy Day por perto.",
    tone: "green",
  },
  {
    title: "Cuidado próximo todos os dias",
    text: "Turmas menores, escuta atenta e educadores presentes em cada fase da infância.",
    tone: "yellow",
  },
  {
    title: "Ambiente seguro e acolhedor",
    text: "Espaços preparados para brincar, aprender, conviver e se sentir em casa.",
    tone: "red",
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
    image: "/brand/valores-eticas-crist%C3%A3os.png",
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

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-[0.95rem] font-black text-[#12304A]">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="h-14 rounded-2xl border border-[#CFE3EA] bg-white px-4 text-base font-semibold text-[#12304A] outline-none transition placeholder:text-[#7D94A0] focus:border-[#0098DA] focus:ring-4 focus:ring-[#0098DA]/15"
      />
    </label>
  );
}

function LeadForm() {
  return (
    <aside id="formulario" className="rounded-[2rem] bg-white p-5 shadow-[0_28px_80px_rgba(0,63,96,0.18)] sm:p-7">
      <BrandRail />
      <div className="mt-6">
        <p className="text-sm font-black uppercase text-[#0098DA]">Atendimento pedagógico</p>
        <h2 className="mt-2 text-[1.65rem] font-black leading-tight text-[#12304A] sm:text-[1.9rem]">
          Receba orientação para conhecer a Happy Day.
        </h2>
        <p className="mt-3 text-base leading-7 text-[#536B7B]">
          Conte um pouco sobre sua família e nossa equipe retorna com o melhor próximo passo.
        </p>
      </div>

      <form className="mt-7 grid gap-4">
        <Field label="Nome do responsável" placeholder="Seu nome" />
        <Field label="Nome da criança" placeholder="Nome da criança" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Idade" placeholder="Ex.: 4 anos" />
          <Field label="WhatsApp" placeholder="(00) 00000-0000" />
        </div>
        <Field label="E-mail" placeholder="voce@email.com" type="email" />
        <label className="grid gap-2 text-[0.95rem] font-black text-[#12304A]">
          Unidade de interesse
          <select className="h-14 rounded-2xl border border-[#CFE3EA] bg-white px-4 text-base font-semibold text-[#536B7B] outline-none transition focus:border-[#0098DA] focus:ring-4 focus:ring-[#0098DA]/15">
            <option>Escolha uma unidade</option>
            {units.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="mt-2 min-h-14 rounded-2xl bg-[#0098DA] px-6 py-4 text-base font-black text-white shadow-[0_18px_36px_rgba(0,152,218,0.3)] transition hover:-translate-y-0.5 hover:bg-[#007DB4]"
        >
          Quero conversar com a escola
        </button>
        <p className="text-center text-sm font-semibold leading-6 text-[#6B8491]">
          Retorno humano, claro e sem compromisso.
        </p>
      </form>
    </aside>
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
      <section className="bg-[#EAF8F2] pb-16 pt-5 md:pb-24">
        <Container>
          <header className="flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/80 bg-white px-4 py-3 shadow-[0_18px_55px_rgba(38,82,77,0.10)]">
            <a href="#" aria-label="Inicio Happy Day" className="shrink-0">
              <Image
                src={logo}
                alt="Colégio Happy Day"
                width={290}
                height={70}
                loading="eager"
                fetchPriority="high"
                className="h-auto w-40 sm:w-52"
              />
            </a>
            <nav className="hidden items-center gap-7 text-sm font-black text-[#365569] lg:flex">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} className="transition hover:text-[#0098DA]">
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#formulario"
              className="hidden rounded-2xl bg-[#0098DA] px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(0,152,218,0.24)] transition hover:-translate-y-0.5 sm:inline-flex"
            >
              Agendar conversa
            </a>
          </header>

          <div className="mx-auto mt-12 max-w-5xl text-center md:mt-16">
      <p className="text-sm font-black uppercase text-[#0098DA]">Colégio infantil de alto padrão</p>
            <h1 className="mt-5 text-[2.8rem] font-black leading-[1.02] text-[#12304A] sm:text-[4.3rem] lg:text-[5.8rem]">
              Uma infância feliz, segura e bem acompanhada.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4C6876] sm:text-2xl sm:leading-10">
              Acolhimento, tradição e aprendizagem ativa para seu filho crescer com confiança, alegria e presença pedagógica.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[430px_minmax(0,1fr)] xl:items-start">
            <LeadForm />

            <div className="grid gap-5">
              <div className="relative min-h-[430px] overflow-hidden rounded-[2.2rem] bg-white p-3 shadow-[0_30px_90px_rgba(38,82,77,0.18)] sm:min-h-[540px] xl:min-h-[650px]">
                <div className="absolute inset-3 overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={photos.hero}
                    alt="Crianças no pátio do Colégio Happy Day"
                    fill
                    loading="eager"
                    fetchPriority="high"
                    sizes="(min-width: 1280px) 760px, 100vw"
                    className="object-cover object-[50%_70%]"
                  />
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] bg-white/94 p-5 shadow-[0_16px_38px_rgba(0,63,96,0.14)] backdrop-blur">
                  <BrandRail className="mb-4" />
                  <p className="text-xl font-black leading-tight text-[#12304A]">
                    Rotina com natureza, brincadeira, vínculos e intenção pedagógica.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {["Mais de 30 anos de tradição", "Famílias que chegam por indicação", "Acompanhamento próximo"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] bg-white p-5 shadow-[0_16px_45px_rgba(38,82,77,0.10)]"
                    >
                      <div
                        className={`mb-4 h-2 rounded-full ${
                          index === 0 ? "bg-[#0098DA]" : index === 1 ? "bg-[#A8CF45]" : "bg-[#FFCC29]"
                        }`}
                      />
                      <p className="text-lg font-black leading-tight text-[#12304A]">{item}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#FFF8E5] py-18 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <SectionIntro
                align="left"
                eyebrow="Confiança para a família"
                title="A escola precisa ser bonita por fora e segura por dentro."
                text="Por isso, a Happy Day combina história, acompanhamento próximo e uma rotina que respeita a infância sem abrir mão de estrutura."
              />
              <div className="mt-8 overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(95,81,46,0.12)]">
                <div className="relative min-h-[360px]">
                  <Image
                    src={photos.welcome}
                    alt="Crianças do Colégio Happy Day sentadas no jardim"
                    loading="eager"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover lg:object-[50%_32%]"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {trustHighlights.map((item) => (
                <article key={item.title} className="min-h-[250px] rounded-[1.8rem] bg-white p-6 shadow-[0_18px_55px_rgba(95,81,46,0.10)]">
                  <div className={`mb-6 h-2 rounded-full ${tones[item.tone]}`} />
                  <h3 className="text-2xl font-black leading-tight text-[#12304A]">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#536B7B]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="proposta" className="bg-[#0098DA] py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <SectionIntro
                align="left"
                light
                eyebrow="10 motivos"
                title="Uma escolha que aparece na rotina, não só no discurso."
                text="Os diferenciais ficam mais fortes quando são sentidos todos os dias pela criança e pela família."
              />
              <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-[0_22px_65px_rgba(0,72,112,0.18)]">
                <BrandRail />
                <p className="mt-6 text-2xl font-black leading-tight text-[#12304A]">
                  Leveza para a criança, clareza para os responsáveis.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map(([title, text], index) => (
                <article
                  key={title}
                  className="min-h-[245px] rounded-[1.8rem] bg-white p-6 shadow-[0_18px_55px_rgba(0,72,112,0.16)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-black uppercase text-[#0098DA]">{String(index + 1).padStart(2, "0")}</span>
                    <span
                      className={`h-2 w-20 rounded-full ${
                        index % 4 === 0
                          ? "bg-[#0098DA]"
                          : index % 4 === 1
                            ? "bg-[#A8CF45]"
                            : index % 4 === 2
                              ? "bg-[#FFCC29]"
                              : "bg-[#ED3237]"
                      }`}
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-black leading-tight text-[#12304A]">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#536B7B]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="ambientes" className="bg-[#EAF8F2] py-20 md:py-28">
        <Container>
          <SectionIntro
            eyebrow="Ambientes e experiências"
            title="A infância aprende melhor quando tem espaço para viver."
            text="Fotos reais, rotina viva e ambientes que acolhem movimento, conversa, arte, natureza e descobertas."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <PhotoCard
              src={photos.garden}
              alt="Criancas em atividade ao ar livre"
              title="Aprender também acontece no quintal"
              text="O contato com áreas abertas ajuda a criança a brincar com liberdade, explorar e criar memórias de escola."
              className="lg:[&>div:first-child]:min-h-[560px]"
            />
            <div className="grid gap-5">
              <PhotoCard
                src={photos.projects}
                alt="Criancas em atividade coletiva"
                title="Projetos que despertam curiosidade"
                text="Experiencias ativas tornam o aprendizado mais concreto, participativo e prazeroso."
              />
              <PhotoCard
                src={photos.culture}
                alt="Evento cultural com crianças e famílias"
                title="Familia perto da escola"
                text="A parceria com os responsáveis fortalece vínculos e dá segurança para cada etapa."
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionIntro
                align="left"
                eyebrow="Metodologia"
                title="Brincar, investigar e conviver fazem parte do mesmo aprendizado."
                text="A criança participa da própria rotina: explora materiais, cria hipóteses, se expressa, aprende com o grupo e ganha autonomia."
              />
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {formation.map((item, index) => (
                  <div key={item} className="rounded-[1.5rem] bg-[#F7FBF8] p-5 shadow-[0_14px_42px_rgba(0,63,96,0.07)]">
                    <div
                      className={`mb-4 h-2 rounded-full ${
                        index % 4 === 0 ? "bg-[#0098DA]" : index % 4 === 1 ? "bg-[#A8CF45]" : index % 4 === 2 ? "bg-[#FFCC29]" : "bg-[#ED3237]"
                      }`}
                    />
                    <p className="text-xl font-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {learningFlow.map(([title, text], index) => (
                <article key={title} className="min-h-[210px] rounded-[1.8rem] border border-[#DCEAF0] bg-white p-6 shadow-[0_16px_48px_rgba(0,63,96,0.08)]">
                  <div
                    className={`mb-6 h-2 rounded-full ${
                      index === 0 ? "bg-[#0098DA]" : index === 1 ? "bg-[#FFCC29]" : index === 2 ? "bg-[#A8CF45]" : "bg-[#ED3237]"
                    }`}
                  />
                  <h3 className="text-2xl font-black leading-tight">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#536B7B]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="diferenciais" className="bg-[#FFF4C8] py-20 md:py-28">
        <Container>
          <SectionIntro
            eyebrow="Diferenciais"
            title="Recursos importantes com direção pedagógica e cuidado humano."
            text="Tecnologia, base educacional, valores e equipe preparada aparecem de forma integrada, sem perder o acolhimento da infância."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item) => (
              <article
                key={item.title}
                className={`min-h-[320px] rounded-[1.8rem] bg-white p-6 shadow-[0_20px_60px_rgba(93,81,30,0.12)] ${
                  item.featured ? "ring-4 ring-[#A8CF45]/35" : ""
                }`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-[1.4rem] bg-[#F7FBF8] p-4 shadow-[0_12px_32px_rgba(0,63,96,0.08)] lg:h-32 lg:w-32 lg:p-5">
                  <Image src={item.image} alt={item.title} width={96} height={96} className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-7 text-2xl font-black leading-tight text-[#12304A]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#536B7B]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="unidades" className="bg-[#12304A] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionIntro
              align="left"
              light
              eyebrow="Unidades"
              title="Quatro endereços com a mesma essência Happy Day."
              text="Escolha a unidade mais conveniente para a sua família e receba orientação para conhecer a proposta de perto."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {units.map((unit, index) => (
                <article key={unit} className="rounded-[1.7rem] bg-white p-6 text-[#12304A] shadow-[0_18px_55px_rgba(0,0,0,0.16)]">
                  <div
                    className={`mb-6 h-2 rounded-full ${
                      index === 0 ? "bg-[#0098DA]" : index === 1 ? "bg-[#A8CF45]" : index === 2 ? "bg-[#FFCC29]" : "bg-[#ED3237]"
                    }`}
                  />
                  <h3 className="text-2xl font-black">{unit}</h3>
                  <p className="mt-3 text-base leading-7 text-[#536B7B]">Atendimento próximo para orientar sua visita e tirar dúvidas com calma.</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#EAF8F2] py-20 md:py-28">
        <Container>
          <div className="grid gap-8 rounded-[2.4rem] bg-white p-5 shadow-[0_28px_90px_rgba(44,91,83,0.14)] md:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
            <div className="rounded-[2rem] bg-[#FFF4C8] p-7 md:p-10">
              <p className="text-sm font-black uppercase text-[#0098DA]">Mapa Familiar de Escolha Escolar</p>
              <h2 className="mt-4 text-[2rem] font-black leading-[1.08] text-[#12304A] sm:text-[2.7rem]">
                Ainda não sabe qual a melhor escolha para o seu filho?
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#536B7B]">
                Criamos um guia rápido e personalizado para ajudar sua família a decidir com mais segurança, clareza e carinho.
              </p>
              <a
                href="https://happy-day-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-2xl bg-[#0098DA] px-7 py-4 text-base font-black text-white shadow-[0_18px_36px_rgba(0,152,218,0.28)] transition hover:-translate-y-0.5"
              >
                Descobrir a melhor opção para meu filho
              </a>
            </div>

            <div className="grid content-center gap-4 rounded-[2rem] bg-[#F7FBF8] p-5 md:p-7">
              <BrandRail />
              {["Perfil da criança", "Rotina da família", "Unidade mais indicada", "Próximo passo com a escola"].map((item, index) => (
                <div key={item} className="rounded-[1.4rem] bg-white p-5 shadow-[0_12px_36px_rgba(44,91,83,0.08)]">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-lg font-black text-[#12304A]">{item}</p>
                    <span className="text-sm font-black text-[#0098DA]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#DDECF2]">
                    <div
                      className={`h-full ${index === 0 ? "w-7/12 bg-[#0098DA]" : index === 1 ? "w-8/12 bg-[#A8CF45]" : index === 2 ? "w-10/12 bg-[#FFCC29]" : "w-11/12 bg-[#ED3237]"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0098DA] py-20 md:py-28">
        <Container>
          <div className="grid overflow-hidden rounded-[2.4rem] bg-white shadow-[0_32px_100px_rgba(0,63,96,0.24)] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[420px] lg:min-h-[560px]">
              <Image
                src={photos.family}
                alt="Família em evento do Colégio Happy Day"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 md:p-10 lg:p-14">
              <Image src={logo} alt="Colégio Happy Day" width={290} height={70} className="h-auto w-56" />
              <BrandRail className="mt-8" />
              <h2 className="mt-8 text-[2rem] font-black leading-[1.08] text-[#12304A] sm:text-[3rem]">
                Venha conhecer uma escola onde seu filho pode se sentir em casa.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#536B7B]">
                Agende uma conversa com a equipe pedagógica e descubra como a Happy Day une tradição, acolhimento, segurança e formação integral.
              </p>
              <a
                href="#formulario"
                className="mt-9 inline-flex rounded-2xl bg-[#0098DA] px-8 py-4 text-base font-black text-white shadow-[0_18px_36px_rgba(0,152,218,0.28)] transition hover:-translate-y-0.5"
              >
                Falar com a equipe pedagógica
              </a>
            </div>
          </div>
        </Container>
      </section>

      <footer className="bg-[#12304A] py-12 text-white md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <Image src={logo} alt="Colégio Happy Day" width={290} height={70} className="h-auto w-56 rounded-2xl bg-white px-4 py-3" />
              <p className="mt-5 max-w-md text-base leading-7 text-white/76">
                Mais de 30 anos de educação acolhedora, segura e próxima das famílias.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-black uppercase text-[#FFCC29]">Unidades</p>
                <div className="mt-5 grid gap-3">
                  {units.map((unit) => (
                    <p key={unit} className="rounded-2xl bg-white/10 px-4 py-3 text-base font-black">
                      {unit}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-black uppercase text-[#FFCC29]">Happy Day</p>
                <p className="mt-5 text-base leading-7 text-white/76">
                  Confiança, afeto, aprendizagem ativa e formação integral para cada fase da infância.
                </p>
                <a href="#formulario" className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#12304A]">
                  Agendar conversa
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
