//step 1:import the express module

const express = require('express');

//step 2:create an express application instance
const app = express();
const studentInfo=[
    {name:"Alice",age:20,grade:"A"},
    {name:"Bob", age:21, grade:"B"},
    {name:"Maxwell", age:22, grade:"C"}
]
app.get("/all-data",(req, res)=>{
    res.json(studentInfo[2]);
})
//step 3: Define a route handler for GET request to/

app.get('/',(req, res)=>{
    res.send('Hello, world! welcome to express.js!');
    
})
app.get('/Status',(req, res)=>{
    res.sendStatus(200).send('OK');

app.get('/About',(req, res)=>{
    res.send ("this is about page")
})
app.get('/Contact',(req, res)=>{
    res.send("this is my contact page")
})

//step 4:start listening on port 3000
app.listen(3000, function(){
    console.log('server is up and running now')
});



