const express = require("express");
const router = express.Router();
const { createProgram, getPrograms } = require("../controllers/programController");

// POST: Create a new program
router.post("/", createProgram);

// GET: Get all programs
router.get("/", getPrograms);

module.exports = router;
