import express from "express";
import { User } from "../models/customerSchema.js";
import moment from "moment";
import { userController2, userController5, userController6 } from "../controllers/userController.js";

const router = express.Router();

// GET request
router.get("/edit/:id",userController2 );

// DELETE request
router.delete("/edit/:id", userController5);

// PUT request
router.put("/edit/:id", userController6 );


export default router