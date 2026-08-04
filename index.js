const express = require('express')
const app= express()

app.get('/',(req,res)=>{
    res.send({
        name:"hello world hii"
    })
})
app.listen(3001,()=>{
   console.log("server running at"+ " "+ 3001)
})