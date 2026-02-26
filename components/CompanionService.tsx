"use client";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faWalking, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CompanionService() {
  const [hovered, setHovered] = useState<number | null>(null);

  const perks = [
    {
      id: 1,
      title: "Friendly Conversations",
      text: "We take time to listen, talk and create meaningful moments that brighten the day.",
      icon: faComments,
    },
    {
      id: 2,
      title: "Support in Daily Life",
      text: "Whether it's a walk, small errands or simply being present - we are here to help.",
      icon: faWalking,
    },
    {
      id: 3,
      title: "Emotional Well-Being",
      text: "Human connection is essential. Our companions bring warmth, empathy and trust.",
      icon: faHandHoldingHeart,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
          <Image
          src="/images/companion-service.jpg"
          alt="Companion Service"
          fill
          style={{ objectFit: "cover" }}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1F2A1F] mb-4">
            Our Companion Service
          </h2>

          <p className="text-[#5C6A5C] leading-relaxed mb-6">
            Beyond delivering meals, we offer something even more important: human connection.
            Our companion service supports seniors emotionally and socially, helping them feel
            valued, understood and never alone.
          </p>

          <p className="text-[#5C6A5C] leading-relaxed mb-8">
            Whether it is a friendly chat, a walk outside or help with small tasks - our team
            is here to bring comfort, joy and companionship.
          </p>

          <button className="px-6 py-3 bg-[#3FAF67] text-white rounded-lg font-semibold shadow-md hover:bg-[#369a59] transition-all">
            Book Companion Service
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {perks.map((p) => (
          <div
          key={p.id}
          onMouseEnter={() => setHovered(p.id)}
          onMouseLeave={() => setHovered(null)}
          className="bg-[#FAF9F6] rounded-xl p-8 text-center cursor-pointer"
          style={{
            transform: hovered === p.id ? "translateY(-8px)" : "translateY(0)",
            boxShadow:
              hovered === p.id
              ? "0 12px 28px rgba(0, 0, 0, 0.12)"
              : "0 4px 10px rgba(0, 0, 0, 0.06)",
            transition: "all 0.35s ease",
          }}
          >
            <FontAwesomeIcon
            icon={p.icon}
            style={{ fontSize: "32px", color: "#3FAF67"}}
            className="mb-4"
            />

            <h3 className="text-xl font-semibold text-[#1F2A1F] mb-2">
              {p.title}
            </h3>

            <p className="text-[#5C6A5C] text-sm leading-relaxed">
              {p.text}
            </p>
            </div>
        ))}
      </div>
    </section>
  );
}
