import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import "dotenv/config";
import path from "path";

import userRoutes from "./routes/users";
import auhRoutes from "./routes/auth";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/users", userRoutes);
app.use("/api/auth", auhRoutes);

app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});
