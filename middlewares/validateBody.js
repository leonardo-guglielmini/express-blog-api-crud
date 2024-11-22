function validateBody(req, res, next) {
    let errors = [];
    let { title, content, image, tags } = req.body;

    if (!title) {
        let error = "Title missing";
        errors.push(error);
    }
    if (!content) {
        let error = "Content missing";
        errors.push(error);
    }
    if (!image) {
        let error = "Image missing";
        errors.push(error);
    }
    if (!tags) {
        let error = "Tags missing";
        errors.push(error);
    }

    if (errors.length) {
        res.status(406);
        return res.json({
            error: "Invalid request",
            message: errors
        })
    }

    next();
}

module.exports = validateBody