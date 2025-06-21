import React from "react";

export default function App() { return ( <div className="min-h-screen bg-blue-100 p-4"> <div className="bg-blue-600 text-white p-6 rounded-lg max-w-xl mx-auto shadow-lg"> <h1 className="text-3xl font-bold mb-2 text-center">Cheap Car Rentals Search</h1> <p className="text-center mb-4">Car rental at the best prices</p> <form
action="https://formspree.io/f/mnqegayk"
method="POST"
className="bg-yellow-400 p-4 rounded-md space-y-3"
> <div> <label className="block mb-1 font-semibold">Pick-up Location</label> <input
type="text"
name="location"
required
className="w-full px-3 py-2 rounded-md border border-gray-300"
/> </div>

<div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block mb-1 font-semibold">Pickup Date</label>
          <input
            type="date"
            name="pickup_date"
            required
            className="w-full px-3 py-2 rounded-md border border-gray-300"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Time</label>
          <input
            type="time"
            name="pickup_time"
            required
            className="w-full px-3 py-2 rounded-md border border-gray-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block mb-1 font-semibold">Drop-off Date</label>
          <input
            type="date"
            name="dropoff_date"
            required
            className="w-full px-3 py-2 rounded-md border border-gray-300"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Time</label>
          <input
            type="time"
            name="dropoff_time"
            required
            className="w-full px-3 py-2 rounded-md border border-gray-300"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold"
      >
        Search
      </button>
    </form>

    <ul className="mt-6 text-white text-sm space-y-1">
      <li>✔ Get up to 30% off</li>
      <li>✔ Free cancellations</li>
      <li>✔ Compare over 200 car rental companies</li>
      <li>✔ Exclusive discounts</li>
    </ul>
  </div>
</div>

); }

