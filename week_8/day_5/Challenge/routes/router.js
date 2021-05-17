// --- Get Tools && Set Port --- //

const sequelize = require("sequelize");
const express = require("express");
const app = express();
const es6Renderer = require("express-es6-template-engine");
const db = require("../models");
const port = 3000;

// --- Middleware --- //

app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");

// --- Routes --- //

// - Create Appointment - //
app.post("/create_appointment", async (req, res) => {
	const { Patient, Doctor, Date } = req.body;
	const newAppt = await Appointment.create({
		Patient,
		Doctor,
		Date,
	});
	res.json({
		id: newAppt.id,
	});
});
// - Read Appointment - //
app.get("/view_appointment", async (req, res) => {
	const appt = await Appointment.findAll();
	res.json(Appointment);
});
// - Update Appointment - //
app.post("/update_appointment", async (req, res) => {
	const { id } = req.params;
	const updatedAppt = await Appointment.update(req.body, {
		where: {
			id,
		},
	});
	res.json(updatedAppt);
});
// - Delete Appointment - //
app.delete("/appointment/:id", async (req, res) => {
	const { id } = req.params;
	const deleteAppt = await Appointment.destroy({
		where: {
			id,
		},
	});
	res.json(deleteAppt);
});

// --- Listening Post --- //

app.listen(port, () => {
	console.log(`Listening on Port ${port}`);
});
