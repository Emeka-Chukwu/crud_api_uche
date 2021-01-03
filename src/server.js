import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from './config/db'

const app = express();

dotenv.config();
// app.use(cors());
app.use(express.json());

// connect to MongoDB database
connectDB();
// Home Page

app.get("/", (req, res) => {
    res.send("Welcome to the home page");

});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🔥`)
});