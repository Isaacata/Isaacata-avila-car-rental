export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 shadow-md flex justify-between items-center bg-gray-100">
        <h1 className="text-2xl font-bold">Avila Cars 305</h1>
        <a href="https://wa.me/17866127905" target="_blank" className="text-green-600 hover:underline">
          WhatsApp Us
        </a>
      </header>

      <main className="p-8">
        <section className="mb-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Car Rental Near Miami Airport</h2>
          <p className="text-lg">Reliable rentals from our fleet of 13 well-maintained vehicles. Convenient location, 10878 SW 5th St, Miami FL 33174.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Toyota Corolla', 'Nissan Versa', 'Kia Forte', 'Hyundai Elantra', 'Chevy Spark', 'Mazda 3', 'Honda Civic', 'Ford Focus', 'Chrysler 200', 'Volkswagen Jetta', 'Jeep Compass', 'Toyota Camry', 'Hyundai Accent'].map((car, i) => (
            <div key={i} className="border rounded-2xl p-4 shadow-md">
              <h3 className="text-xl font-medium mb-2">{car}</h3>
              <p>Clean, reliable, and ready for your trip.</p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-4 rounded-xl shadow">"Great service! Easy pick-up and return near the airport." - Maria G.</li>
            <li className="bg-gray-50 p-4 rounded-xl shadow">"Very clean car, host was super responsive on WhatsApp." - John T.</li>
            <li className="bg-gray-50 p-4 rounded-xl shadow">"Affordable rates and great communication." - Leila R.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <form className="grid gap-4 max-w-lg" action="mailto:avilacars305@gmail.com" method="POST" encType="text/plain">
            <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded" />
            <textarea name="message" placeholder="Your Message" required className="border p-2 rounded" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </section>

        <section className="mt-12">
          <iframe
            className="w-full h-64 rounded-xl border"
            src="https://maps.google.com/maps?q=10878%20SW%205th%20St,%20Miami%20FL%2033174&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          ></iframe>
        </section>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Avila Cars 305. All rights reserved.
      </footer>
    </div>
  );
}
