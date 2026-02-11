export default function FoodShowcase() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Beliebte Gerichte
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl shadow bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">Gemüsepfanne</h3>
          <p className="text-green-600 mt-2">Frisch, leicht und vitaminreich.</p>
        </div>

        <div className="p-6 rounded-xl shadow bg-yellow-50">
          <h3 className="text-xl font-semibold text-yellow-700">Hähnchenbrust</h3>
          <p className="text-yellow-600 mt-2">Zart, proteinreich und mild gewürzt.</p>
        </div>

        <div className="p-6 rounded-xl shadow bg-orange-50">
          <h3 className="text-xl font-semibold text-orange-700">Kartoffelauflauf</h3>
          <p className="text-orange-600 mt-2">Herzhaft, sättigend und beliebt.</p>
        </div>
      </div>
    </section>
  );
};
