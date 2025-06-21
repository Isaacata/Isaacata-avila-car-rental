import { useState } from "react"; import './index.css';

export default function App() { const [pickupDate, setPickupDate] = useState(""); const [returnDate, setReturnDate] = useState(""); const [location, setLocation] = useState("");

return ( <div className="min-h-screen bg-white"> <header className="bg-gradient-to-r from-blue-800 to-blue-600 py-10 text-white text-center shadow-lg sticky top-0 z-50"> <h1 className="text-5xl font-bold"> Avila Car Rental </h1> <p className="mt-2 text-lg"> Premium Car Rentals in Miami – Fast, Reliable & Affordable </p> </header>

<section className="max-w-4xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Book Your Ride</h2>
    <div className="bg-white shadow-lg rounded-xl p-6 grid gap-4">
      <input
        type="text"
        placeholder="Pickup Location (e.g., Miami Airport)"
        className="border border-gray-300 p-3 rounded w-full"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        className="border border-gray-300 p-3 rounded w-full"
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)}
      />
      <input
        type="date"
        className="border border-gray-300 p-3 rounded w-full"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 rounded text-lg font-semibold transition duration-200">
        Find Available Cars
      </button>
    </div>
  </section>

  <section className="bg-gray-50 py-16 px-4">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Fleet</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        "Tesla Model 3",
        "Mercedes-Benz C250",
        "Kia Soul",
        "Kia Rio",
        "Land Rover LR2",
      ].map((name, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        </div>
      ))}
    </div>
  </section>

  <section className="py-16 px-4">
    <h2 className="text-2xl text-center text-blue-800 font-bold mb-6">Customer Reviews</h2>
    <div className="max-w-4xl mx-auto grid gap-4">
      {[
        "Amazing experience! The car was clean and ready on time.",
        "Smooth booking process and great customer service.",
        "Highly recommend Avila for your next trip to Miami!"
      ].map((review, idx) => (
        <div
          key={idx}
          className="bg-white shadow rounded p-4 text-center italic"
        >
          “{review}”
        </div>
      ))}
    </div>
  </section>

  <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6 mt-12">
    &copy; {new Date().getFullYear()} Avila Car Rental. All rights reserved.
  </footer>

  <a
    href="https://wa.me/13051234567"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg transition duration-200"
  >
    📲 Chat via WhatsApp
  </a>
</div>

); }

