'use strict'
var app=require('./app');
var port=process.env.PORT||3888;



app.listen(port,function(){
    console.log("->Servidor de Bajas-Corp escuchando en http://localhost:"+port);
})