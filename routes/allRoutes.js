import express from "express";
import { User } from "../models/customerSchema.js";
import moment from "moment";
import {userController1, userController3, userController4} from "../controllers/userController.js";

const router = express.Router();

// GET request
router.get("/", userController1);

// For personalized View page of different person
router.get("/view/:id", userController3);


// For search 
router.post("/search", userController4);



export default router;
