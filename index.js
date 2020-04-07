// import express from 'express';// es2015 method for bringing in express.

const express = require('express'); //similar to above method, but works in all node versions.

const server = express();

// endpoints
server.get('/api/users', (req, res) => {
    res.json({id: 1, name: 'Bruce Wayne', bio: 'I am only a philanthropist, nothing more!'},
    {id: 2, name: 'Charles Edward Cheese', bio: "Watch Dave Chappelle's standup for proper reference."},
    {id: 3, name: 'Michael Scott', bio: "People say I am the world's best boss."})
});

const port = 5000; // the server is running on http://localhost:5000
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`));