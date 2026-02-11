export default function Navigation() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <div className="text-2xl font-bold text-green-700">
        SeniorMeals
      </div>

      <ul className="flex gap-6 text-lg text-green-800">
        <li className="hover:text-green-600 cursor-pointer">Home</li>
        <li className="hover:text-green-600 cursor-pointer">Menü</li>
        <li className="hover:text-green-600 cursor-pointer">Begleitservice</li>
        <li className="hover:text-green-600 cursor-pointer">Kontakt</li>
        </ul>
        </nav>
  );
};
