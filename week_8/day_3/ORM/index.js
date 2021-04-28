// --- Get Tools && Set Port --- //

const express = require("express");
const app = express();
const port = 3000;
const Sequelize = require("sequelize");
const { User } = require("./models");

// --- Routes --- //

app.post("/users", async (req, res) => {
	// req.body contains an Object with firstName, lastName, email
	const { firstName, lastName, email } = req.body;
	const newUser = await User.create({
		firstName: "Jimmy",
		lastName: "Easly",
		email: "ajeasley@nasa.gov",
	});

	// Send back the new user's ID in the response:
	res.json({
		id: newUser.id,
	});
});
app.get("/users", async (req, res) => {
	const users = await User.findAll();
	({
		attributes: ["lastName"],
	});
	res.json(users);
});
app.get("/users/:id", async (req, res) => {
	try {
		const oneUser = await User.findByPk(req.params.id);
		res.json(oneUser);
	} catch (e) {
		console.log(e);
		res.status(404).json({
			message: "User not found",
		});
	}
	app.post("/users/search", async (req, res) => {
		const users = await User.findAll({
			where: {
				[Sequelize.Op.or]: [
					{
						firstName: req.body.term,
						lastName: req.body.term,
					},
				],
			},
		});
		res.json(users);
	});
});
app.get("/users/photos", async (req, res) => {
	const users = await User.findAll({
		include: [
			{
				model: Photo,
			},
		],
	});
	res.json(users);
});
app.post("/users/search", async (req, res) => {
	const users = await User.findAll({
		where: {
			[Sequelize.Op.or]: [
				{
					firstName: req.body.term,
					lastName: req.body.term,
				},
			],
		},
		include: [
			{
				model: Photo,
			},
		],
	});
	res.json(users);
});
app.get("/photos/users", async (req, res) => {
	const photos = await Photos.findAll({
		include: [
			{
				model: User,
			},
		],
	});
	res.json(photos);
});
