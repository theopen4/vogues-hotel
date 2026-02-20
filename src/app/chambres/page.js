export default function Chambres() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen font-display">
            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-3">
                            <div className="size-8 text-primary">
                                <img
                                    alt="Logo Les Vosges De Soa"
                                    className="h-full w-full object-contain"
                                    src="/images/logohotelvogues.jpg"
                                />
                            </div>
                            <span className="text-xl font-extrabold tracking-tight">Les Vosges De Soa</span>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/">Accueil</a>
                            <a className="text-sm font-semibold text-primary" href="#">Chambres</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/#services">Services</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/contact">Contact</a>
                            <button className="bg-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:brightness-110 transition-all text-white">
                                Réserver
                            </button>
                        </nav>
                        <div className="md:hidden">
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section & Intro */}
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Nos Chambres & Tarifs</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Découvrez l'harmonie parfaite entre modernité et tradition vosgienne. Chaque chambre est conçue pour offrir une expérience de repos absolue.
                    </p>
                </div>

                {/* Quick Booking Bar */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Arrivée</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">calendar_today</span>
                                <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="12 Mai 2024" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Départ</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">calendar_today</span>
                                <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="15 Mai 2024" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Type de Chambre</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">bed</span>
                                <select className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm font-medium appearance-none">
                                    <option>Toutes les chambres</option>
                                    <option>Standard</option>
                                    <option>Deluxe</option>
                                    <option>Suite</option>
                                </select>
                            </div>
                        </div>
                        <button className="bg-primary h-[52px] w-full rounded-lg font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-primary/20 text-white">
                            <span className="material-symbols-outlined">search</span>
                            Vérifier Disponibilités
                        </button>
                    </div>
                </div>

                {/* Room List (Alternating Design) */}
                <div className="space-y-24">
                    {/* Room 1: Standard */}
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2 group">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt="Chambre d'hôtel standard moderne et chaleureuse"
                                    src="/images/chambre1.webp"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Populaire</div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div>
                                <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Confort Essentiel</span>
                                <h2 className="text-3xl font-extrabold mt-2 mb-4">Chambre Standard</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Un nid douillet parfaitement agencé pour les voyageurs en quête de sérénité. Profitez d'une décoration soignée alliant matériaux naturels et équipements modernes.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">king_bed</span>
                                    <span className="text-sm font-medium">Lit King Size</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">ac_unit</span>
                                    <span className="text-sm font-medium">Climatisation</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">tv</span>
                                    <span className="text-sm font-medium">Smart TV 4K</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">wifi</span>
                                    <span className="text-sm font-medium">WiFi Fibre</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <span className="text-sm text-slate-500 block">À partir de</span>
                                    <span className="text-3xl font-black">75 000 FCFA</span>
                                    <span className="text-slate-500 font-medium"> / nuit</span>
                                </div>
                                <button className="bg-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all text-white">
                                    Réserver maintenant
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Room 2: Deluxe (Reversed) */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="w-full lg:w-1/2 group">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt="Chambre d'hôtel deluxe luxueuse avec vue panoramique"
                                    src="/images/chambre2.webp"
                                />
                                <div className="absolute top-4 right-4 bg-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white">Premium</div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div>
                                <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Luxe & Espace</span>
                                <h2 className="text-3xl font-extrabold mt-2 mb-4">Chambre Deluxe</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Vivez l'expérience ultime avec notre chambre Deluxe. Plus spacieuse, elle offre un coin salon élégant et une vue imprenable sur les massifs environnants.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">king_bed</span>
                                    <span className="text-sm font-medium">Lit Super King</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">bathtub</span>
                                    <span className="text-sm font-medium">Baignoire îlot</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">coffee_maker</span>
                                    <span className="text-sm font-medium">Café inclus</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">balcony</span>
                                    <span className="text-sm font-medium">Balcon privé</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <span className="text-sm text-slate-500 block">À partir de</span>
                                    <span className="text-3xl font-black">120 000 FCFA</span>
                                    <span className="text-slate-500 font-medium"> / nuit</span>
                                </div>
                                <button className="bg-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all text-white">
                                    Réserver maintenant
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Section */}
                <div className="mt-24 bg-slate-100 dark:bg-slate-900/50 rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold mb-6">Pourquoi réserver directement chez nous ?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <span className="material-symbols-outlined text-4xl text-primary">verified</span>
                            <h4 className="font-bold">Meilleur prix garanti</h4>
                            <p className="text-sm text-slate-500">Aucun frais caché, les tarifs les plus bas sont ici.</p>
                        </div>
                        <div className="space-y-2">
                            <span className="material-symbols-outlined text-4xl text-primary">local_bar</span>
                            <h4 className="font-bold">Verre de bienvenue</h4>
                            <p className="text-sm text-slate-500">Offert à votre arrivée pour toute réservation directe.</p>
                        </div>
                        <div className="space-y-2">
                            <span className="material-symbols-outlined text-4xl text-primary">event_available</span>
                            <h4 className="font-bold">Annulation Flexible</h4>
                            <p className="text-sm text-slate-500">Modifiez votre séjour jusqu'à 48h avant l'arrivée.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="size-6 text-primary">
                            <img
                                alt="Logo Les Vosges De Soa"
                                className="h-full w-full object-contain"
                                src="/images/logohotelvogues.jpg"
                            />
                        </div>
                        <span className="text-lg font-bold tracking-tight">Hôtel Les Vosges De Soa</span>
                    </div>
                    <p className="text-slate-500 text-sm">© 2024 Les Vosges De Soa. Tous droits réservés. Mentions Légales.</p>
                </div>
            </footer>
        </div>
    );
}
