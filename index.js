const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories=require('./Data/categories.json')
app.use(cors());
app.get('/', (req, res) => {
    res.send('News API running');
})

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('Dragon News Server running on port',port);
})