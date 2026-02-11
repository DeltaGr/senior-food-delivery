export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-green-100 via-yellow-50 to-orange-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
        Frisches Essen & Gesellschaft für Senioren
      </h1>

      <p className="text-lg md:text-xl text-green-700 max-w-2xl mx-auto mb-8">
        Gesund, regional, warm geliefert - mit optionaler Essensbegleitung für mehr Lebensfreude.
      </p>

      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
        Wochenmenü erstellen
      </button>
    </section>
  );
};
