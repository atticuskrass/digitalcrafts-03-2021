"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
app.post("/users", async (req, res) => {
	// req.body contains an Object with firstName, lastName, email
	const { firstName, lastName, email } = req.body;
	const newUser = await User.create({
		firstName: "Bruce",
		lastName: "Wayne",
		universe: "DC",
	});

	// Send back the new user's ID in the response:
	res.json({
		id: newUser.id,
	});
});
