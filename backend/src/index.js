import express from "express";
import connectDB from "./db/db.js"; // Correct path for your file structure

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send({ message: "Welcome to Gencart" });
});

app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    await connectDB();
});