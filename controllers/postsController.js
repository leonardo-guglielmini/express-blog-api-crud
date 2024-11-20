const postList = require("../data/posts.js");

function index(res) {
    console.log("index");
}

function show() {
    console.log("show");
}

function store() {
    console.log("store");
}

function update() {
    console.log("update");
}

function modify() {
    console.log("modify");
}

function destroy() {
    console.log("destroy");
}

module.exports = { index, show, store, update, modify, destroy };