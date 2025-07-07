import express from "express";
import { authenticate, authorize } from "../middlewares/auth.js";
import {
  register,
  login,
  showUsers,
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/userController.js";

const app = express();

app.use(express.json());

const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.get("/showusers", authenticate, authorize("admin"), showUsers);

userRouter.patch("/:id", authenticate, authorize("admin"), updateUser);

userRouter.delete("/:id", authenticate, authorize("admin"), deleteUser);

userRouter.get("/:id/profile", authenticate, authorize("admin"), getUser);

export default userRouter;
