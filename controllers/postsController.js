const postList = require("../data/posts.js");
const customFn = require("../customFunctions/crudRelated.js");

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

    let post = customFn.findPost(postList, req);

    if (!post) {
        res.status(404);
        post = {
            error: "Post not found"
        }
    }
    res.json(post);
}

function store(req, res) {
    //console.log("store");

    const { title, content, image, tags } = req.body;

    if (!title || !content || !image || !tags) {
        res.status(406);
        return res.json({
            error: "One or more body values are undefined"
        })
    }
    let slug = title.toLowerCase().split(" ").join("-");
    //console.log(title, content, image, tags);

    lastIndex++;

    const post = { title, slug, id: lastIndex, content, image, tags };
    postList.push(post);

    console.log(post);
    //console.log(postList);

    res.status(201);
    res.send("Post created successfully")
}

function update(req, res) {
    //console.log("update");

    let post = customFn.findPost(postList, req);

    if (!post) {
        res.status(404);
        return res.json({
            error: "Post not found"
        })
    }

    const { title, content, image, tags } = req.body;
    if (!title || !content || !image || !tags) {
        res.status(406);
        return res.json({
            error: "One or more body values are undefined"
        })
    }
    let slug = title.toLowerCase().split(" ").join("-");

    post.title = title;
    post.slug = slug;
    post.content = content;
    post.image = image;
    post.tags = tags;

    console.log(post);
    //console.log(postList);

    res.status(201);
    res.send("Post updated successfully");
}

function modify(req, res) {
    //console.log("modify");

    let post = customFn.findPost(postList, req);

    if (!post) {
        res.status(404);
        return res.json({
            error: "Post not found"
        })
    }

    const { title, content, image, tags } = req.body;

    if (title) {
        post.title = title;
        let slug = title.toLowerCase().split(" ").join("-");
        post.slug = slug;
    }
    if (content) {
        post.content = content;
    }
    if (image) {
        post.image = image;
    }
    if (tags) {
        post.tags = tags;
    }

    console.log(post);
    //console.log(postList);

    res.status(201);
    res.send("Post modified successfully");
}

function destroy(req, res) {
    //console.log("destroy");

    let post = customFn.findPost(postList, req);

    if (!post) {
        res.status(404);
        return res.json({
            error: "Post not found"
        })
    }
    let index = (postList.indexOf(post));

    postList.splice(index, 1);

    res.status(204);
    res.send();
    console.log(postList);
}

module.exports = { index, show, store, update, modify, destroy };