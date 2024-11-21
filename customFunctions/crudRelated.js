function findPost(postList, req) {
    const slugId = req.params.id;
    const id = parseInt(req.params.id);

    let post = postList.find((post) => post.slug === slugId || post.id === id);
    return post;
}

module.exports = { findPost };