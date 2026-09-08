export default function HomePage() {
  return (
    <main>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-display font-extrabold text-ink text-lg">
            <span className="w-8 h-8 bg-anthracite text-white rounded flex items-center justify-center text-sm font-bold">
              S
            </span>
            SOCIALA<span className="text-turquoise text-xs tracking-widest ml-1">AGENCY</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
            <a href="#services" className="hover:text-ink">Services</a>
            <a href="#approche" className="hover:text-ink">Approche</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
            <a
              href="https://wa.me/237687582392"
              target="_blank"
              rel="noopener"
              className="btn-primary text-sm py-2 px-4"
            >
              Parler à un expert
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-20 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-turquoise text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-turquoise"></span>
              Agence digitale — Le labo marketing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-ink leading-[1.05] mb-6">
              L'agence digitale qui transforme votre présence en{" "}
              <span className="relative">
                moteur de croissance
                <span className="absolute left-0 right-0 bottom-1 h-2 bg-turquoise/40 -z-10"></span>
              </span>
              .
            </h1>
            <p className="text-lg text-muted max-w-lg mb-8">
              Nous aidons les entrepreneurs et les entreprises ambitieuses à attirer plus de clients,
              construire une marque forte et développer leur activité grâce au digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/237687582392?text=Bonjour%20SOCIALA%20AGENCY"
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Parler à un expert →
              </a>
              <a href="#services" className="btn-ghost">
                Découvrir nos services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 text-xs font-medium tracking-wide uppercase text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise"></span> Cameroun
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise"></span> Afrique francophone
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise"></span> Europe
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise"></span> Canada & USA
              </span>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="aspect-square bg-gradient-to-br from-turquoise/20 to-anthracite/10 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-display font-extrabold text-anthracite mb-2">SA</div>
                <p className="text-muted text-sm">Communiquer • Innover • Impacter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-gray-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Stratégie", "Création", "Acquisition", "Technologie"].map((item) => (
            <div key={item} className="font-display font-bold text-ink text-sm py-3">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <p className="text-turquoise text-xs font-semibold tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ink mb-4">
            Des solutions pensées pour faire grandir votre activité.
          </h2>
          <p className="text-muted max-w-2xl mb-12">
            De la stratégie à l'exécution. Chaque service est conçu pour produire un résultat mesurable :
            plus de visibilité, plus de demandes, plus de clients.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Stratégie, audit & conseil", desc: "Audit de votre présence digitale, positionnement et feuille de route de croissance." },
              { title: "Community Management", desc: "Animation quotidienne, ligne éditoriale et modération de vos communautés." },
              { title: "Création graphique", desc: "Stories, carrousels, templates et supports fidèles à votre charte." },
              { title: "Meta Ads & Google Ads", desc: "Campagnes publicitaires orientées performance et acquisition de clients." },
              { title: "Sites web & e-commerce", desc: "Sites vitrines, pages de conversion et boutiques en ligne modernes." },
              { title: "IA & Automatisation", desc: "Chatbots, automatisations et outils pour gagner en efficacité." },
            ].map((service) => (
              <article
                key={service.title}
                className="bg-white border border-gray-200 p-6 rounded-sm hover:border-turquoise transition-colors"
              >
                <h3 className="font-display font-bold text-ink text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section id="approche" className="py-20 px-5 bg-anthracite text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-turquoise text-xs font-semibold tracking-widest uppercase mb-3">Notre approche</p>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-12">
            Une méthode claire, orientée résultats.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Comprendre", desc: "Audit marché, concurrence, audience et actifs digitaux existants." },
              { num: "02", title: "Concevoir", desc: "Positionnement, messages, identité et plan d'action chiffré." },
              { num: "03", title: "Déployer", desc: "Publicité, contenus, site web et automatisations mis en production." },
              { num: "04", title: "Optimiser", desc: "Lecture des données, ajustements et montée en performance." },
            ].map((step) => (
              <div key={step.num}>
                <div className="text-turquoise font-display font-bold text-sm tracking-widest mb-2">{step.num}</div>
                <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ink mb-4">
            Prêt à faire évoluer votre présence digitale ?
          </h2>
          <p className="text-muted mb-8">
            Vous avez un projet, une marque à développer ou une activité à faire décoller ? Parlons-en.
          </p>
          <a
            href="https://wa.me/237687582392?text=Bonjour%20SOCIALA%20AGENCY%2C%20je%20souhaite%20parler%20à%20un%20expert."
            target="_blank"
            rel="noopener"
            className="btn-primary text-base"
          >
            Parler à un expert sur WhatsApp
          </a>
          <p className="mt-6 text-sm text-muted">
            Douala, Cameroun · +237 6 87 58 23 92 · contact@socialaagency.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 px-5 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <div className="font-display font-bold text-ink">
            SOCIALA AGENCY
          </div>
          <p>© {new Date().getFullYear()} SOCIAL GROUP SARL — Tous droits réservés.</p>
          <p className="text-xs">Communiquer • Innover • Impacter</p>
        </div>
      </footer>
    </main>
  );
}
