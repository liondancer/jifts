import db from '../db/index';

import express from 'express';
import BodyParser from 'body-parser';
import ExpressValidator from 'express-validator';



// load all env
require('dotenv').config();
const port = process.env.PORT;
const app = express();


// --- Middleware ---
// parse JSON
app.use(BodyParser.json());
app.user(ExpressValidator());




app.listen(port, () => {
  console.log('Example app listening on port 8000!')
});