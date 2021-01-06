const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    
        name: { type: String, required: true },
        party: { type: String, required: true },
        

      },
);

const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;