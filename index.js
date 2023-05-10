const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())


const chefs = require('./data/chefs.json')
app.get('/chef', (req, res) => {
    res.send(chefs);
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const singleChef = chefs.find(chef => id == chef.id)
    res.send(singleChef)
})

const foods = require("./data/foods.json")
app.get("/foods", (req, res) => {
    res.send(foods)
})

app.listen(2000, (err) => {
    console.log(err)
})

