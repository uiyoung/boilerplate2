const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const config = require('./config/key');
const authRouter = require('./routes/auth');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/auth/', authRouter);

const start = async () => {
  try {
    mongoose.connect(config.mongoURI);
    app.listen(port, () => console.log('> Server is up and running on port : ' + port));
  } catch (error) {
    console.error(error);
  }
};

start();
