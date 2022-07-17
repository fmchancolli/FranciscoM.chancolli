'use strict'
var express=require('express');
var bodyParser=require('body-parser');


var app=express();
//cargar rutas
var contac_routes=require('./routes/contact');
//configurar bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//convierte a objeto json los datos que llegan pora las peticiones http

//ruta base
app.use('/api',contac_routes);

//configurar las cabeceras http   queda pendiente ->>Method
app.use((req,res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY,Origin,X-Requested-With,Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    
    });

//rutas 
module.exports=app;