// --- Get Tools && Set Port --- //

const express = require("express");
const app = express();
const cors = require("cors");
const es6Renderer = require("express-es6-template-engine");
require("dotenv").config();
const port = process.env.PORT || 3000;
const pool = require("./db.js");

// --- Middleware --- //

app.engine("html", es6Renderer);
app.set("views", "../templates");
app.set("view engine", "html");
app.use(express.json());
app.use(cors());

// --- Routes --- //

// - Root - //
app.get("/", (req, res) => {
	res.render("index");
});
// - Add Artist - //
app.post("/add_artist", async (req, res) => {
	try {
		const { first_name, last_name, country_name, movement_name } = req.body;
		const addArtist = await pool.query(
			"INSERT INTO artist (first_name, last_name, country_name, movement_name) VALUES($1, $2, $3, $4)",
			[first_name, last_name, country_name, movement_name]
		);
		res.json(addArtist);
	} catch (err) {
		res.status(404);
		res.send("Error. Please try again.");
	}
});
// - Delete Artist - //
app.post("/delete_artist/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const updateArtist = await pool.query(
			"DELETE FROM artist WHERE artist_id = $1",
			[id]
		);
		res.json(updateArtist);
	} catch (err) {
		console.log(err.message);
	}
});
// - View Artist(s) - //
app.get("/view_artist", async (req, res) => {
	try {
		const getArtist = await pool.query("SELECT * FROM artist");
		res.json(getArtist);
	} catch (err) {
		console.log(err.message);
	}
});
// - View Individual Artist - //
app.get("/view_artist/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const getOneArtist = await pool.query(
			"SELECT * FROM artist WHERE artist_id = $1 ORDER BY artist_id",
			[id]
		);
		// res.json(getOneArtist);
		res.render("artist", {
			locals: { getOneArtist: req.body, rows: "first_name" },
		});
	} catch (err) {
		console.log(err.message);
	}
});
// - Update Artist Data - //
app.post("/edit_artist/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { first_name, last_name, country_name, movement_name } = req.body;
		const updateArtist = await pool.query(
			"UPDATE artist SET(first_name,last_name, country_name, movement_name) = ($1, $2, $3, $4) WHERE artist_id = $5",
			[first_name, last_name, country_name, movement_name, id]
		);
		res.json(updateArtist);
	} catch (err) {
		console.log(err.message);
	}
});
// - Listening Post - //
app.listen(port, () => {
	console.log(`Listening on Port ${port}`);
});
