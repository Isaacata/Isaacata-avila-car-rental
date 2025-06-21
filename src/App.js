import { useState } from "react"; import './index.css';

export default function App() { const [pickupDate, setPickupDate] = useState(""); const [returnDate, setReturnDate] = useState(""); const [location, setLocation] = useState("");

return ( <div className="min-h-screen bg-white"> <header className="relative bg-blue-900 text-white py-20 px-4 text-center"> <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603871053925-2cc58b6b87e1?auto=format&fit=crop&w=1350&q=80')" }}></div> <div className="relative z-10"> <h1 className="text-5xl font-bold mb-4">Avila Car Rental</h1> <p className="text-xl max-w-xl mx-auto"> Discover premium, reliable car rentals in Miami. Hassle-free booking, great rates, and trusted service. </p> </div> </header>

<section className="max-w-4xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Book Your Ride</h2>
    <div className="bg-white shadow-lg rounded-xl p-6 grid gap-4">
      <input type="text" placeholder="Pickup Location" className="border border-gray-300 p-3 rounded w-full" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="date" className="border border-gray-300 p-3 rounded w-full" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
      <input type="date" className="border border-gray-300 p-3 rounded w-full" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
      <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 rounded text-lg font-semibold transition duration-200">Check Availability</button>
    </div>
  </section>

  <section className="bg-gray-50 py-16 px-4">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Fleet</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {["Tesla Model 3", "Mercedes-Benz C250", "Kia Soul", "Kia Rio", "Land Rover LR2"].map((name, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border-t-4 border-blue-600">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 mt-2">Comfortable & fuel-efficient</p>
        </div>
      ))}
    </div>
  </section>

  <section className="bg-white py-16 px-4">
    <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Why Choose Avila?</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
      <div className="p-6 rounded shadow hover:shadow-md">
        <h3 className="text-lg font-bold text-blue-700">Affordable Rates</h3>
        <p className="text-gray-600 mt-2">Competitive pricing without hidden fees.</p>
      </div>
      <div className="p-6 rounded shadow hover:shadow-md">
        <h3 className="text-lg font-bold text-blue-700">Flexible Pickups</h3>
        <p className="text-gray-600 mt-2">Airport, hotel, or anywhere in Miami.</p>
      </div>
      <div className="p-6 rounded shadow hover:shadow-md">
        <h3 className="text-lg font-bold text-blue-700">24/7 Support</h3>
        <p className="text-gray-600 mt-2">We're always available if you need help.</p>
      </div>
    </div>
  </section>

  <section className="bg-blue-50 py-16 px-4">
    <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">About Us</h2>
    <div className="max-w-3xl mx-auto text-center text-gray-700">
      <p className="text-lg mb-4">
        Avila Car Rental is your trusted partner for affordable and high-quality car rentals in South Florida. We combine top-notch customer service with a fleet of reliable vehicles to make your rental experience smooth and enjoyable.
      </p>
    </div>
  </section>

  <section className="py-16 px-4">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Contact Us</h2>
    <form className="max-w-3xl mx-auto grid gap-4">
      <input type="text" placeholder="Your Name" className="border border-gray-300 p-3 rounded" />
      <input type="email" placeholder="Your Email" className="border border-gray-300 p-3 rounded" />
      <textarea placeholder="Your Message" rows="4" className="border border-gray-300 p-3 rounded"></textarea>
      <button className="bg-blue-700 text-white py-3 px-6 rounded hover:bg-blue-800">Send Message</button>
    </form>
  </section>

  <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6 mt-12">
    &copy; {new Date().getFullYear()} Avila Car Rental. All rights reserved.
  </footer>

  <a href="https://wa.me/13051234567" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg transition duration-200">
    📲 Chat via WhatsApp
  </a>
</div>

); }

