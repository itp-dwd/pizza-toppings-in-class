const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();

const Datastore = require("nedb");
const db = new Datastore({ filename: "toppings.db", autoload: true });
db.loadDatabase();

// static file server
app.use(express.static('public'));
// if there is a request body, parse it as JSON
app.use(express.json());

// ENDPOINT
app.get("/toppings", (req, res) => {
  console.log("Pizza toppings requested!!!");
  db.find({}, (err, docs) => {
    res.json(docs);
  });
});

app.post("/toppings", (req, res) => {
  console.log(req.body);
  const topping = req.body.topping;
  db.insert({name: topping}, (err, newDocs) => {
    res.json(newDocs);
  });

});

app.listen(3000, () => {
  console.log("Server listening at http://localhost:3000!")
});

// CRUD - Create, Read, Update, Delete
// READ GET /name
// UPDATE POST /name