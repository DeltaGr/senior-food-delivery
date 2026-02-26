import { companions } from "@/data/companions";
import Image from "next/image";
import Link from "next/link";

export default function CompanionProfile({ params }: { params: { id: string } }) {
  const companion = companions.find((c) => c.id === params.id);

  if (!companion) return <div>Companion not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="relative w-60 h-60">
          <Image
            src={companion.image}
            alt={companion.name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-[#1F2A1F] mb-2">
            {companion.name}
          </h1>
          <p className="text-gray-600 mb-6">{companion.role}</p>

          <ul className="text-gray-700 text-lg space-y-2 mb-8">
            {companion.traits.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>

          <Link
            href={`/companionship-booking?companion=${companion.id}`}
            className="inline-block bg-[#1F2A1F] text-white px-6 py-3 rounded-lg hover:bg-[#2E3A2E] transition"
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
}
