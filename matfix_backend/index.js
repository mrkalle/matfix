const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/products', (req, res) => {
	console.log("products called");
    var data = 
        [{productId: 0, name: "Cocacola", price: 10, picUrl: "../static/cocacola.png" },
        {productId: 1, name: "Ramlösa", price: 10, picUrl: "../static/ramlosa.png"},
        {productId: 2, name: "Fanta", price: 12, picUrl: "../static/fanta.png"},
        {productId: 3, name: "Ahlgrens bilar", price: 20, picUrl: "../static/bilar.png"},
        {productId: 4, name: "Geléhallon", price: 11, picUrl: "../static/gelehallon.png"},
        {productId: 5, name: "Schweizernöt", price: 16, picUrl: "../static/schweizernot.png"},
        {productId: 6, name: "Snickers", price: 10, picUrl: "../static/snickers.png"},
        {productId: 7, name: "Felix Gulasch", price: 29, picUrl: "../static/felix_gulasch.png"},
        {productId: 8, name: "Felix Coconut", price: 35, picUrl: "../static/felix_coconut_bean_curry.png"},
        {productId: 9, name: "Felix Soppa", price: 30, picUrl: "../static/felix_potatis_purjolok.png"}];
    res.json(data);
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(3000, () => console.log('Matfix backend listening on port 3000!'))