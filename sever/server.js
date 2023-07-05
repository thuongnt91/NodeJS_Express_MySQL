const express = require("express");

const server = express();
const port = 3000;
const database = require("./connection/connectMySql");
const userRoute = require("./routes/user.routes");
server.use("/api/v1/users", userRoute);

server.listen(port, (req, res) => {
  console.log("====================================");
  console.log(`http://localhost:${port}`);
  console.log("====================================");
});
