const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create app express
const app = express();

// Middleware
app.use(bodyParser.json());

// Simple route for testing
app.get('/', (req, rest) => {
    res.send('Hello world');
});



const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', professionalController.getData);
// localhost:8080/professional/
module.exports = router;

