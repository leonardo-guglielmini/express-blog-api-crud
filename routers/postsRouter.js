const functions = require("../controllers/postsController.js");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    functions.index();
})

module.exports = router;