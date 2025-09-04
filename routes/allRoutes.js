import express from "express";
import { User } from "../models/customerSchema.js";
import moment from "moment";

const router = express.Router();

// GET request
router.get("/", (req, res) => {
  //   // res.send('<h1>Hello world!!</h1>')
  //   // res.sendFile("./views/home.html",{root: __dirname})

  // Fetching all data from mongoDB for passing to index.ejs
  User.find()
    .then((result) => {
      // console.log(result);
      res.render("index", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

// For personalized View page of different person
router.get("/view/:id", (req, res) => {
  // result ==> object

  User.findById(req.params.id)
    .then((result) => {
      // console.log(result);
      res.render("user/view", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});


router.post("/search", (req, res) => {
  // console.log(req.body);
  const searchText = req.body.searchText.trim();
  User.find({ $or: [{ firstName: searchText }, { lastName: searchText }] })
    .then((result) => {
      // console.log(result);
      res.render("user/search", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});



export default router;
