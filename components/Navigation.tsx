import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <div className="text-2xl font-bold text-green-700">
        SeniorMeals
      </div>

      <ul className="flex gap-6 text-lg text-green-800">
        <li><Link href="/" className="hover:text-green-600 cursor-pointer">Home</Link></li>
        <li><Link href="/menu" className="hover:text-green-600 cursor-pointer">Menu</Link></li>
        <li><Link href="/" className="hover:text-green-600 cursor-pointer">Begleitservice</Link></li>
        <li><Link href="/" className="hover:text-green-600 cursor-pointer">Kontakt</Link></li>
        </ul>
        </nav>
  );
};
