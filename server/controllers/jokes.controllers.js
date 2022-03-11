const Joke = require("../models/jokes.model");

module.exports = {
    findAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => {
                console.log(allJokes);
                res.json(allJokes);
            })
            .catch((err) => {
                console.log("Find allJokes failed");
                res.json({ message: "Something went wrong with findAllJokes", error: err });
            });
    },

    findOneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then((oneJoke) => {
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err) => {
                console.log("Find oneJoke failed");
                res.json({ message: "Something went wrong with finding oneJoke", error: err });
            });
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then((newJokeCreated) => {
                console.log(newJokeCreated);
                res.json(newJokeCreated);
            })
            .catch((err) => {
                console.log("Create newJoke failed");
                res.json({ message: "Something went wrong with createJoke", error: err });
            });
    },

    updateJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedJoke) => {
                console.log(updatedJoke);
                res.json(updatedJoke);
            })
            .catch((err) => {
                console.log("updateJoke failed");
                res.json({ message: "Something went wrong with updateJoke", error: err });
            });
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then((deleteJoke) => {
                console.log(deleteJoke);
                res.json(deleteJoke);
            })
            .catch((err) => {
                console.log("deleteJoke failed");
                res.json({ message: "Something went wrong with deletJoke", error: err });
            });
    },
};
