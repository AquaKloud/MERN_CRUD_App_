const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://DGSMY:Sanjeewa1997%40@mernapp.qdroz6l.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
