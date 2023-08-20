import express from "express";
import mongoose from "mongoose";
import path from "path";

mongoose
  .connect("mongodb://127.0.0.1:27017/", { dbName: "sixpack" })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Error connecting to database:", error));

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Messge = mongoose.model("message", messageSchema);

const app = express();
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/", (req, res) => {
  res.cookie("name", "maggie");

  res.redirect("/");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", async (req, res) => {
  await Messge.create(req.body);
  res.redirect("/");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(3000, () => {});
