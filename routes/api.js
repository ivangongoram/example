const express = require('express');
const router = express.Router();
const UserController = require("../src/controllers/UserController")
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get("/user/index", UserController.index);
router.post("/user/create", jsonParser, UserController.create);
router.get("/user/:id/show", UserController.show);
router.patch("/user/:id/update", jsonParser, UserController.update);
router.delete("/user/:id/delete", UserController.delete);

module.exports = router;