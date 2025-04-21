const router = require("express").Router();

const servicesController = require("../controllers/serviceController");

router
  .route("/services")
  .post((req, res) => servicesController.create(req, res));

module.exports = router;
