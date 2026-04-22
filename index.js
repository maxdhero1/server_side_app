const express = require('express');
const app = express()
const users = [
    {id: 1, name: 'Alice', email:'alice@example.com'},
    {id: 2, name:'Bob', email:'bob@example.com'},
];
//get all users
app.get('/users', (req, res)=>{
    res.status(200).json(users);
});
//get a simgle users
app.get('/users/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const user = users.find(el =>el.id=== id);

    if (!user){
        return res.status(404).json({error:'user not found'});
        }
        res.status(200).json(user);
})
const port = 8080;
app.get('/', (req, res)=>{
    res.send('server is up and running')

})

app.listen(port,()=>{
    console.log(`server is listening on port: ${port}`)
})