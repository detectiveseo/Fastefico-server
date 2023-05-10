const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())


const chefs = require('./data/chefs.json')
app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const singleChef = chefs.find(chef => id == chef.id)
    res.send(singleChef)
})

const foods = require("./data/foods.json")
app.get("/foods/:chef_name", (req, res) => {
    const chefName = req.params.chef_name;
    const recipePerChefe = foods.filter(food => food.chef == chefName)
    res.send(recipePerChefe)
})

app.listen(2000, (err) => {
    console.log(err)
})

