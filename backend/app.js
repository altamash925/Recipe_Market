const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('backend is now created');
});

module.exports = app;