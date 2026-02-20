export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-primary/10">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              alt="Hôtel Les Vosges De Soa Logo"
              className="h-14 w-auto object-contain"
              src="/images/logohotelvogues.jpg"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/">Accueil</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/chambres">Chambres</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/galerie">Galerie</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/#services">Services</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/contact">Contact</a>
          </div>
          <button className="bg-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 text-white">
            Réservez maintenant
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            alt="Luxury Hotel Lobby"
            className="w-full h-full object-cover scale-105"
            src="/images/exterieur1.webp"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6">
            Expérience Exclusive à Yaoundé
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
            Hôtel Les Vosges De Soa
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            L'élégance et le confort au cœur de Yaoundé. Redécouvrez le luxe dans un cadre apaisant et raffiné.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30 text-white">
              Réservez votre séjour
            </button>
            <a href="/chambres" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center min-w-[200px]">
              Voir nos chambres
            </a>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section className="py-24 bg-white dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="Façade de l'hôtel"
                  className="rounded-2xl shadow-2xl h-80 object-cover mt-12 w-full"
                  src="/images/exterieur2.webp"
                />
                <img
                  alt="Intérieur de l'hôtel"
                  className="rounded-2xl shadow-2xl h-80 object-cover w-full"
                  src="/images/chambre1.webp"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="font-extrabold text-4xl text-white">15+</p>
                <p className="font-semibold text-sm text-white">Années d'Excellence</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Bienvenue à Soa</h2>
              <h3 className="text-4xl font-extrabold leading-tight">Un havre de paix alliant modernité et tradition camerounaise</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Situé stratégiquement à Soa, Yaoundé, l'Hôtel Les Vosges De Soa est plus qu'un simple lieu d'hébergement. C'est une destination où chaque détail a été pensé pour votre bien-être.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Que vous soyez en voyage d'affaires ou en quête de détente, notre établissement vous offre une expérience unique mêlant le luxe contemporain au confort absolu. Profitez de notre service attentionné et de nos installations haut de gamme au cœur de la capitale.
              </p>
              <div className="pt-4">
                <a className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold border-b-2 border-primary pb-1 hover:gap-4 transition-all" href="#">
                  En savoir plus sur nous <span className="material-symbols-outlined">trending_flat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chambres Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="chambres">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Nos Chambres & Suites</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Suite Royale */}
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl transition-all hover:-translate-y-2">
              <div className="h-80 overflow-hidden">
                <img
                  alt="Suite Royale"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="/images/chambre2.webp"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-1">Suite Royale</h4>
                    <p className="text-slate-500 text-sm">Spacieuse • Vue panoramique • Design moderne</p>
                  </div>
                  <span className="bg-primary/20 px-3 py-1 rounded text-sm font-bold text-primary whitespace-nowrap">À partir de 75 000 FCFA</span>
                </div>
                <div className="flex gap-4 mb-6">
                  <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">king_bed</span> 2 lits
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">aspect_ratio</span> 45 m²
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">wifi</span> Inclus
                  </span>
                </div>
                <a href="/chambres" className="block w-full text-center py-3 rounded-xl border-2 border-primary text-slate-900 dark:text-white font-bold hover:bg-primary hover:text-white transition-all">
                  Voir les détails
                </a>
              </div>
            </div>
            {/* Chambre Deluxe */}
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl transition-all hover:-translate-y-2">
              <div className="h-80 overflow-hidden">
                <img
                  alt="Chambre Deluxe"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="/images/chambre3.webp"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-1">Chambre Deluxe</h4>
                    <p className="text-slate-500 text-sm">Confortable • Équipements premium • Calme</p>
                  </div>
                  <span className="bg-primary/20 px-3 py-1 rounded text-sm font-bold text-primary whitespace-nowrap">À partir de 45 000 FCFA</span>
                </div>
                <div className="flex gap-4 mb-6">
                  <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">single_bed</span> 1 lit king
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">aspect_ratio</span> 30 m²
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">ac_unit</span> Climatisé
                  </span>
                </div>
                <a href="/chambres" className="block w-full text-center py-3 rounded-xl border-2 border-primary text-slate-900 dark:text-white font-bold hover:bg-primary hover:text-white transition-all">
                  Voir les détails
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-background-dark/50" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-primary font-bold uppercase text-sm mb-4">Services de Classe Mondiale</h2>
              <h3 className="text-4xl font-extrabold">Une expérience complète pour votre satisfaction</h3>
            </div>
            <button className="bg-primary px-8 py-3 rounded-xl font-bold text-white">Voir tous nos services</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 text-white">
                <span className="material-symbols-outlined text-3xl">wifi</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Wi-Fi Haut Débit</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Restez connecté en tout temps avec notre connexion fibre optique gratuite dans tout l'établissement.</p>
            </div>
            <div className="p-8 rounded-3xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 text-white">
                <span className="material-symbols-outlined text-3xl">restaurant</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Restaurant Gastronomique</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Dégustez une cuisine raffinée mêlant saveurs locales et internationales concoctée par notre chef.</p>
            </div>
            <div className="group relative h-[400px] rounded-3xl overflow-hidden md:col-span-1 shadow-2xl">
              <img
                alt="Salle de fête"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="/images/salle_de_fete.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-bold text-white mb-2">Salles d'Événements</h4>
                <p className="text-slate-300 text-sm mb-6">Idéal pour mariages, conférences et soirées privées à Yaoundé.</p>
                <button className="bg-primary py-3 rounded-xl font-bold w-full text-white">Réserver une salle</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10" id="contact">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img
                alt="Hôtel Les Vosges De Soa Logo"
                className="h-16 w-auto object-contain bg-white p-1 rounded-lg"
                src="/images/logohotelvogues.jpg"
              />
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              L'adresse de référence pour vos séjours à Soa, Yaoundé. Une hospitalité authentique et un service d'excellence.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all" href="#"><span className="material-symbols-outlined text-sm">social_leaderboard</span></a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all" href="#"><span className="material-symbols-outlined text-sm">photo_camera</span></a>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-8 text-primary">Liens Rapides</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-white transition-colors" href="/">Accueil</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors" href="/chambres">Nos Chambres</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors" href="/galerie">Galerie Photo</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors" href="/#services">Nos Services</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-8 text-primary">Services</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Restaurant & Bar</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Location de Salles</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Transfert Aéroport</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Service d'Étage</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-8 text-primary">Contactez-nous</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="text-slate-400">Soa, à 15 min de Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="text-slate-400">+237 600 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="text-slate-400">contact@vosgesdesoa.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <span className="text-slate-400">Ouvert 24h/24, 7j/7</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© 2024 Hôtel Les Vosges De Soa. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
