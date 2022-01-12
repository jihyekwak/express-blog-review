require("dotenv").config;
// External Modules
const express = require("express");
const methodOverride = require("method-override");

// Internal Modules
const routes = require("./routes");

// Instanced Modules
const app = express();

// Configuration
const PORT = 4000;

app.set("view engine", "ejs");

// Middleware
// body data moddleware
app.use(express.urlencoded({ extended: true}));
// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));
// logger
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

// Routes & Controllers
// Home routes
app.get("/", (req, res) => {
    res.send("<h1>Welcome to this blog app!</h1>")
});

// 404 Routes
app.get((req, res) => {
    res.send("404 Error! Page not found :(")
});

// Server Listener
app.listen(PORT, () => {
    console.log(`Blog app is live at http://localhost:${PORT}`);
});