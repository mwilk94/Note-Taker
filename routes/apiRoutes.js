const router = require("express").Router();
const fs = require("fs");
let db = require("../db/db.json");

router.get("/notes", (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));
  res.json(db);
});

router.post("/notes", (req, res) => {
  let newNote = {
    id: Math.floor(Math.random() * 100),
    title: req.body.title,
    text: req.body.text,
  };

  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});

module.exports = router;
