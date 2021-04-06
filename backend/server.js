//create a express server
//load express module 
const express=require('express');
//load database
const products=require('./data/products');

const app=express();
//now enter port no on which server would come



//for displaying in server

app.listen(5000,
console.log('hi i am aaku')
);

//routing-determine how application responds to client request

app.get('/',(req,res)=>{
    res.send('hello')


})

//get whole database in json

app.get('/api/products',(req,res)=>{
    res.json(products)


})



