const functions = require("../controllers/postsController.js");
const postList = require("../data/posts.js");
const express = require("express");
const validateBody = require("../middlewares/validateBody.js");

const router = express.Router();

router.param("id", (req, res, next, id) => {
    const post = postList.find((post) => post.id === parseInt(id) || post.slug === id);

    if (post) {
        req.post = post;
        next()
    } else {
        res.status(404);
        res.json({
            error: "Post not found"
        })
    }
})

router.get("/", (functions.index));

router.get("/:id", (functions.show));

router.post("/", (router.use(validateBody), functions.store));

router.put("/:id", (router.use(validateBody), functions.update));

router.patch("/:id", (functions.modify));

router.delete("/:id", (functions.destroy));

module.exports = router;