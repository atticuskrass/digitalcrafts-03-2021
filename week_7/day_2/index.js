//---Create Node Server--//
const express = require("express");
const app = express();
const PORT = 3000;
//---Middleware---//
app.use(express.json());
//---Create Routes---//
app.get("/Index", (req, res) => {
	res.send("Home Page");
});
app.get("/About", (req, res) => {
	res.send("About Page");
});
app.get("/Team", (req, res) => {
	res.send("Team Page");
});
app.post("/FAQ", (req, res) => {
	const { name, age } = console.log(req.body);
	res.send("Page updated!");
});
//---Listen to PORT---//
app.listen(PORT, () => {
	console.log(`This server is running on http://${PORT}`);
});
