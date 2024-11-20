const postList = require("../data/posts.js");

function index(req, res) {
    //console.log("index");
    let taggedPostList = postList;
    //console.log(req);

    if (req.query.tag) {
        //console.log(req.query.tag);
        let tag = req.query.tag.charAt(0).toUpperCase() + req.query.tag.slice(1)
        //console.log(tag);
        taggedPostList = postList.filter((post) => { return post.tags.includes(tag) });
    }

    res.json(taggedPostList);
}

function show(req, res) {
    //console.log("show");
    let post = postList.find((post) => post.slug === req.params.id || post.id === req.params.id)

    if (!post) {
        res.status(404);
        post = {
            error: "Post not found"
        }
    }
    res.json(post);
}

function store(req, res) {
    console.log("store");
}

function update(req, res) {
    console.log("update");
}

function modify(req, res) {
    console.log("modify");
}

function destroy(req, res) {
    //console.log("destroy");

    let destroyIndex = postList.findIndex((post) => post.slug === req.params.id || post.id === req.params.id);
    //console.log(destroyIndex);

    if (destroyIndex === -1) {
        res.status(404);
        return res.json({ error: "Post not found" });
    }

    postList.splice(destroyIndex, 1);

    res.status(204);
    res.send();
    console.log(postList);
}

module.exports = { index, show, store, update, modify, destroy };