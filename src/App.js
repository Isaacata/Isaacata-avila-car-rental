import { useState } from "react";

export default function App() {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="p-6 grid gap-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Avila Car Rental</h1>
      <p className="text-center text-lg text-gray-600">
        Alquiler de carros en Miami – rápido, seguro y conveniente.
      </p>

      <div className="grid gap-4 bg-white p-4 rounded-lg shadow">
        <label>Ubicación</label>
        <input
          type="text"
          placeholder="Ej: Aeropuerto MIA"
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Fecha de recogida</label>
        <input
          type="date"
          className="border p-2 rounded"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />

        <label>Fecha de entrega</label>
        <input
          type="date"
          className="border p-2 rounded"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Buscar vehículos disponibles
        </button>
      </div>
    </div>
  );
}
