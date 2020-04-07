// import express from 'express';// es2015 method for bringing in express.

const express = require('express'); //similar to above method, but works in all node versions.

const server = express();

//middleware
server.use(express.json()); // teaches the server to parse JSON from the body for post and other requests where the client sends
                            // data to the server.

const userArray = [{id: 1, name: 'Bruce Wayne', bio: 'I am only a philanthropist, nothing more!'},
{id: 2, name: 'Charles Edward Cheese', bio: "Watch Dave Chappelle's standup for proper reference."},
{id: 3, name: 'Michael Scott', bio: "People say I am the world's best boss."}];

// endpoints
server.get('/api/users', (req, res) => res.json(userArray)); //returns full array of users

// returns a user by their id
server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;

    const userByID = userArray.find((userByID) => userByID.id == id);
    
    if (userByID) {
        res.status(200).json(userByID);
    }
    else {
        res.status(404).json({message: "That user id was not found"});
    }
});

// Creates a user using the information sent inside the request body.
server.post('/api/users', (req, res) => { 
    const userBody = req.body;

    userArray.push(userBody);

    res.status(201).json(userArray);
}) 

const port = 5000; // the server is running on http://localhost:5000
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`));