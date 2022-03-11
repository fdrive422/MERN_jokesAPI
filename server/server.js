const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// enabling express middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// enabling cors for client React server
app.use(cors({
    origin: "http://localhost:3000"
}))

// project specific requirements
require("./config/mongoose.config");
require("./routes/jokes.routes")(app);

app.listen(port, () =>
    console.log(`The server is ready on port ${port}`)
);