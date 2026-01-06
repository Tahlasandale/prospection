import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Info, 
  Mail, 
  Users, 
  Coffee, 
  Music, 
  Utensils, 
  ChevronRight,
  AlertCircle,
  Instagram,
  Facebook
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Composant Carte d'activité
  const ActivityCard = ({ icon: Icon, title, items, color }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 text-white`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center text-slate-600">
            <ChevronRight size={14} className="mr-2 text-slate-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="text-xl font-black tracking-tight text-emerald-900">LE COURT-BOUILLON</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-emerald-900">
            <a href="#concept" className="hover:text-emerald-600 transition-colors">Le Lieu</a>
            <a href="#agenda" className="hover:text-emerald-600 transition-colors">Agenda</a>
            <a href="#pratique" className="hover:text-emerald-600 transition-colors">Infos Pratiques</a>
            <a href="#contact" className="bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition-all">Nous rejoindre</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" 
            alt="Ambiance café" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-bounce">
            🎉 Bonne année 2024 de toute l'équipe !
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Un lieu de vie <br/><span className="text-amber-400">fédérateur & culturel</span>
          </h1>
          <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Café associatif à Rambouillet porté par un collectif de bénévoles désireux de favoriser les rencontres sur notre territoire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#agenda" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20">
              Découvrir la programmation
            </a>
            <a href="#pratique" className="px-8 py-4 bg-white hover:bg-slate-50 text-emerald-900 rounded-xl font-bold transition-all shadow-lg">
              Venir nous voir
            </a>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-emerald-900 mb-6 italic">Un projet porté par l'humain.</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Le Court-Bouillon est bien plus qu'un simple café. C'est un espace culturel installé sur <strong>Rambouillet</strong> qui met en lumière les initiatives locales.
              </p>
              <p>
                Notre mission : créer un cadre convivial, accessible à tous, pour mieux vivre ensemble et favoriser les échanges.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex flex-col items-center p-4 bg-emerald-50 rounded-2xl">
                <span className="text-3xl font-black text-emerald-700">100%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">Bénévole</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-amber-50 rounded-2xl">
                <span className="text-3xl font-black text-amber-700">Rambouillet</span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">Territoire</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Musique" />
              <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Atelier" />
            </div>
            <div className="pt-8 space-y-4">
              <img src="https://images.unsplash.com/photo-1501339817308-04b171f10573?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Foodtruck" />
              <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Groupe" />
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-emerald-900 mb-4 tracking-tight">Activités & Programmation</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Chaque semaine, nous vous proposons une sélection variée d'ateliers et d'événements.</p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Week-end */}
          <div>
            <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-sm uppercase">Le Week-end</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <ActivityCard 
                icon={Calendar} 
                title="Ateliers" 
                items={["Initiation créative", "Bricolage", "Bien-être"]} 
                color="bg-emerald-600"
              />
              <ActivityCard 
                icon={Music} 
                title="Événements" 
                items={["Concerts live", "Scènes ouvertes", "Expositions"]} 
                color="bg-amber-500"
              />
              <ActivityCard 
                icon={Utensils} 
                title="Foodtrucks" 
                items={["Produits locaux", "Cuisine du monde", "Options veggie"]} 
                color="bg-rose-500"
              />
            </div>
          </div>

          {/* Semaine */}
          <div>
            <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-lg text-sm uppercase">En Semaine</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex bg-white p-8 rounded-3xl shadow-sm items-center gap-6 group hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Coffee size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Les Ateliers de Délhia</h4>
                  <p className="text-slate-500">Un moment créatif régulier à ne pas manquer.</p>
                </div>
              </div>
              <div className="flex bg-white p-8 rounded-3xl shadow-sm items-center gap-6 group hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <Info size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Le Book Étourdi</h4>
                  <p className="text-slate-500">Le club de lecture et d'échange du Court-Bouillon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infos Pratiques */}
      <section id="pratique" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="bg-emerald-900 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-8">Nous rendre visite</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Horaires d'ouverture</h4>
                    <p className="text-emerald-100">Le Samedi : 18h00 — Minuit</p>
                    <p className="text-emerald-300 text-sm mt-1 flex items-center gap-1">
                      <Utensils size={14} /> Foodtrucks sur place pour se restaurer
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Adresse</h4>
                    <p className="text-emerald-100">24 rue Louis Leblanc<br/>78120 Rambouillet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6 text-amber-400">
                <AlertCircle />
                <h3 className="text-xl font-bold">Important : Stationnement</h3>
              </div>
              <p className="text-emerald-50 mb-6 leading-relaxed">
                Il est <strong>interdit de stationner</strong> dans l'impasse juste en face du Court-Bouillon par respect pour le voisinage.
              </p>
              <div className="p-4 bg-emerald-800/50 rounded-2xl border border-emerald-700">
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-300 mb-2">2 Parkings Disponibles</p>
                <ul className="text-sm space-y-2 text-emerald-100">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-emerald-600 rounded flex items-center justify-center shrink-0 text-[10px]">1</div>
                    Parking principal sur place.
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-emerald-600 rounded flex items-center justify-center shrink-0 text-[10px]">2</div>
                    Rue de Clairefontaine (Accès piéton en 2 min).
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 py-4 bg-amber-400 hover:bg-amber-500 text-emerald-900 font-black rounded-xl transition-all flex items-center justify-center gap-2">
                <MapPin size={20} />
                Ouvrir dans Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-emerald-900 mb-4">Soutenir & Participer</h2>
          <p className="text-slate-500">Le projet ne vit que grâce à vous. Choisissez votre manière de contribuer !</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Bénévole", email: "benevolecourtbouillon@gmail.com", icon: Users },
            { title: "Ateliers", email: "ateliercourtbouillon@gmail.com", icon: Coffee },
            { title: "Programmation", email: "Formulaire de candidature", icon: Music, isForm: true },
            { title: "Autre demande", email: "lecourtbouillonrambouillet@gmail.com", icon: Mail }
          ].map((c, i) => (
            <div key={i} className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all text-center">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <c.icon size={28} />
              </div>
              <h4 className="font-bold text-lg mb-4">{c.title}</h4>
              <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">Contactez-nous</p>
              <a href={c.isForm ? "#" : `mailto:${c.email}`} className="text-sm font-medium text-emerald-700 break-all hover:underline decoration-2 underline-offset-4">
                {c.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-sm">
          <div className="flex items-center gap-2 grayscale">
            <div className="w-8 h-8 bg-slate-400 rounded-full flex items-center justify-center text-white font-bold text-lg italic">C</div>
            <span className="font-bold tracking-tight">LE COURT-BOUILLON</span>
          </div>
          <p>© 2024 Le Court-Bouillon. Design & Concept pour votre réussite.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
