import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/merncafe").then(() => {
  app.listen(8000, () => {
    console.log("server started on port 8000");
    console.log("connected to db");
  });
});

app.use("/api/users", userRouter);