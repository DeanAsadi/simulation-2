require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");

const controller = require("./controller/controller");

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Massive-database is connected");
  })
  .catch(err => console.log("Massive is NOT connected"));

//End Points
app.get("/api/houses", controller.getHouses);
app.delete("/api/house/:id", controller.deleteHouse);
app.post("/api/house", controller.addHouse);

const port = 3001;
app.listen(port, () => console.log(`Listenig on port ${port}`));
