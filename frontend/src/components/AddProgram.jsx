import React, { useState } from 'react';
import axios from 'axios';

function AddProgram() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/programs', { name, description });
      setMessage('Program created successfully!');
      setName('');
      setDescription('');
    } catch (err) {
      setMessage('Error: ' + err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Create Health Program</h2>
      {message && <p className="mb-2 text-sm text-blue-600">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Program Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Program Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add Program
        </button>
      </form>
    </div>
  );
}

export default AddProgram;
