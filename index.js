const express = require('express');
const cors = require('cors');
const phones = require('./phone.json');
const app = express();
const port = 5000;


app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello world! I am here.')
});

app.get('/phones', (req, res) => {
    res.send(phones);
});

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
    
})

app.listen(port, () => {
    console.log(`My server is running on port: ${port}`);
});