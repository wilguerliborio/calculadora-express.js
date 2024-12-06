const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
});

app.post('/',function(req,res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2)

    let result = num1 + num2;
    res.send('resultado da soma é:' + result);
});

app.get('/bmiCallator', function(req,res){
    res.sendFile(__dirname + '/bmiCallator.html')
});

app.post('/bmiCallator',function(req,res){
    let peso = parseFloat(req.body.peso);
    let altura = parseFloat(req.body.altura);

    let imc = peso / (altura * altura);
    res.send('seu imc é:' + imc.toFixed(2));
});

app.listen(3000,function(){
    console.log('servidor esta no ar porta 3000');
});
