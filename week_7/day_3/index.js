const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const pool = require("./db.js");
console.log(port);
//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome to node server");
});

// routes that we define for our node server

// create todo
app.post("/todo", async (req, res) => {
	try {
		const { description } = req.body;

		const newTodoInDB = await pool.query(
			"INSERT INTO todo (description) VALUES($1)",
			[description]
		);
		console.log(req.body);
		res.json(newTodoInDB);
	} catch (err) {
		console.log(err.message);
	}
});
// read the todo list
app.get("/read_todo", async (req, res) => {
	try {
		const readSingleTodoFromDB = await pool.query("SELECT * from todo");
		res.json(readSingleTodoFromDB);
	} catch (err) {
		console.log(err.message);
	}
});
// update the todo item on todolist

// delete the todo

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
