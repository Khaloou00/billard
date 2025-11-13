import { useState, useEffect } from "react";
import { Trophy, CalendarDays, Info } from "lucide-react";
import a from "../assets/100.png";
import b from "../assets/200.png";
import c from "../assets/300.png";
import d from "../assets/400.png";
import e from "../assets/500.png";
import f from "../assets/600.png";
import Bill from "../assets/Billard.png";

export default function Classements() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([a, b, c, d, e, f]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <header className="relative mb-10 rounded-3xl overflow-hidden bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-6 top-6 w-72 h-72 bg-white rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute right-6 bottom-6 w-96 h-96 bg-white rounded-full blur-3xl opacity-30" />
          </div>

          <div className="relative z-10 p-10 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full border border-white/30 mb-4">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">
                  Résultats du 12 Novembre 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                Retour sur les matchs de la journée
              </h1>
              <p className="text-white/90">
                Des affrontements intenses, des coups millimétrés et des
                rebondissements spectaculaires ! Voici les moments forts en
                images.
              </p>
            </div>

            <div className="w-80 h-60 relative">
              <img
                src={Bill}
                alt="Match illustration"
                className="rounded-md shadow-xl border-4 border-amber-400 object-cover w-full h-full"
              />
              <div className="absolute -bottom-9 right-25 bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-white/30">
                <CalendarDays className="w-4 h-4" />
                <span>12/11/2025</span>
              </div>
            </div>
          </div>
        </header>

        {/* GALERIE EN PORTRAIT */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-100"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={src}
                    alt={`Résultat match ${index + 1}`}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Match {index + 1}</h3>
                    <p className="text-sm text-gray-200">⚡</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INFO */}
        <footer className="mt-10 text-center text-gray-600">
          <div className="inline-flex items-center gap-2 bg-white rounded-full shadow-md px-5 py-2 border border-gray-200">
            <Info className="w-10 h-10 text-red-600" />
            <span>
              Les prochains matchs auront lieu le{" "}
              <span className="font-semibold text-yellow-600">
                <br />
                13 Novembre 2025
              </span>
              .
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
