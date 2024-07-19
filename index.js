/** @format */

const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Set up storage engine
const storage = multer.diskStorage({
	destination: "./uploads/", // Directory to save uploaded files
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// Initialize multer upload
const upload = multer({ storage: storage }).single("myfile");

// Serve static files
app.use(express.static("public"));

// Handle file upload
app.post("/upload", (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			return res.send("Error occurred during file upload.");
		}
		res.send("File uploaded successfully.");
	});
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
