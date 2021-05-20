const express = require("express");
const path = require("path");
const app = express();

// app.use(express.urlencoded({extended: true}));
// app.use(express.json);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.listen(8080, () => {
    console.log("Listening at port 8080");
})