const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nationalId: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  enrolledPrograms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program"
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model("Client", clientSchema);
