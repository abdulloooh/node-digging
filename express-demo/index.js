const express = require('express')

const app = express();

app.get('/', (req,res)=> res.send("Hello world"))

app.get('/api/courses' , (req,res) => {
    // res.send ({ a: 1, b: 2, c:3})
    res.send(req.query)  //http://localhost:4000/api/courses?sortBy=id&return=array
})

app.get('/api/courses/:id' , (req,res)=>res.send(res.send(req.params.id)))

app.get('/api/courses/:year/:month/:id', (req,res)=> {
    res.send(req.params )
    // res.send( req.params.month)
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listenin on port ${port}...`))