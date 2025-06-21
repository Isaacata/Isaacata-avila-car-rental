import React from "react"; import "./index.css";

export default function App() { return ( <div className="bg-gray-100 min-h-screen font-sans"> {/* Header con imagen */} <header className="bg-cover bg-center text-white py-16 px-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?auto=format&fit=crop&w=1280&q=80')" }}> <div className="max-w-4xl mx-auto text-center"> <h1 className="text-5xl font-bold mb-2 flex justify-center items-center"> <img src="https://img.icons8.com/ios-filled/50/ffffff/sedan.png" alt="Logo" className="w-10 h-10 mr-3" /> Avila Car Rental </h1> <p className="text-xl mt-2">Premium Rentals in Miami – Drive in Style</p> </div> </header>

{/* Why Us */}
  <section className="py-12 px-4 text-center bg-white">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div className="bg-gray-100 p-6 rounded shadow">
        <h3 className="font-semibold text-lg">🛡️ Reliable Service</h3>
        <p className="text-gray-600 mt-2">Trustworthy and hassle-free rentals every time.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded shadow">
        <h3 className="font-semibold text-lg">🚘 Affordable Cars</h3>
        <p className="text-gray-600 mt-2">Clean, fuel-efficient vehicles for every budget.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded shadow">
        <h3 className="font-semibold text-lg">📍 Great Location</h3>
        <p className="text-gray-600 mt-2">Conveniently located in Miami for quick pickups.</p>
      </div>
    </div>
  </section>

  {/* Fleet */}
  <section className="py-12 px-4 bg-gray-50">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Fleet</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {["Tesla Model 3", "Mercedes-Benz C250", "Kia Soul", "Kia Rio", "Land Rover LR2"].map((car) => (
        <div key={car} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800">{car}</h3>
          <p className="text-gray-600">Comfortable & fuel-efficient</p>
        </div>
      ))}
    </div>
  </section>

  {/* Contact */}
  <section className="py-12 px-4 bg-white">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
    <form
      action="https://formspree.io/f/your-id"
      method="POST"
      className="max-w-2xl mx-auto space-y-4"
    >
      <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded" required />
      <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
      <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded h-32" required></textarea>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
    </form>
  </section>

  {/* Footer */}
  <footer className="text-center py-6 bg-gray-800 text-white">
    © {new Date().getFullYear()} Avila Car Rental. All rights reserved.
  </footer>
</div>

); }

