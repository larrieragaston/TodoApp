const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoute = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/todo-app');
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

app.use('/', itemRoute);

app.listen(PORT, () => console.info(`server has started on port ${PORT}`));