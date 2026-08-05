const express = require('express')
const app= express()
const count = 5;            // VIOLATION 1: unused variable
console.log("hello");        // VIOLATION 2: 0-space indent (should be 2)

function add(a, b){          // VIOLATION 2b: missing space before brace
   return a + b;
}
app.get('/',(req,res)=>{
    res.send({
        name:"hello world hii"
    })
})
app.listen(3001,()=>{
   console.log("server running at"+ " "+ 3001)
})