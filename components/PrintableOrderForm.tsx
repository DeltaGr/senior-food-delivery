"use client";

export default function PrintableOrderForm() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto print:p-0 print:m-0">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Order form (analogue)
      </h1>

      <p className="text-lg mb-8 text-gray-700 text-center">
        For seniors, who prefer to order by phone or postal service.
        Please fill out the form, print it out and send it to our Service.
      </p>

      {/* Customerdates */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Personal Dates</h2>
        <div className="grid grid-cols-1 gap-4 text-lg">
          <label>
            Name:
            <input className="border w-full p-2 mt-1" type="text" />
          </label>
          <label>
            Adress:
            <input className="border w-full p-2 mt-1" type="text" />
          </label>
          <label>
            Telephonenumber:
            <input className="border w-full p-2 mt-1" type="text" />
          </label>
        </div>
      </div>

      {/* Wochenplan */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Weekly Meal Plan</h2>

        <table className="w-full border text-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Day</th>
              <th className="border p-2">Meal</th>
            </tr>
          </thead>
          <tbody>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
              <tr key={day}>
                <td className="border p-2">{day}</td>
                <td className="border p-2">
                  <input className="w-full p-2" type="text" placeholder="Prefered Meal" />
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {/* Companionship Service */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Meal Companionship</h2>
          <label className="text-lg flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5" />
            Begleitservice gewünscht (1-3 hours)
          </label>
        </div>

        {/* Signature */}
        <div className="mt-16">
          <p className="text-lg mb-10">Signature: ___________________________</p>
        </div>
    </section>
  );
}
