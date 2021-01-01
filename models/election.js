const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const electionSchema = new Schema({
    
        level: { type: String, required: true },
        office: { type: String, required: true },
        candidate1: { type: String, required: true},
        candidateParty1: { type: String, required: true},
        candidate2: { type: String, required: true},
        candidateParty2: { type: String, required: true}
      },
);

const Election = mongoose.model("Election", electionSchema);

module.exports = Election;