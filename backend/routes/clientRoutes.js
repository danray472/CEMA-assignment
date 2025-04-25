const express = require("express");
const router = express.Router();
const {
  createClient,
  getClients,
  searchClient,
  enrollClient
} = require("../controllers/clientController");

// POST: Register new client
router.post("/", createClient);

// GET: Get all clients
router.get("/", getClients);

// GET: Search for a client by national ID
router.get("/search/:nationalId", searchClient);

// POST: Enroll client in one or more programs
router.post("/enroll/:clientId", enrollClient);

module.exports = router;
