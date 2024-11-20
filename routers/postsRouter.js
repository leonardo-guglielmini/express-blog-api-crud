const functions = require("../controllers/postsController.js");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    functions.index(req, res);
});

router.get("/:slug", (req, res) => {
    functions.show(req, res);
});

router.post("/", (req, res) => {

});

router.put("/:slug", (req, res) => {

});

router.patch("/:slug", (req, res) => {

});

router.delete("/:slug", (req, res) => {
    functions.destroy(req, res);
});

module.exports = router;