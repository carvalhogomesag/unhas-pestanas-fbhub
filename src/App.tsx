import React from 'react';
import { 
  Sparkles, MapPin, Phone, Clock, Star, 
  CheckCircle2, Quote, ArrowRight, ShieldCheck, 
  Flower2, Heart, Users, ExternalLink, Moon 
} from 'lucide-react'; // Trocamos Scissors por Sparkles e Flower2
import Navbar from './components/Navbar';
import { BUSINESS_INFO, SERVICES, REVIEWS, IMAGES } from './constants';
import mapaImg from './assets/images/mapa-localizacao.webp'; 

const MAP_SOURCE = mapaImg;

const App: React.FC = () => {
  return (
    // TEMA: Verde Água (Emerald) e Bege
    <div className="min-h-screen flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.interior[0].url} alt="FB HUB Rosi Cangueiro" className="w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/20 via-stone-100/80 to-stone-100"></div> 
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-emerald-600/10 border border-emerald-600/20 px-4 py-2 rounded-full mb-8 animate-fade-in text-emerald-700">
              <Sparkles size={14} fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Beleza e Bem-Estar em Montelavar</span>
              <span className="text-stone-500 text-xs font-medium uppercase tracking-widest hidden md:inline"> | 5.0 Estrelas</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-[1.1] text-stone-900">
              Cuidamos da sua <br />
              <span className="text-emerald-600 italic">Beleza e da Alma</span>.
            </h2>
            
            <p className="text-stone-600 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light">
              Um espaço dedicado ao perfeccionismo e ao seu conforto. Sinta-se em casa com a Rosi e a sua equipa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center px-4">
              <a href={BUSINESS_INFO.bookingUrl} target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/10 group">
                Agendar Atendimento <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicos" className="bg-white border border-stone-200 text-stone-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-stone-50 transition-all shadow-sm">Ver Serviços</a>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES (Clean) */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Moon, title: "Espaço Relaxante", text: "Ambiente novo, limpo e pensado para proporcionar um momento zen." },
              { icon: Heart, title: "Cuidado Único", text: "Mais do que estética, um acolhimento que faz cada cliente sentir-se especial." },
              { icon: CheckCircle2, title: "Rigor e Higiene", text: "Profissionais qualificadas com padrões de excelência em todos os serviços." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold font-serif text-stone-800 mb-3">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 md:py-32 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-emerald-600 text-sm font-bold uppercase tracking-[0.4em] mb-4">Nossa Especialidade</h4>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-stone-900">Unhas, Pestanas e Laser</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto text-left">
            {SERVICES.map((s) => (
              <div key={s.id} className="group border-b border-stone-200 pb-8 hover:border-emerald-300 transition-all">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-2xl font-bold font-serif text-stone-800 group-hover:text-emerald-700 transition-colors">{s.name}</h3>
                  <span className="text-emerald-600 font-bold">{s.price}</span>
                </div>
                <p className="text-stone-500 text-sm italic">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE (Foco na Equipa) */}
      <section id="sobre" className="py-20 md:py-32 bg-white overflow-hidden text-left">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={IMAGES.interior[1].url} alt="Rosi Cangueiro FB HUB" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-stone-900 text-white p-8 rounded-3xl max-w-xs shadow-2xl z-20">
                <Quote className="text-emerald-400 mb-4" size={32} />
                <p className="font-medium italic text-lg leading-snug">"Aqui encontrei amigas e um cuidado que vai além da estética."</p>
                <p className="text-emerald-400 text-xs mt-4 uppercase font-bold tracking-widest">Michelle Benfica</p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-stone-900">
                Rosi, Giana e <br /><span className="text-emerald-600 italic">Constança</span>
              </h2>
              <div className="space-y-6 text-stone-600 font-light text-lg">
                <p>Com mais de 60 avaliações de 5 estrelas, o FB HUB é o reflexo de anos de dedicação à arte de embelezar.</p>
                <p>O nosso novo espaço em Montelavar foi criado para ser o seu refúgio particular. Um lugar onde o tempo pára e a prioridade é você.</p>
                <div className="pt-6 flex flex-wrap gap-4">
                   <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Pestanas</span>
                   <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Unhas de Gel</span>
                   <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Laser</span>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-stone-50 text-left">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl font-bold mb-10 text-stone-900">Visite-nos</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-emerald-600">
                   <MapPin size={28} />
                </div>
                <div><h4 className="text-stone-900 font-bold text-lg">Morada</h4><p className="text-stone-500">{BUSINESS_INFO.address}, {BUSINESS_INFO.city}</p></div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-emerald-600">
                   <Clock size={28} />
                </div>
                <div><h4 className="text-stone-900 font-bold text-lg">Horário</h4><p className="text-stone-500">{BUSINESS_INFO.openingHours}</p></div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-emerald-600">
                   <Phone size={28} />
                </div>
                <div><h4 className="text-stone-900 font-bold text-lg">Contacto</h4><p className="text-stone-800 text-2xl font-bold">{BUSINESS_INFO.phone}</p></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 h-[500px] rounded-[3rem] overflow-hidden border-8 border-white shadow-xl relative group">
            <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="block w-full h-full relative">
              <img src={MAP_SOURCE} alt="Mapa FB HUB" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center bg-stone-900/10">
                <div className="bg-stone-900 text-white px-8 py-4 rounded-full font-bold shadow-xl">Ver no Google Maps</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-stone-900 text-white text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
             <Flower2 className="text-emerald-400" size={32} />
             <div className="text-left">
                <h1 className="font-serif text-2xl font-bold leading-none">FB HUB</h1>
                <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Rosi Cangueiro</p>
             </div>
          </div>
          <p className="text-stone-400 text-xs uppercase tracking-widest">© 2026 FB HUB - Montelavar, Sintra</p>
        </div>
      </footer>
    </div>
  );
};

export default App;