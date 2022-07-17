'use strict'
var express=require('express');
var ContactController=require('../controllers/contact');
var api=express.Router();

api.get('/test',ContactController.pruebas);
api.get('/contacts',ContactController.getcontactNAME);//for name
api.get('/contacts/:id?',ContactController.getContactID);//for id

api.delete('/contacts/:id?',ContactController.deleteContact);//for id
module.exports=api;