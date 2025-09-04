import express from "express";
import { User } from "../models/customerSchema.js";
import moment from "moment";

const router = express.Router();

// GET request
router.get("", (req, res) => {
  res.render("user/add");
});

// POST request
router.post("", (req, res) => {
  // console.log(req.body);
  // const user = new User(req.body);
  // user
  //   .save()
  //   .then(() => {
  //     res.redirect("/");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  User.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});


export default router