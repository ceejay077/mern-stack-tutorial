import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
  res.send("Server is Ready");
});

console.log(process.env.MONGODB_URI);

app.listen(5000, () => {
  console.log("server started at https://localhost:5000");
  connectDB();
});
