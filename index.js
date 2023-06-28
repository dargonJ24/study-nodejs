/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
const express =require('express')
const app=express()
const port =3000;
app.get('/',(req,res)=>{res.send('hello')})
app.listen(port,console.log("App listening on port "+ port))