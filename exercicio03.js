const express = require('express')
const  app = express()

const pessoas= require('./routes/pessoas')

app.use(express.json());
 
app.use(pessoas)


app.listen(3000, ()=>{
    console.log("Aplicação rodando na porta http/localhoste:3000")
})  