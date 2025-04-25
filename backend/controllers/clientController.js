const Client = require("../models/Client");
const Program = require("../models/Program");

// Register a new client
exports.createClient = async (req, res) => {
  try {
    const { name, nationalId, age, gender } = req.body;
    const client = new Client({ name, nationalId, age, gender });
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search client by National ID
exports.searchClient = async (req, res) => {
  try {
    const { nationalId } = req.params;
    const client = await Client.findOne({ nationalId }).populate("enrolledPrograms");
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Enroll a client in one or more programs
exports.enrollClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { programIds } = req.body;

    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ message: "Client not found" });

    client.enrolledPrograms.push(...programIds);
    await client.save();

    const updatedClient = await Client.findById(clientId).populate("enrolledPrograms");

    res.json(updatedClient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
