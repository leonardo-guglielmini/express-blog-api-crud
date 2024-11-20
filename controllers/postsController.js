const postList = require("../data/posts.js");

function index(req, res) {
    //console.log("index");
    res.json(postList);
}

function show(req, res) {
    //console.log("show");
    res.json(postList.find((post) => post.slug === req.params.slug));
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
    let destroyIndex = postList.findIndex((post) => post.slug === req.params.slug);
    //console.log(destroyIndex);
    postList.splice(destroyIndex, 1);

    res.status(204);
    res.send();
    console.log(postList);
}

module.exports = { index, show, store, update, modify, destroy };