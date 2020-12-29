const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const electionSchema = new Schema({
    {
        level: { type: String, required: true },
        office: { type: String, required: true },
        president: [
            {
            "party": "Republican Party",
            "candidate": "Donald J. Trump",
            "candidateState": "New York",
            "runningMate": "Michael Richard Pence",
            "runningMateState": "Indiana"
          },
      
          {
            "party": "Democratic Party",
            "candidate": "Joseph R. Biden",
            "candidateState": "Delaware",
            "runningMate": "Kamala Harris",
            "runningMateState": "California"
          }
        ]
      },
});

const Election = mongoose.model("Election", electionSchema);

module.exports = Election;