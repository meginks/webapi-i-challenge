// implement your API here

const express = require('express'); 
const db = require('./data/seeds/db');
const server = express(); 
server.use(express(json());


server.post('/api/users'. (req, res) => {
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
