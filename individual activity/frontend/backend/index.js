const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware 
app.use(bodyParser.json());

// Simple route for testing 
app.get('/', (req, res) => { res.send('Hello World'); });

const port = process.env.PORT || 8080;

app.use('/', require(',/routes'));

app.listen(port, () => {console.log('running on port ${port}')});