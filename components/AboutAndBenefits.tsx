"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AboutAndBenefits() {
  const [hovered, setHovered] = useState<number | null>(null);

  const benefits = [
    {
      id: 1,
      title: "Fresh & Balanced",
      text: "Our meals are cooked fresh every day – using high‑quality ingredients and great care.",
      icon: faLeaf,
    },
    {
      id: 2,
      title: "Made with Love",
      text: "We don’t just cook for seniors – we cook for people who matter to us.",
      icon: faHeart,
    },
    {
      id: 3,
      title: "Simple & Convenient",
      text: "Our dishes are ready to enjoy immediately – no stress, no preparation, no hassle.",
      icon: faClock,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#FAF9F6]">
      {/* ABOUT US */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">

        {/* IMAGE */}
        <div className="relative w-full h-[360px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-us.jpg" // replace later
            alt="About us"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[#1F2A1F] mb-4">
            About Us – Our Philosophy
          </h2>

          <p className="text-[#5C6A5C] leading-relaxed mb-6">
            Senior Delivery stands for warmth, connection, and real support in everyday life.
            We believe that good food and human interaction enrich life – especially in older age.
            That’s why we combine high‑quality meals with genuine care.
          </p>

          <p className="text-[#5C6A5C] leading-relaxed mb-8">
            Our team consists of people who love what they do. We take time, we listen,
            and we create moments that matter. Because food is more than nutrition – it’s quality of life.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4">
            <button
              className="px-6 py-3 bg-[#3FAF67] text-white rounded-lg font-semibold shadow-md hover:bg-[#369a59] transition-all"
            >
              Order Now
            </button>

            <button
              className="px-6 py-3 border border-[#3FAF67] text-[#3FAF67] rounded-lg font-semibold hover:bg-[#E8F3EC] transition-all"
            >
              Browse Menu
            </button>
          </div>

        </div>
      </div>

      {/* BENEFIT CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {benefits.map((b) => (
          <div
            key={b.id}
            onMouseEnter={() => setHovered(b.id)}
            onMouseLeave={() => setHovered(null)}
            className="bg-white rounded-xl p-8 text-center cursor-pointer"
            style={{
              transform: hovered === b.id ? "translateY(-8px)" : "translateY(0)",
              boxShadow:
                hovered === b.id
                  ? "0 12px 28px rgba(0,0,0,0.12)"
                  : "0 4px 10px rgba(0,0,0,0.06)",
              transition: "all 0.35s ease",
            }}
          >
            <FontAwesomeIcon
              icon={b.icon}
              style={{ fontSize: "32px", color: "#3FAF67" }}
              className="mb-4"
            />

            <h3 className="text-xl font-semibold text-[#1F2A1F] mb-2">
              {b.title}
            </h3>

            <p className="text-[#5C6A5C] text-sm leading-relaxed">
              {b.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
