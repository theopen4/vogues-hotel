export default function Contact() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen">
            {/* Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3">
                            <img
                                alt="Les Vosges De Soa Logo"
                                className="h-12 w-auto"
                                src="/images/logohotelvogues.jpg"
                            />
                            <span className="text-xl font-extrabold tracking-tight">Les Vosges De Soa</span>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/">Accueil</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/chambres">Chambres</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/galerie">Galerie</a>
                            <a className="text-sm font-semibold text-primary" href="#">Contact</a>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="bg-primary hover:bg-primary/90 px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm text-white">
                                Réserver
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section Header */}
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Contact & Réservation</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">Préparez votre séjour d'exception à Yaoundé. Notre équipe est à votre disposition pour toute demande particulière.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Booking & Direct Channels */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Booking Form Card */}
                        <section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-primary">calendar_month</span>
                                <h2 className="text-2xl font-bold">Réserver votre séjour</h2>
                            </div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Date d'arrivée</label>
                                        <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary outline-hidden" type="date" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Date de départ</label>
                                        <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary outline-hidden" type="date" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Nombre de personnes</label>
                                        <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary outline-hidden">
                                            <option>1 Personne</option>
                                            <option>2 Personnes</option>
                                            <option>3 Personnes</option>
                                            <option>4+ Personnes</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Type de chambre</label>
                                        <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary outline-hidden">
                                            <option>Standard King</option>
                                            <option>Suite Junior</option>
                                            <option>Suite Présidentielle</option>
                                            <option>Chambre Familiale</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 bg-primary hover:bg-primary/90 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all text-white">
                                        <span className="material-symbols-outlined">mail</span>
                                        Réserver par Email
                                    </button>
                                    <button className="flex-1 hover:bg-[#25D366]/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all bg-secondary">
                                        <span className="material-symbols-outlined">chat</span>
                                        Réserver via WhatsApp
                                    </button>
                                </div>
                            </form>
                        </section>

                        {/* General Contact Form */}
                        <section className="bg-slate-100/50 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-bold mb-6">Envoyez-nous un message</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary outline-hidden" placeholder="Nom complet" type="text" />
                                    <input className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary outline-hidden" placeholder="Email professionnel" type="email" />
                                </div>
                                <input className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary outline-hidden" placeholder="Sujet" type="text" />
                                <textarea className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary outline-hidden" placeholder="Votre message..." rows="4"></textarea>
                                <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-all">
                                    Envoyer le message
                                </button>
                            </form>
                        </section>
                    </div>

                    {/* Right Column: Contact Info & Map */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-8">
                            <h2 className="text-2xl font-bold mb-2">Nos Coordonnées</h2>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-slate-800 dark:text-primary shrink-0 bg-primary/10">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Adresse</p>
                                    <p className="text-slate-600 dark:text-slate-400">Quartier Soa, Face Campus Universitaire<br />BP 1234, Yaoundé, Cameroun</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-slate-800 dark:text-primary shrink-0 bg-primary/10">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Téléphone</p>
                                    <p className="text-slate-600 dark:text-slate-400">+237 600 000 000</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-slate-800 dark:text-primary shrink-0 bg-primary/10">
                                    <span className="material-symbols-outlined">alternate_email</span>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Email</p>
                                    <p className="text-slate-600 dark:text-slate-400">contact@vosgesdesoa.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative border border-slate-200 dark:border-slate-800">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/exterieur1.webp')" }}>
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <span className="material-symbols-outlined text-5xl text-white mb-4">map</span>
                                        <p className="text-white font-medium">Soa, Yaoundé, Cameroun</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 mt-24 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-slate-500 text-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2">
                            <img alt="Les Vosges De Soa Logo" className="h-8 w-auto" src="/images/logohotelvogues.jpg" />
                            <span className="text-lg font-extrabold text-slate-900 dark:text-white">Les Vosges De Soa</span>
                        </div>
                        <div className="flex gap-8 font-semibold">
                            <a className="hover:text-primary" href="#">Confidentialité</a>
                            <a className="hover:text-primary" href="#">Conditions</a>
                        </div>
                        <p>© 2024 Les Vosges De Soa. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
