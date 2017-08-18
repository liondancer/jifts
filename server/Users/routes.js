import { Router } from 'express';
import ExpressValidator from 'express-validator';

const router = Router();

router.post('/register', (req, res, next) => {
  console.log('Registering!');
  console.log(req);
  req.checkBody('username', 'Username cannot be empty.').notEmpty();
  req.checkBody('email', 'Invalid Email').isEmail();
  req.checkBody('email', 'Email address is too short. Try again').len(4, 100);
  req.checkBody('password', 'Password should be at least 8 characters long').len(8, 100);
  // req.checkBody('password', 'Password must include ').matches();
  req.checkBody('passwordMatch', 'Password should be at least 8 characters long').len(8, 100);
  req.checkBody('passwordMatch', 'Passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    console.log(`errors: ${JSON.stringify(errors)}`);
  }

});

export default router;