const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Shema
const ProposalSchema = new Schema({
  Name:{
    type:String,
    required: true
  },
  Email:{
    type: String,
    required: true
  },
  Category: {
    type: Number,
    required: true
  },
  Title: {
    type: String,
    required: true
  },
  Content: {
    type:String,
    required: true
  },
  Approved: {
    type:Boolean,
    required: true,
    default: false
  }
});

// Create collection and add schema
mongoose.model('proposal', ProposalSchema);