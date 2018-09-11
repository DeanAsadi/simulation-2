module.exports = {
  getHouses: (req, res, next) => {
    const db = req.app.get("db");
    db.get_houses().then(house => res.status(200).send(house));
  },
  deleteHouse: (req, res, next) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete_house(id)
      .then(() => res.status(200).send())
      .catch(err => console.log("Delete Error", err));
  },
  addHouse: (req, res, next) => {
    const {
      property_name,
      address,
      city,
      state,
      zip,
      img,
      monthly_mortgage,
      desired_mortgage
    } = req.body;
    const db = req.app.get("db");
    db.add_house([
      property_name,
      address,
      city,
      state,
      zip,
      img,
      monthly_mortgage,
      desired_mortgage
    ])
      .then(() => res.status(200).send(), console.log(" POST Successful"))
      .catch(err => console.log("Add Errror ", err));
  }
};
