import express from "express";
import { User } from "../models/customerSchema.js";
import moment from "moment";
import { userController7 } from "../controllers/userController.js";

const router = express.Router();

// GET request
router.get("", (req, res) => {
  res.render("user/add");
});

// POST request 
// for creating new user
router.post("", userController7);


export default router