const express = require('express')
var cors = require('cors')
const app = express()
const swishQr = require('swish-qr');

app.use(cors())

app.get('/', (req,res) => {
	console.log("root called");
})

app.get('/products', (req, res) => {
    //console.log("products called");
    var data = 
        [{productId: 0, name: "Cocacola", price: 15, picUrl: "../static/cocacola.png" },
        {productId: 10, name: "Cocacola zero", price: 15, picUrl: "../static/cola_zero.png" },
        {productId: 1, name: "Ramlösa", price: 15, picUrl: "../static/ramlosa.png"},
        {productId: 2, name: "Billys Original", price: 20, picUrl: "../static/billys.png"},
        {productId: 3, name: "Billys Hawaii", price: 20, picUrl: "../static/billys_hawaii.png"},
        {productId: 12, name: "Kexchoklad", price: 10, picUrl: "../static/kexchoklad.png"},
        {productId: 4, name: "Marabou Choklad", price: 20, picUrl: "../static/marabou.png"},
        {productId: 5, name: "Marabou Daim", price: 20, picUrl: "../static/marabou_daim.png"},
        {productId: 6, name: "Snickers", price: 10, picUrl: "../static/snickers.png"},
        {productId: 7, name: "Red Bull", price: 25, picUrl: "../static/redbull.png"},
        {productId: 11, name: "Powerking Energy", price: 15, picUrl: "../static/powerking.png"},
        {productId: 8, name: "Mentos", price: 10, picUrl: "../static/mentos.png"},
        {productId: 9, name: "Läkerol", price: 10, picUrl: "../static/lakerol.png"}];
    res.json(data);
});

app.get('/createqrcode', (req, res) => {
    console.log("createqrcode called");
    
    swishQr({
        amount: req.query.amount,
        lock: ['number'],
        message: 'Matfix betalning',
        number: '0701464670'
    }).then(result => {
        var img = Buffer.from(result.replace('data:image/png;base64,', ''), 'base64')

        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': img.length
        });

        res.end(img); 
    });
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(3030, () => console.log('Matfix backend listening on port 3030!'))
