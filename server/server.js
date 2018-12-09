import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import config from './config';
import path from 'path';

// Create app instance
const app = express();
const router = express.Router();

// Connect to DB
mongoose.connect(config.mongoURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set up app
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(logger('dev'));

/**
 * NOTE: This allows CORS as dev server/client
 * are on diff ports
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Link routes
import stores from './routes/store.routes';
app.use('/api', stores);

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// Start app
app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Server is running on port: ${config.port}! Build something amazing!`); // eslint-disable-line
  }
});
