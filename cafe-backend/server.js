import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.ypd9d9t.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
  app.listen(8000, () => {
    console.log("server started on port 8000");
    console.log("connected to db");
  });
});

app.use("/api/users", userRouter);
