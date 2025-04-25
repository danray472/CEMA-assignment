import React, { useState } from "react";
import axios from "axios";

function RegisterClient() {
  const [formData, setFormData] = useState({
    name: "",
    nationalId: "",
    age: "",
    gender: "Male",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/clients", formData);
      setMessage("Client registered successfully!");
      setFormData({ name: "", nationalId: "", age: "", gender: "Male" });
    } catch (err) {
      setMessage("Error: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-xl font-semibold mb-4">Register New Client</h2>
      {message && <p className="text-blue-600 text-sm mb-2">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="nationalId"
          placeholder="National ID"
          value={formData.nationalId}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Register Client
        </button>
      </form>
    </div>
  );
}

export default RegisterClient;
