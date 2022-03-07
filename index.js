const express = require("express")
const app = express()

app.get("/books", (req,res)=>{
    res.send('{ route: "/books"}')
})

app.get("/libraries", (req,res)=>{
    res.send('{ route: "/libraries"}')
})

app.get("/authors",(req,res)=>{
    res.send('{route: "/authors"}')
})

app.listen(3000,(req,res)=>{
    console.log('working fine at 3000 port')
})