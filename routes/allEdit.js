import express from "express";
import { User } from "../models/customerSchema.js";
import moment from "moment";

const router = express.Router();

// GET request
router.get("/edit/:id", (req, res) => {
  const val = req.params.id;
  User.findById(val)
    .then((val) => {
      res.render("user/edit", { item: val, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE request
router.delete("/edit/:id", (req, res) => {
  const val = req.params.id;
  // console.log(val);

  // User.findByIdAndDelete(val)   //after delete give the deleted item
  User.deleteOne({ _id: val })
    .then((result) => {
      res.redirect("/");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// PUT request
router.put("/edit/:id", (req, res) => {
  // User.findByIdAndUpdate(req.params.id, req.body)
  User.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      // console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});


export default router