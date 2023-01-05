var express = require("express");
var router = express.Router();
const { putUser, getUser1 } = require("../Controllers/user");

router
  .get("/:id", (req, res) => getUser1(req, res))
  .put("/Update/:id", (req, res) => putUser(req, res));

module.exports = router;
