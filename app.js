const express = require("express");
const postsRouter = require("./routers/postsRouter.js");
const errorHandler = require("./middlewares/errorHandler.js");
const notFound = require("./middlewares/endpointNotFound.js");



const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json())

app.get("/", (req, res) => {
    //throw new Error("Test errorHandler");

    res.send("Server Root");
})

app.use("/posts", postsRouter);

app.use(errorHandler);
app.use(notFound);

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`);
})

