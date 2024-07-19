/** @format */

import express from "express";

import { createServer } from "http";
import path from "path";
import cors from "cors";
import sequelize from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
//import chatRoutes from "./routes/chatRoutes.js";
//import configureSocket from "./socket.js";

const app = express();
const server = createServer(app);
// const io = configureSocket(server); // Configure Socket.io with the server

// Middleware
app.use(cors());
app.use(express.json());

// // Serve static files from 'file_uploads' directory
// const dirname = path.resolve();
// app.use("/uploads", express.static(path.join(dirname, "file_uploads")));

// // Routes
app.use("/api/auth", authRoutes); // Route for authentication
//app.use("/api/chat", chatRoutes); // Route for chat functionality

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
	console.log(`Server running on port: ${PORT}`);

	try {
		await sequelize.sync({ force: false }); // Change to true to reset DB
		console.log("Database synchronized");
	} catch (error) {
		console.error("Unable to synchronize database:", error);
	}
});
