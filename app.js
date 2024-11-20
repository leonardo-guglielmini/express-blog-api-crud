const express = require("express");
const postsRouter = require("./routers/postsRouter.js")

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/posts", postsRouter);

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`);
})

