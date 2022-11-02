const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res)=>{
    res.send('Hola a todos')
})

app.get("/users", (req, res)=>{
    res.send({name:"Juan"})
})


app.listen(port, ()=>{
    console.log('Servers tarted!')
})