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
app.use(express.static(path.join(__dirname, 'client/build')));

// Link routes
import stores from './routes/store.routes';
app.use('/api', stores);

// Serve static assets
if (config.ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  });
}

// Start app
app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Server is running on port: ${config.port}! Build something amazing!`);
  }
});
