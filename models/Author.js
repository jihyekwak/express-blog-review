const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requires: [true, "You must provice a name property"]
        }
    },
    {
        timestamps: true
    }
);

// create the model with the schema for use in the rest of our app

// const Author = mongoose.model("Author", authorSchema);
// module.exports = Author;

// same code ^ shorthand export
module.exports = mongoose.model("Author", authorSchema);