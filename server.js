const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
const port = 3000;
require("./config/sequelize.config");

server.get("/", async (req, res) => {
  res.status(200).send("server is listening right now");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
