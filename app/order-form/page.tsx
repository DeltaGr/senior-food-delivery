"use client";

import PrintableOrderForm from "@/components/PrintableOrderForm";

export default function OrderFormPage() {
  return (
    <main className="min-h-screen bg-[#FDF7F0] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-[#2F3B2F] mb-6">
          Printable Order Form
        </h1>

        <button
        onClick={() => window.print()}
        className="mb-6 rounded-lg bg-[#7A8F7A] px-4 py-2 text-white hover:bg-[#6A7F6A]"
        >
          Print this form
        </button>

        <PrintableOrderForm />
      </div>
    </main>
  );

}
