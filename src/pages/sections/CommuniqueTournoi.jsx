import React, { useEffect, useState } from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 🖼️ Importation directe des images (à toi de mettre les vraies)
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";
import img11 from "../../assets/11.png";
import img12 from "../../assets/12.png";
import img13 from "../../assets/13.png";
import img14 from "../../assets/14.png";
import img15 from "../../assets/15.png";
import img16 from "../../assets/16.png";
import img17 from "../../assets/17.png";
import img18 from "../../assets/18.png";
import img19 from "../../assets/19.png";
import img20 from "../../assets/20.png";
import img21 from "../../assets/21.png";
import img22 from "../../assets/22.png";
import img23 from "../../assets/23.png";
import img24 from "../../assets/24.png";
import img25 from "../../assets/25.png";
import img26 from "../../assets/26.png";
import img27 from "../../assets/27.png";
import img28 from "../../assets/28.png";
import img29 from "../../assets/29.png";
import img30 from "../../assets/30.png";
import img31 from "../../assets/31.png";
import img32 from "../../assets/32.png";

export default function CommuniqueTournoi() {
  const players = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
    { id: 12, image: img12 },
    { id: 13, image: img13 },
    { id: 14, image: img14 },
    { id: 15, image: img15 },
    { id: 16, image: img16 },
    { id: 17, image: img17 },
    { id: 18, image: img18 },
    { id: 19, image: img19 },
    { id: 20, image: img20 },
    { id: 21, image: img21 },
    { id: 22, image: img22 },
    { id: 23, image: img23 },
    { id: 24, image: img24 },
    { id: 25, image: img25 },
    { id: 26, image: img26 },
    { id: 27, image: img27 },
    { id: 28, image: img28 },
    { id: 29, image: img29 },
    { id: 30, image: img30 },
    { id: 31, image: img31 },
    { id: 32, image: img32 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  // 🔄 Slider automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % players.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [players.length]);

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % players.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + players.length) % players.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-10">
      {/* 🔹 Bloc principal */}
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          ⚠️ Désolé, les matchs ne sont pas disponibles pour le moment
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
          Pour des raisons techniques, les matchs en direct, à venir et terminés
          ne peuvent pas être visualisés pour l'instant. <br />
          <span className="font-semibold">Mais rassurez-vous 👇</span> <br />
          Très bientôt, tout sera de retour en ligne !
        </p>

        {/* 🔗 Liens vers les plateformes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://www.facebook.com/share/g/1CmhbByz5T/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FaFacebook className="text-2xl" /> Voir sur Facebook
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FaTiktok className="text-2xl" /> Voir sur TikTok
          </a>
        </div>
      </div>

      {/* 🔹 Slider participants amélioré */}
      <div className="mt-16 text-center px-4 w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Découvrez les participants qui tentent de devenir
        </h2>
        <div className="mb-12">
          <span className="inline-block text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
            THE KING OF THE TABLE 👑
          </span>
        </div>

        {/* Container principal du slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Slider principal */}
          <div className="relative w-full max-w-md mx-auto h-[500px] sm:h-[600px]">
            {/* Cartes avec effet 3D */}
            <div
              className="relative w-full h-full"
              style={{ perspective: "1000px" }}
            >
              {players.map((player, index) => {
                const isActive = index === currentIndex;
                const isPrev =
                  index ===
                  (currentIndex - 1 + players.length) % players.length;
                const isNext = index === (currentIndex + 1) % players.length;

                let className =
                  "absolute inset-0 transition-all duration-700 ease-out ";

                if (isActive) {
                  className += "opacity-100 z-20 scale-100 translate-x-0";
                } else if (isPrev) {
                  className +=
                    "opacity-30 z-10 scale-90 -translate-x-[60%] blur-sm";
                } else if (isNext) {
                  className +=
                    "opacity-30 z-10 scale-90 translate-x-[60%] blur-sm";
                } else {
                  className += "opacity-0 z-0 scale-75";
                }

                return (
                  <div key={player.id} className={className}>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
                      {/* Image */}
                      <img
                        src={player.image}
                        alt={`Participant ${player.id}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      {/* Bordure dorée pour le joueur actif */}
                      {isActive && (
                        <div className="absolute inset-0 border-4 border-yellow-300 rounded-3xl shadow-[0_0_30px_rgba(253,224,71,0.6)] animate-pulse" />
                      )}

                      {/* Numéro du participant */}
                      <div className="absolute top-6 right-6 bg-yellow-400 text-black font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                        {player.id}
                      </div>

                      {/* Badge King pour l'actif */}
                      {isActive && (
                        <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                          👑 En vedette
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Boutons navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/5 backdrop-blur-sm hover:bg-white/15 border border-white/10 hover:border-white/30 text-white/40 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Participant précédent"
            >
              <ChevronLeft className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/5 backdrop-blur-sm hover:bg-white/15 border border-white/10 hover:border-white/30 text-white/40 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Participant suivant"
            >
              <ChevronRight className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
