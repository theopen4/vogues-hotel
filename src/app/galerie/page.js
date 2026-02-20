export default function Galerie() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-10 py-4 sticky top-0 z-50">
                    <div className="flex items-center gap-3">
                        <div className="size-12">
                            <img
                                alt="Les Vosges De Soa Logo"
                                className="w-full h-full object-contain"
                                src="/images/logohotelvogues.jpg"
                            />
                        </div>
                        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-extrabold leading-tight tracking-tight">Les Vosges De Soa</h2>
                    </div>
                    <nav className="hidden md:flex flex-1 justify-end gap-10 items-center">
                        <div className="flex items-center gap-8">
                            <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold" href="/">Accueil</a>
                            <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold" href="/chambres">Chambres</a>
                            <a className="text-slate-900 dark:text-slate-100 border-b-2 border-primary text-sm font-bold" href="#">Galerie</a>
                            <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold" href="/#contact">Contact</a>
                        </div>
                        <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary text-white text-sm font-bold shadow-sm hover:shadow-md transition-all">
                            <span>Réserver</span>
                        </button>
                    </nav>
                    <div className="md:hidden">
                        <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">menu</span>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto w-full px-6 py-12 md:py-20">
                    {/* Hero Title Section */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                        <div className="max-w-2xl">
                            <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-4">Notre Galerie</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                                Immergez-vous dans l'atmosphère unique de notre établissement. Du confort de nos suites au charme de nos espaces extérieurs.
                            </p>
                        </div>
                        <div className="hidden lg:flex gap-4 items-center">
                            <span className="text-sm font-bold text-slate-400">PARTAGER</span>
                            <div className="flex gap-2">
                                <div className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                                    <span className="material-symbols-outlined text-sm group-hover:text-white">share</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filter Controls */}
                    <div className="flex flex-wrap items-center gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
                        <button className="h-10 px-6 rounded-full bg-primary text-white text-sm font-bold transition-all shadow-sm">
                            Tous
                        </button>
                        <button className="h-10 px-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:border-primary transition-all">
                            Chambres
                        </button>
                        <button className="h-10 px-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:border-primary transition-all">
                            Événements
                        </button>
                        <button className="h-10 px-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:border-primary transition-all">
                            Extérieur
                        </button>
                    </div>

                    {/* Bento Grid Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
                        {/* Main Hero Image (Extérieur) */}
                        <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                            <img
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Vue extérieure majestueuse de l'hôtel Les Vosges"
                                src="/images/exterieur1.webp"
                            />
                            <div className="absolute bottom-6 left-6 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase rounded-full">Extérieur</span>
                            </div>
                        </div>
                        {/* Chambre 1 */}
                        <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                            <img
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Chambre de luxe avec éclairage chaleureux"
                                src="/images/chambre1.webp"
                            />
                            <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase rounded-full">Chambres</span>
                            </div>
                        </div>
                        {/* Chambre 2 */}
                        <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                            <img
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Deuxième chambre élégante style moderne bois"
                                src="/images/chambre2.webp"
                            />
                            <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase rounded-full">Chambres</span>
                            </div>
                        </div>
                        {/* Salon / Suite */}
                        <div className="md:col-span-6 md:row-span-1 relative group overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                            <img
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Espace salon suite panoramique luxe moderne"
                                src="/images/chambre3.webp"
                            />
                            <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase rounded-full">Suite</span>
                            </div>
                        </div>
                        {/* Salle de réception */}
                        <div className="md:col-span-6 md:row-span-1 relative group overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                            <img
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Grande salle de réception pour événements"
                                src="/images/salle_de_fete.webp"
                            />
                            <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase rounded-full">Événements</span>
                            </div>
                        </div>
                    </div>

                    {/* Instagram CTA Section */}
                    <div className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16">
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">Plus de moments sur Instagram</h2>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">Suivez-nous pour les dernières actualités et offres exclusives.</p>
                            </div>
                            <a className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all group" href="#">
                                <span className="material-symbols-outlined text-primary">photo_camera</span>
                                <span>@lesvosgesdesoa</span>
                                <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </main>

                <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12 px-10">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="size-10">
                                <img
                                    alt="Les Vosges De Soa Logo"
                                    className="w-full h-full object-contain"
                                    src="/images/logohotelvogues.jpg"
                                />
                            </div>
                            <span className="font-bold text-slate-900 dark:text-slate-100">Les Vosges De Soa</span>
                        </div>
                        <div className="flex gap-8 text-sm font-semibold text-slate-500 dark:text-slate-400">
                            <a className="hover:text-primary transition-colors" href="#">Politique de confidentialité</a>
                            <a className="hover:text-primary transition-colors" href="#">Mentions légales</a>
                            <a className="hover:text-primary transition-colors" href="/#contact">Contact</a>
                        </div>
                        <p className="text-slate-400 text-sm">© 2024 Les Vosges De Soa. Tous droits réservés.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
