// Playing around with NeDB
const fs = require("fs");
const Datastore = require("nedb");

const db = new Datastore({ filename: "toppings.db", autoload: true});

db.loadDatabase();

// const content = fs.readFileSync('pizzaToppings.json');
// let pizzaToppingsObj = JSON.parse(content);
// let pizzaToppings = pizzaToppingsObj.pizzaToppings;
// pizzaToppings = pizzaToppings.map((topping) => {
//   return {
//     name: topping
//   };
// });

// db.insert(pizzaToppings, (err, docs) => {
//   console.log(docs);
// });





// const topping = {
//   name: "pepperoni"
// };

// const toppings = [
//   {
//     name: "ham"
//   },
//   {
//     name: "pineapple"
//   }
// ]

// db.insert(toppings, (err, docs) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(docs);
// });

// db.find({ _id: "K8R9hFndcKTXZNsW"}, (err, docs) => {
//   console.log(docs);
// });

// db.remove({ _id: "K8R9hFndcKTXZNsW"},
//   (err, numRemoved) => {
//     console.log(numRemoved);
// });

// db.find({}, (err, docs) => {
//   console.log(docs);
// });

// db.update({ _id: 'Vubd1ed8QKkod22U'},
//   { $set: {price: 1.99} },
//   {returnUpdatedDocs: true},
//   (err, num, updatedDocs) => {
//     console.log(updatedDocs);
//   });

db.find({}).sort({name: 1}).exec((err, docs) => {
  console.log(docs);
});
