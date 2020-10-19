const express = require('express');
const app = express()
const port = 5000;

app.get('/backend/createOrder',(req,res)=>{
    res.send('Hello World!');
})
app.post('/backend/createOrder',(req,res)=>{
    console.log(req)
    console.log(`Pasok`)
    res.send('Hello World!');
})

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.listen(port,()=>{
    console.log(`backend app listening at ${port}`)
})