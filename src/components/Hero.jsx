import React from 'react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec effet de gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 animate-gradient">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>
      
      {/* Contenu principal */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
            Bienvenue sur{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              BMSTalents
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
            Découvrez nos services exceptionnels et transformez vos idées en réalité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <a 
              href="#services" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Découvrir nos services
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Décorations */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero; 