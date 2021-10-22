const express = require('express')
const cors = require('cors');
const { json } = require('express');
const app=express()

const port = 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from node I am comming hahah! hiiii hhaahhaha hiiii hahhaha')
});

const users = [
    { id: 0, name: 'sabana', email: 'sjgdfhgh@gmiikk.com' },
    { id: 1, name: 'sabnur', email: 'sjgdfhgh@gmiikk.com' },
    { id: 2, name: 'hero', email: 'sjgdfhgh@gmiikk.com' },
    { id: 3, name: 'vabna', email: 'sjgdfhgh@gmiikk.com' },
    { id: 4, name: 'chinta', email: 'sjgdfhgh@gmiikk.com' },
    { id: 5, name: 'sabana', email: 'sjgdfhgh@gmiikk.com' },
    { id: 6, name: 'sabana', email: 'sjgdfhgh@gmiikk.com' },
    { id: 7, name: 'sabana', email: 'sjgdfhgh@gmiikk.com' }

]

// use query parameter
app.get('/users', (req, res) => {
    const search=(req.query.search_name);
    if(search){
        const saerchResult=users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(saerchResult);
    }
    else{
        res.send(users)
    }
})

// dynamic api
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);

    console.log(req.params.id);
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yummu yummy fazli am');
})


app.listen(port, () => {
    console.log('listening to port', port);
})

// post method load data from UI then add in UI

app.post('/users',(req,res)=>{
    console.log('hitting the post', req.body);

    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


