const Program = require("../models/Program");

// Create a new health program
exports.createProgram = async (req, res) => {
  try {
    const { name, description } = req.body;
    const program = new Program({ name, description });
    await program.save();
    res.status(201).json(program);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all programs
exports.getPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
