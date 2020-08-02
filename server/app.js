const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => res.json({ message: "server aplikasi futsal" }));
app.listen(port, () => console.log(`listening on port:${port}!`));
