import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import config from './config';

// Create app instance
const app = express();
const router = express.Router();

mongoose.connect(config.mongoURL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

import stores from './routes/store.routes';

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use('/api', stores);

router.get('/', (req, res) => {
  res.json({ message: 'Hello, world! '});
});

// Start app
app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Server is running on port: ${config.port}! Build something amazing!`); // eslint-disable-line
  }
});
