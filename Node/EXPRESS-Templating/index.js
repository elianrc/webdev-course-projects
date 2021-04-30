const express = require("express");
const app = express();
const colors = require("colors");
const path = require("path");

app.set("view engine", "ejs");

const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.render("index.ejs");
    console.log("-> Home path".green);
})

app.get("*", (req, res) => {
    res.render("notFound.ejs");
    console.log("-> Path not found".red);
})