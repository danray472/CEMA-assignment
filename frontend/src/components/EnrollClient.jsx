import React, { useState, useEffect } from "react";
import axios from "axios";

function EnrollClient() {
  const [clients, setClients] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const clientsRes = await axios.get("http://localhost:5000/api/clients");
      const programsRes = await axios.get("http://localhost:5000/api/programs");
      setClients(clientsRes.data);
      setPrograms(programsRes.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/clients/enroll/${selectedClient}`, {
        programIds: selectedPrograms
      });
      setMessage("Client enrolled successfully!");
      setSelectedClient("");
      setSelectedPrograms([]);
    } catch (err) {
      setMessage("Error: " + err.response?.data?.error || err.message);
    }
  };

  const handleProgramChange = (programId) => {
    setSelectedPrograms((prev) =>
      prev.includes(programId)
        ? prev.filter((id) => id !== programId)
        : [...prev, programId]
    );
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-xl font-semibold mb-4">Enroll Client in Programs</h2>
      {message && <p className="text-blue-600 text-sm mb-2">{message}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <select
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Client</option>
          {clients.map((client) => (
            <option key={client._id} value={client._id}>
              {client.name} ({client.nationalId})
            </option>
          ))}
        </select>

        <div>
          <p className="font-semibold">Select Programs:</p>
          {programs.map((program) => (
            <label key={program._id} className="block">
              <input
                type="checkbox"
                value={program._id}
                checked={selectedPrograms.includes(program._id)}
                onChange={() => handleProgramChange(program._id)}
                className="mr-2"
              />
              {program.name}
            </label>
          ))}
        </div>

        <button type="submit" className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
          Enroll Client
        </button>
      </form>
    </div>
  );
}

export default EnrollClient;
