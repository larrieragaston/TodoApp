const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//app.use(itemRoute);
//app.use(express.static('public'));

let itemRoute = require('./routes/items');
app.use('/', itemRoute);

app.listen(PORT, () => console.info(`server has started on port ${PORT}`));