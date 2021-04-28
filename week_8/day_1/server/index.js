// --- Get Tools && Set Port --- //

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const pool = require("./db.js");
const es6Renderer = require("express-es6-template-engine");

// --- Middleware --- //

app.use(express.json());
app.use(cors());
app.engine("html", es6Renderer);
app.set("views", "../templates");
app.set("view engine", "html");

// --- Routes --- //

// - Root/Home Page - //
app.get("/", (req, res) => {
	res.render("index");
});
// - Create Artist - //
app.post("/add_artist", async (req, res) => {
	try {
		const { first_name, last_name, country_name, movement_name } = req.body;
		const addArtist = await pool.query(
			"INSERT INTO artist (first_name, last_name, country_name, movement_name) VALUES($1, $2, $3, $4)",
			[first_name, last_name, country_name, movement_name]
		);
		res.json(addArtist);
	} catch (err) {
		console.log(err.message);
	}
});
// - Read Artist(s) - //
app.get("/view_artist", async (req, res) => {
	try {
		const getArtist = await pool.query("SELECT * FROM artist");
		const artist = getArtist.rows;
		res.render("artist", { locals: { artists: artist } });
	} catch (err) {
		console.log(err.message);
	}
});
//- Update Artist Data - //
app.put("/edit_artist/:id", async (req, res) => {
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
//- Delete Artist - //
app.delete("/delete_artist/:id", async (req, res) => {
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
// - Listening Post - //
app.listen(port, () => {
	console.log(`Listening on Port ${port}`);
});
