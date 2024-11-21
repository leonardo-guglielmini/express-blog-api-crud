const express = require("express");
const postsRouter = require("./routers/postsRouter.js")

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json())
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    console.log("Server Root");
})

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`);
})

