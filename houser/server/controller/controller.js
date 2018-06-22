const getHouses = (req, res, next) => {
  const db = req.app.get("db");
  db.getHouses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send({ getHousesErr: err }));
};

const createHouses = (req, res, next) => {
  const db = req.app.get("db");
  const { name, address, city, state, zipcode } = req.body;

  db.createHouses([name, address, city, state, zipcode])
    .then(response => res.status(200).send({ response }))
    .catch(err => res.status(500).send({ addHousesErr: "Bad request" }));
};

const deleteHouses = (req, res, next) => {
  const db = req.app.get("db");
  db.deleteHouses([req.params.id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  getHouses,
  createHouses,
  deleteHouses
};
