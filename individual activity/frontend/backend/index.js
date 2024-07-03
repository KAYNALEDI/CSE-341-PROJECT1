const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware 
app.use(bodyParser.json());

// Simple route for testing 
app.get('/', (req, res) => { res.send('Hello World'); });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Seever is running on port ${PORT}`);
});

app.use('/', require(',/routes'));

// app.listen(PORT, () => {console.log('running on port ${PORT}')});