// implement your API here

const express = require('express'); 
const db = require('./data/db.js'); 
const server = express();

server.use(express.json());



server.get('/', (req, res) => {
    res.send("Is this working?");
}) 


server.get('/api/users', (req, res) => {
    db
    .find()
    .then(users => {
        res.status(200)
        .json(users)
    })
    .catch( ({ code, message }) => {
        res.status(code).json({ success: false, message })
    })
})


server.post('/api/users', (req, res) => {
    const userInfo = req.body;

    db.users 
        .add(userInfo)
        .then( user => {
            res 
            .status(201)
            .json({success: true, user})
        })
        .catch(({ code, message }) => {
            res 
            .status(code)
            .json({ 
                success: false,
                message
            })
        })
})



server.listen(4000, () => {
    console.log("\n *** server running on http://localhost:4000 ***\n");
});