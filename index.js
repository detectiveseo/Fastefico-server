const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000 || process.env.PORT
app.use(cors())


const chefs = require('./data/chefs.json')

app.get("/", (req, res) => {
    res.send('server is runing on the way')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const singleChef = chefs.find(chef => id == chef.id)
    res.send(singleChef)
})



const foods = require("./data/foods.json")

app.get("/foods", (req, res) => {
    res.send(foods);
})

app.get("/foods/:chef_name", (req, res) => {
    const chefName = req.params.chef_name;
    const recipePerChefe = foods.filter(food => food.chef == chefName)
    res.send(recipePerChefe)
})

app.listen(PORT, (err) => {
    console.log(`my server is runing at ${PORT}`)
})

