/** @format */

// config/db.js

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

const sequelize = new Sequelize({
	dialect: "mysql",
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

export default sequelize;
