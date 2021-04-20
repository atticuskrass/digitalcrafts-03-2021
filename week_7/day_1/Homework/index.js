//---Create Node Server--//
const express = require("express");
const app = express();
const { readFile } = require("fs");
const PORT = 3000;
//---Middleware---//
app.use(express.json());
app.use(express.static("Public"));
//---Create Routes---//
app.get("/", (req, res) => {
	readFile("./index.html", "utf8", (err, html) => {
		res.send(html);
	});
});
app.get("/Store", (req, res) => {
	readFile("./store.html", "utf8", (err, html) => {
		res.send(html);
	});
});
app.get("/Contact", (req, res) => {
	readFile("./contact.html", "utf8", (err, html) => {
		res.send(html);
	});
});
//---Listen to PORT---//
app.listen(PORT, () => {
	console.log(`This server is running on http://${PORT}`);
});
