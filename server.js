const express = require('express');
const bodyparser = require('body-parser');
const routerProduct = require('./routes/products');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/product',routerProduct)
app.use(bodyparser.json());
app.listen(9898,'0.0.0.0',()=>{
    console.log('server started on port 9898');
})

app.get('/',(request,response)=>{
    response.send('hey node');
})
