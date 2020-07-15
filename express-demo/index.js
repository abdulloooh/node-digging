const express = require('express')

const app = express();

app.get('/', (req,res)=> res.send("Hello world"))

app.get('/api/courses' , (req,res) => res.send ({ a: 1, b: 2, c:3}))

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listenin on port ${port}...`))