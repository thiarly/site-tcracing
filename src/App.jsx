const navItems = [
  { label: "HOME", href: "#home" },
  { label: "MÉTODO", href: "#codigo" },
  { label: "PACER", href: "#pacer" },
];

const codePillars = [
  { label: "Dados", detail: "Leitura objetiva" },
  { label: "Treino", detail: "Carga com intenção" },
  { label: "Recuperação", detail: "Resposta ao estímulo" },
  { label: "Nutrição", detail: "Energia planejada" },
  { label: "Estratégia", detail: "Decisão antes da prova" },
  { label: "Execução", detail: "Controle sob pressão" },
];

const fitLines = [
  "Atletas que já treinam com consistência.",
  "Pessoas que aceitam método antes de volume.",
  "Quem quer decisão, não motivação.",
];

function Logo({ muted = false, className = "", alt = "TC Racing" }) {
  return (
    <img
      className={`tc-logo ${muted ? "opacity-45" : ""} ${className}`}
      src="/assets/tc-logo-white.png"
      alt={alt}
    />
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#05070a]/78 backdrop-blur-2xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-signal/45 to-transparent" />
      <nav className="mx-auto flex h-[74px] w-full max-w-5xl items-center justify-between px-6 sm:px-8">
        <a href="#home" className="group flex items-center" aria-label="PACER TC Racing">
          <Logo className="h-9 w-auto transition group-hover:opacity-80 sm:h-11" />
        </a>

        <div className="flex items-center gap-6 text-[0.72rem] font-semibold uppercase text-slate-400 sm:gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-6 text-sm font-semibold uppercase text-slate-400">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-4xl font-black text-white sm:text-6xl">{title}</h2>
      <div className="title-accent mx-auto mt-5 w-40 sm:w-56" />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="section-shell hero-shell min-h-[108vh] pt-28">
      <div className="ambient ambient-one" />
      <Logo
        alt=""
        className="hero-watermark pointer-events-none absolute left-1/2 top-20 h-[34rem] w-auto -translate-x-1/2 opacity-[0.025]"
      />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="font-display text-5xl font-black uppercase leading-none text-white sm:text-7xl lg:text-8xl">
          TC RACING
        </h1>
        <div className="title-accent mt-6 w-44 sm:w-72" />

        <div className="mt-16 max-w-2xl">
          <p className="font-display text-2xl font-black text-white sm:text-3xl">
            Não é assessoria. É um núcleo fechado de performance.
          </p>
          <p className="mt-7 text-lg leading-8 text-slate-300">
            Núcleo de performance para atletas que treinam com método, dados e critério.
          </p>
          <p className="mt-8 text-xl font-black text-white">
            Pouca gente. Muito critério.
          </p>
          <p className="mt-2 text-base font-medium text-slate-400">Only Five.</p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 sm:flex-row">
          <a className="button-primary" href="#cta">
            <span>Entrar no núcleo</span>
            <span aria-hidden="true">→</span>
          </a>
          <a className="button-ghost" href="#codigo">
            <span>Conhecer o método</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="mt-6 text-sm font-medium text-slate-500">
          Entrada limitada. Análise individual.
        </p>
      </div>
    </section>
  );
}

function OnlyFive() {
  return (
    <section id="only-five" className="section-shell section-after-hero border-y border-white/[0.06]">
      <div className="ambient ambient-two" />
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle title="Only Five." />
        <p className="mt-14 text-xl leading-9 text-slate-300">
          Cinco atletas por ciclo. Não por escassez artificial, mas para
          preservar análise, contexto e profundidade.
        </p>
        <p className="mt-8 font-display text-2xl font-black text-white sm:text-3xl">
          Se exige atenção, não escala em massa.
        </p>
      </div>
    </section>
  );
}

function CodeSection() {
  return (
    <section id="codigo" className="section-shell">
      <div className="mx-auto w-full max-w-4xl text-center">
        <SectionTitle title="Método" />

        <div className="mx-auto mt-14 max-w-2xl">
          <p className="text-xl leading-9 text-slate-300">
            Performance é consequência de decisões repetidas com precisão.
          </p>
          <p className="mt-7 text-lg leading-8 text-slate-400">
            O método é a lógica por trás da evolução: dados, treino, recuperação,
            nutrição, estratégia e execução. Cada decisão precisa ter motivo.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {codePillars.map((pillar, index) => (
            <div key={pillar.label} className="method-card group">
              <div className="flex items-start justify-between gap-4">
                <span className="method-index">0{index + 1}</span>
                <span className="method-dot" />
              </div>
              <h3 className="mt-8 font-display text-xl font-black text-white">
                {pillar.label}
              </h3>
              <p className="mt-3 text-sm font-medium text-slate-500 transition group-hover:text-slate-300">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PacerSection() {
  return (
    <section id="pacer" className="section-shell border-y border-white/[0.06]">
      <div className="ambient ambient-three" />
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle title="Pacer" />
        <p className="mt-14 text-xl leading-9 text-slate-300">
          PACER TC Racing é o sistema que transforma ritmo, zonas, prova e
          nutrição em decisões práticas.
        </p>
        <p className="mt-10 font-display text-2xl font-black text-white">
          Menos achismo. Mais cálculo.
        </p>
        <a
          className="button-primary mt-12"
          href="https://pacer.tcracing.com.br/zonas"
          target="_blank"
          rel="noreferrer"
        >
          <span>Abrir calculadora PACER</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto w-full max-w-3xl text-center">
        <SectionTitle title="Para quem faz sentido" />
        <div className="mt-14 grid gap-3">
          {fitLines.map((line, index) => (
            <div key={line} className="fit-line">
              <span className="method-index">0{index + 1}</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="cta" className="section-shell min-h-[72vh]">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle title="Núcleo de performance." />
        <p className="mt-12 text-xl text-slate-300">
          Para quem não busca volume. Busca direção.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
          A entrada começa por conversa. O acompanhamento começa por critério.
        </p>
        <a
          className="button-whatsapp mt-14"
          href="https://wa.me/5511971469122?text=Quero%20solicitar%20uma%20an%C3%A1lise%20para%20entrada%20no%20n%C3%BAcleo%20TC%20Racing."
          target="_blank"
          rel="noreferrer"
        >
          <span className="button-whatsapp-orb" aria-hidden="true" />
          <span>Solicitar análise</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#03060a] px-6 py-16 text-center sm:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/35 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(29,155,240,0.12),transparent_34%)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center">
        <p className="text-sm font-black uppercase text-white">TC Racing</p>
        <p className="mt-5 text-sm text-slate-500">Performance · Método · Dados</p>
        <div className="mt-10">
          <Logo muted alt="" className="h-12 w-auto" />
        </div>
        <p className="mt-12 text-xs text-slate-700">
          © 2026 TC Racing. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function FloatingContact() {
  return (
    <a
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full border border-emerald-300/35 bg-emerald-500/80 text-sm font-black text-white shadow-[0_0_32px_rgba(16,185,129,0.35)] backdrop-blur transition hover:scale-105 hover:bg-emerald-400"
      href="https://wa.me/5511971469122"
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
    >
      <img className="h-7 w-auto" src="/assets/tc-logo-white.png" alt="" />
    </a>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-carbon text-slate-100">
      <Header />
      <Hero />
      <OnlyFive />
      <CodeSection />
      <PacerSection />
      <FitSection />
      <FinalCta />
      <Footer />
      <FloatingContact />
    </main>
  );
}
