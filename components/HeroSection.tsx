import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center">

      <Image
        src="/images/hero/header.jpg"
        alt="Senior enjoying a healthy meal"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-700/40 to-orange-600/40"></div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          Fresh Meals & Companionship for Seniors
        </h1>

        <p className="text-lg md:text-xl text-white drop-shadow max-w-2xl mx-auto mb-10">
          Healthy, soft‑food friendly dishes delivered warm — with optional mealtime companionship for more joy and connection.
        </p>


        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/weekly-planner"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
          >
            Create Weekly Menu
          </a>

          <a
            href="/menu"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
          >
            Browse Meals
          </a>
        </div>
      </div>
    </section>
  );
}
