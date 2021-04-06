//create a express server
//load express module 
const express=require('express');

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




