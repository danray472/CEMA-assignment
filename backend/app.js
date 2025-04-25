const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const clientRoutes = require("./routes/clientRoutes");
const programRoutes = require("./routes/programRoutes");

const app = express();

app.use(cors({
  origin: "https://cema-assignment-frontend.onrender.com" 
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api/clients", clientRoutes);
app.use("/api/programs", programRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB connection error:", err));

module.exports = app;
