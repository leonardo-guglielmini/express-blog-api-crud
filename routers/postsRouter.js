const functions = require("../controllers/postsController.js");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    functions.index(req, res);
});

router.get("/:id", (req, res) => {
    functions.show(req, res);
});

router.post("/", (req, res) => {

});

router.put("/:id", (req, res) => {

});

router.patch("/:id", (req, res) => {

});

router.delete("/:id", (req, res) => {
    functions.destroy(req, res);
});

module.exports = router;