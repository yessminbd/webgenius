const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const port = 3000;
app.use(cors());

// Transform  data -> JSON
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Web genius');
});

const userRoute = require('./Routes/User.js');
const { populate } = require('./Models/User.js');
app.use('/webgenius/user', userRoute);

// cnx with db
mongoose.connect('mongodb://localhost:27017/Webgenius');

// Verification
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Database connected successfully");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
