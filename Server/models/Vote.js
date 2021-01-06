const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    
        level: { type: String, required: true },
        office: { type: String, required: true },
        candidate1: { type: String, required: true},
        // candidateParty1: { type: String, required: true},
        candidate2: { type: String, required: true},
        // candidateParty2: { type: String, required: true}
      },
);

const Vote = mongoose.model("Election", VoteSchema);

module.exports = Vote;