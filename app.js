import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import mongoose, { mongo } from "mongoose";
import livereload from "livereload";
import connectLivereload from "connect-livereload";
import methodOverride from "method-override";
import allRoutes from "./routes/allRoutes.js";
import addUserRouter from "./routes/addUser.js";
import editUserRouter from "./routes/allEdit.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// create livereload server for ==> npm run watch
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/public");

// Add middleware to inject reload script
app.use(connectLivereload());

// app.use(express.urlencoded({extended: false}))
app.use(express.urlencoded({ extended: true }));

// tell express to use ejs
app.set("view engine", "ejs");

// Now any file inside the public folder can be accessed directly by its URL.
app.use(express.static("public"));

// for enable to override the POST request as PUT,DELETE,PATCH
app.use(methodOverride("_method"));

mongoose
  .connect(
    "mongodb+srv://bubaiUser:bubai123@cluster0.origwvp.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log("MongoDB connected.");

      console.log("Server responding on: ", `http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed!!.");
    console.log(err);
  });

app.use(allRoutes);
app.use("/user/add.html", addUserRouter);
app.use(editUserRouter)
