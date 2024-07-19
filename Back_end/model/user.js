/** @format */

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define(
	"user",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

export default User;
