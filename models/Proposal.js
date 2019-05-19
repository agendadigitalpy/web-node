const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Shema
const ProposalSchema = new Schema({
  name: {
    type: String,
    required: [true, "El campo name es requerido."]
  },
  email: {
    type: String,
    required: [true, "El campo email es requerido."]
  },
  category: {
    type: Number,
    required: [true, "El campo category es requerido."]
  },
  title: {
    type: String,
    required: [true, "El campo title es requerido."]
  },
  content: {
    type: String,
    required: true
  },
  approved: {
    type: Boolean,
    required: true,
    default: false
  },
  createat: {
    type: Date,
    required: true,
    default: Date.now
  }
});

// Create collection and add schema
mongoose.model("proposal", ProposalSchema);
