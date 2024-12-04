const postList = require("../data/posts.js");

let lastIndex = postList.length;

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
    res.json(req.post);
}

function store(req, res) {
    //console.log("store");

    const { title, content, image, tags, published } = req.body;

    let slug = title.toLowerCase().split(" ").join("-");
    //console.log(title, content, image, tags);

    lastIndex++;

    const post = { title, slug, id: lastIndex, content, image, tags, published };
    postList.push(post);

    console.log(post);
    //console.log(postList);

    res.status(201);
    res.send("Post created successfully")
}

function update(req, res) {
    //console.log("update");

    const { title, content, image, tags } = req.body;
    let slug = title.toLowerCase().split(" ").join("-");

    req.post.title = title;
    req.post.slug = slug;
    req.post.content = content;
    req.post.image = image;
    req.post.tags = tags;

    console.log(req.post);
    //console.log(postList);

    res.status(201);
    res.send("Post updated successfully");
}

function modify(req, res) {
    //console.log("modify");

    const { title, content, image, tags } = req.body;

    if (title) {
        req.post.title = title;
        let slug = title.toLowerCase().split(" ").join("-");
        req.post.slug = slug;
    }
    if (content) {
        req.post.content = content;
    }
    if (image) {
        req.post.image = image;
    }
    if (tags) {
        req.post.tags = tags;
    }

    console.log(req.post);
    //console.log(postList);

    res.status(201);
    res.send("Post modified successfully");
}

function destroy(req, res) {
    //console.log("destroy");
    let index = (postList.indexOf(req.post));

    postList.splice(index, 1);

    res.status(204);
    res.send();
    console.log(postList);
}

module.exports = { index, show, store, update, modify, destroy };