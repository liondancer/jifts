import UserRoutes from '../routes/users';
import Models from '../models';

import express from 'express';
import cors from 'cors';
import BodyParser from 'body-parser';
import CookieParser from 'cookie-parser';
import ExpressValidator from 'express-validator';
import Http from 'http';
import Session from 'express-session';
import Passport from 'passport';
import Redis from 'redis';
const RedisStore = require('connect-redis')(Session);


// load all env
require('dotenv').config();
const port = process.env.PORT;
const app = express();

// Redis
const redisClient = Redis.createClient();
const options = {
  client: redisClient,
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
};

// --- Middleware ---
// parse JSON
app.use(cors());
app.use(BodyParser.json());
app.use(CookieParser());
app.use(BodyParser.urlencoded({extended: true}));
app.use(ExpressValidator());
app.use(Session({
  secret: 'keyboard cat',   // Salt for the cookie string
  resave: false,            // Should the session be updated even if the user hasnt made a change to the session
  saveUninitialized: false, // create cookie and session whenever a user visits the page
  cookie: { secure: true },
  store: new RedisStore(options)
}));
app.use(Passport.initialize());
app.use(Passport.session());

// -- Routes --
app.use('/users', UserRoutes);


// HTTP server
const server = Http.createServer(app);

// app.get('/', (req, res) => {
//   redisClient.incr('REDIS_KEY');
//   redisClient.get('REDIS_KEY', (err, reply) => {
//     console.log(reply);
//     res.end();
//   })
// });


Models.sequelize.sync().then(() => {
  server.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Express server listening: ' + server.address().port);
    }
  });
});
