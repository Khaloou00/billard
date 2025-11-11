import React from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-yellow-500 overflow-hidden">
      {/* Effet de texture de feutre de billard */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
      </div>

      {/* Billes de billard animées en arrière-plan */}
      <motion.div
        className="absolute top-20 left-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-300 shadow-2xl border-4 border-white/50"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-32"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          rotate: [0, -360],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl border-4 border-yellow-300/50 flex items-center justify-center">
          <span className="text-2xl font-bold text-white drop-shadow-lg">
            1
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4"
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
          rotate: [0, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-2xl border-4 border-red-400/50 flex items-center justify-center">
          <span className="text-xl font-bold text-white drop-shadow-lg">3</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3"
        animate={{
          x: [0, 90, 0],
          y: [0, -70, 0],
          rotate: [0, -360],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-black to-gray-800 shadow-2xl border-4 border-gray-600/50 flex items-center justify-center">
          <span className="text-2xl font-bold text-white drop-shadow-lg">
            8
          </span>
        </div>
      </motion.div>

      {/* Contenu de l'erreur */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold drop-shadow-2xl mb-4 text-yellow-400">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-2xl md:text-3xl mt-4 drop-shadow-lg font-semibold">
            Raté ! Cette page a quitté la table.
          </p>
          <p className="text-lg md:text-xl mt-2 text-white/90 drop-shadow-md">
            La bille que vous cherchez n'est pas dans la poche.
          </p>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-10 inline-block"
        >
          <a
            href="/"
            className="flex items-center space-x-4 bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105"
          >
            {/* Icône de queue de billard */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M3.5 12c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm15-9c-.83 0-1.5.67-1.5 1.5v2.75L9.5 14.5l-2.25-2.25L15.75 3H19c1.1 0 2 .9 2 2v3.25l-2.5 2.5z" />
              <circle cx="5" cy="12" r="2.5" fill="currentColor" />
            </svg>

            <span className="text-xl font-bold">Retour à l'accueil</span>
          </a>
        </motion.div>
      </div>

      {/* Effet de lumière en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

export default ErrorPage;
