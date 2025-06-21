import { useState } from "react"; import { motion } from "framer-motion"; import './index.css';

export default function App() { const [pickupDate, setPickupDate] = useState(""); const [returnDate, setReturnDate] = useState(""); const [location, setLocation] = useState("");

return ( <div className="min-h-screen bg-white"> <header className="bg-gradient-to-r from-blue-800 to-blue-600 py-10 text-white text-center shadow-lg sticky top-0 z-50"> <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}> Avila Car Rental </motion.h1> <motion.p className="mt-2 text-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}> Premium Car Rentals in Miami – Fast, Reliable & Affordable </motion.p> </header>

<motion.section className="max-w-4xl mx-auto py-16 px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
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
  </motion.section>

  <motion.section className="bg-gray-50 py-16 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Fleet</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { name: "Tesla Model 3", img: "/cars/tesla.jpg" },
        { name: "Mercedes-Benz C250", img: "/cars/mercedes.jpg" },
        { name: "Kia Soul", img: "/cars/kiasoul.jpg" },
        { name: "Kia Rio", img: "/cars/kiario.jpg" },
        { name: "Land Rover LR2", img: "/cars/landrover.jpg" },
      ].map((car, idx) => (
        <motion.div
          key={idx}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.03 }}
        >
          <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{car.name}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>

  <motion.section className="py-16 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
    <h2 className="text-2xl text-center text-blue-800 font-bold mb-6">Customer Reviews</h2>
    <div className="max-w-4xl mx-auto grid gap-4">
      {[
        "Amazing experience! The car was clean and ready on time.",
        "Smooth booking process and great customer service.",
        "Highly recommend Avila for your next trip to Miami!"
      ].map((review, idx) => (
        <motion.div
          key={idx}
          className="bg-white shadow rounded p-4 text-center italic"
          whileHover={{ scale: 1.02 }}
        >
          “{review}”
        </motion.div>
      ))}
    </div>
  </motion.section>

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

