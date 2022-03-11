const JokesController = require("../controllers/jokes.controllers");

module.exports = (app) => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.post("/api/jokes", JokesController.createJoke);
    app.get("/api/jokes/:id", JokesController.findOneJoke);
    app.put("/api/jokes/:id", JokesController.updateJoke);
    app.delete("/api/jokes/:id", JokesController.deleteJoke);
};