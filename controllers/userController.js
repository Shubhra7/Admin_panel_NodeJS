import { User } from "../models/customerSchema.js";
import moment from "moment";

// For main index page view
const userController1 = (req, res) => {
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
}


// For edit page view
const userController2 = (req, res) => {
  const val = req.params.id;
  User.findById(val)
    .then((val) => {
      res.render("user/edit", { item: val, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
}

// For personalized View page of different person
const userController3 = (req, res) => {
  // result ==> object

  User.findById(req.params.id)
    .then((result) => {
      // console.log(result);
      res.render("user/view", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
}

// For search 
const userController4 = (req, res) => {
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
}

// DELETE request
const userController5 = (req, res) => {
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
}

// PUT request
const userController6 = (req, res) => {
  // User.findByIdAndUpdate(req.params.id, req.body)
  User.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      // console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
}

// for creating new user
const userController7 = (req, res) => {
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
}

export {
    userController1,
    userController2,
    userController3,
    userController4,
    userController5,
    userController6,
    userController7
}
