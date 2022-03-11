const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setupJoke: {
            type: String,
            required: [true, "Your joke setup is required."],
        },
        punchline: {
            type: String,
            required: [true, "Your Joke punchline is required!"],
        },
    },
    { timestamps: true }
);

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;
