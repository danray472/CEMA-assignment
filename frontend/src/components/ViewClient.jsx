import React, { useState } from "react";
import axios from "axios";

function ViewClient() {
  const [nationalId, setNationalId] = useState("");
  const [client, setClient] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/clients/search/${nationalId}`);
      setClient(res.data);
    } catch (err) {
      setClient(null);
      setError("Client not found");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-xl font-semibold mb-4">Search Client by National ID</h2>

      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter National ID"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
          className="border p-2 flex-1 rounded"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 w-full md:w-auto"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {client && (
        <div className="border-t pt-4">
          <p><strong>Name:</strong> {client.name}</p>
          <p><strong>National ID:</strong> {client.nationalId}</p>
          <p><strong>Age:</strong> {client.age}</p>
          <p><strong>Gender:</strong> {client.gender}</p>
          <p><strong>Programs Enrolled:</strong></p>
          <ul className="list-disc list-inside ml-4">
            {client.enrolledPrograms.map((p) => (
              <li key={p._id}>{p.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ViewClient;
