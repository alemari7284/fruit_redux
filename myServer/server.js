const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let array = [
  {
    id: 1,
    name: "Mela",
    price: 1.99,
    quantity: 100,
  },
  {
    id: 2,
    name: "Banana",
    price: 0.99,
    quantity: 100,
  },
  {
    id: 3,
    name: "Arancia",
    price: 2.49,
    quantity: 100,
  },
  {
    id: 4,
    name: "Pera",
    price: 1.79,
    quantity: 100,
  },
  {
    id: 5,
    name: "Kiwi",
    price: 2.99,
    quantity: 100,
  },
  {
    id: 6,
    name: "Limone",
    price: 1.49,
    quantity: 100,
  },
  {
    id: 7,
    name: "Ananas",
    price: 3.99,
    quantity: 100,
  },
  {
    id: 8,
    name: "Fragola",
    price: 0.79,
    quantity: 100,
  },
  {
    id: 9,
    name: "Melone",
    price: 4.99,
    quantity: 100,
  },
  {
    id: 10,
    name: "Pesca",
    price: 2.29,
    quantity: 100,
  },
];

app.get("/", (req, res) => {
  return res.send(array);
});

app.listen("4000", () => {
  console.log("Server listening on port 4000");
});
