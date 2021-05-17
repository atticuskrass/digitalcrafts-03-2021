// if (process.env.NODE.ENV !== "production") {
// 	require("dotenv").config();
// }

const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
// const session = require();
const es6Renderer = require("express-es6-template-engine");
const PORT = 3040;

// this is mimicking a database
// const users = [];

// middleware
// requires static files like CSS
app.use(express.static("../public"));
app.use(express.json());
app.use(cors());
app.use(flash());

app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");

// access our form information inside of our req
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send("home");
});

app.get("/register", (req, res) => {
	res.send("register");
});

app.get("/login", (req, res) => {
	res.render("login");
});
app.listen(PORT, () => {
	console.log(`On port ${PORT}`);
});
