const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const controller = require("./controller/controller");

const controller = require("./controller/controller");
require("dotenv").config();

const app = express();
app.use(json());
app.use(cors());

massive(process.env.CONECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("success");
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
    }
  })
);

app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.createHouses);
app.delete("/api/houses/:id", controller.deleteHouses);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
