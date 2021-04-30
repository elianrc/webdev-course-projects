const express = require("express");
const app = express();

const port = 8080;
app.listen( port, () => {
    console.log(`Listening on port: ${port}`);
})

//Routing with Parameters
app.get("/r/:subtheme", (req, res) => {
    const { subtheme } = req.params;
    res.send(`<h1>This is the ${subtheme} subtheme!</h1>`);
})

// GET Routing
app.get("/", (req, res) => {
    res.send("<h1>Home route</h1>");
})
app.get("/cat", (req, res) => {
    res.send("<h1>Cats get route</h1>");
})
app.get("/dog", (req, res) => {
    res.send("<h1>Dogs getroute</h1>");
})
app.get("/fish", (req, res) => {
    res.send("<h1>Fishes get route</h1>");
})

// Post Routing
app.post("/cat", (req, res) => {
    res.send("<h1>Cats post route</h1>");
})
app.post("/dog", (req, res) => {
    res.send("<h1>Dogs post route</h1>");
})
app.post("/fish", (req, res) => {
    res.send("<h1>Fishes post route</h1>");
})

//Unknown Path
app.get("*", (req, res) => {
    res.send("<h1>Path not found</h1>");
})

