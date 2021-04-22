//---Get Tools && Set PORT---//

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const pool = require("./db.js");

//---Middleware---//

app.use(express.json());
app.use(cors());

//---Routes---//

//-Root-//
app.get("/", (req, res) => {
	res.send("Welcome to node server!");
});
//-Create Artist-//
app.post("/add_artist", async (req, res) => {
	try {
		const { first_name, last_name, country_name, city_name } = req.body;
		const newArtist = await pool.query(
			"INSERT INTO artist (first_name,last_name,country_name,city_name) VALUES($1,$2,$3,$4)",
			[first_name, last_name, country_name, city_name]
		);
		res.json(newArtist);
	} catch (err) {
		console.log(err.message);
	}
});
//-Delete Artist-//
app.delete("/delete_artist/:id", async (req, res) => {
	try {
		const { artist_id } = req.params;
		const deleteArtist = await pool.query(
			"DELETE FROM artist WHERE artist_id = $1",
			[artist_id]
		);
		res.json(deleteArtist);
	} catch (err) {
		console.log(err.message);
	}
});
//-Update Artist-//
app.put("/update_artist/:id", async (req, res) => {
	try {
		const { artist_id } = req.params;
		const { first_name, last_name, country_name, city_name } = req.body;
		const updateArtist = pool.query(
			"UPDATE artist SET first_name, last_name, country_name, city_name VALUES($1,$2,$3,$4) WHERE artist_id",
			[first_name, last_name, country_name, city_name][artist_id]
		);
		res.json(updateArtist);
	} catch (err) {
		console.log(err.message);
	}
});
//-View All Artists-//
app.get("/view", async (req, res) => {
	try {
		const viewAllArtists = await pool.query("SELECT * FROM artist");
		// console.log(req.body);
		res.json(viewAllArtists);
	} catch (err) {
		console.log(err.message);
	}
});
//--View Single Artist--//
app.get("/view/:id", async (req, res) => {
	try {
		const { artist_id } = req.params;
		const viewArtist = await pool.query(
			"SELECT * FROM artist WHERE artist_id = ($1)",
			[artist_id]
		);
		console.log(req.body);
		res.json(viewArtist);
	} catch (err) {
		console.log(err.message);
	}
});
//---Listening Post---//
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
