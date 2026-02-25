import Image from "next/image";
import Link from "next/link";
import { MEALS } from "@/data/meals";

export default function FoodShowcase() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Featured Dishes
        </h2>

        {/* 4 dishes in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MEALS.map((meal) => (
            <Link
              key={meal.id}
              href="/menu"
              className="rounded-xl border border-[#E6E2DA] bg-white shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative w-full h-40">
                <Image
                  src={meal.image}
                  alt={meal.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#2F3B2F]">
                  {meal.name}
                </h3>

                <p className="mt-1 text-sm text-[#5C6A5C] flex-1">
                  {meal.description}
                </p>

                {/* Colored badge */}
                <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full w-fit">
                  {meal.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md"
          >
            Browse All Dishes
          </Link>
        </div>

      </div>
    </section>
  );
}
