const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// get data
app.get('/api/data', (req, res) => {
    res.json(data);
})

// app.use('/', require(',/routes'))

app.listen(PORT, () => {console.log(`running on port ${PORT}`)})