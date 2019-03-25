// implement your API here

const express = require('express'); 
const db = require('./data/db.js'); 
const server = express();

server.use(express.json());


// helper functions 
const { checkID, checkReqBody }= require('./helper-functions.js');


// GET REQUESTS

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

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    checkID(id); 
    db
    .findById(id) 
    .then( id => {
        if (id) {
            res.status(200)
            .json({
                success: true, 
                id
            })
        } else {
            res.status(500) 
            .json({
                success: false,
                message: "The user information could not be retrieved"
            })
            req.abort();
        } 
      })
    .catch (({ code, message }) => {
        res 
        .status(code)
        .json({ 
            success: false,
            message
        })
    })
})

// POST REQUESTS

server.post('/api/users', (req, res) => {
    const userInfo = req.body; 
    checkReqBody(userInfo, res);
    db
        .insert(userInfo)
        .then( user => {
            res 
            .status(201)
            .json({success: true, user})
        })
        .catch(({ code, message }) => {
        res
        .status(500)
        .json({
            success: false,
            message: "There was an error while saving the user to the database."
        })
        })
})

// DELETE REQUESTS 

server.delete('/api/users/:id', (req, res) => {
    const id = req.params.id; 
    checkID(id);
    db 
    .remove(id)
    .then(deleted => {
        res.status(204);
    }) 
    .catch ( ({code, message}) => {
        res
        .status(500)
        .json({
            success: false,
            message: "The user could not be removed"
        })
    })
})

// PUT REQUESTS 

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params; 
    const user = req.body; 
    checkID(id); 
    checkReqBody(user, res);
    db 
    .update(id, user) 
    .then(updated => {
        if (updated) {
            res.status(200)
            .json({
                success: true,
                updated
            })
        } else {
            res.status(404)
            .json({
                success: false,
                message: "The user with the specified ID does not exist."
            })
        }
    }) 
    .catch(({ code, message }) => {
        res
        .status(500)
        .json({
            success: false,
            message: "The information could not be modified"
        })
    })
})



// SERVER PORT

server.listen(4000, () => {
    console.log("\n *** server running on http://localhost:4000 ***\n");
});