import { Router } from 'express';
import Models from '../models';
import Bcrypt from 'bcrypt';
import Passport from 'passport';


const router = Router();

router.post('/signup', (req, res, next) => {
  console.log('Registering!');
  console.log(req.body);
  req.checkBody('username', 'Username cannot be empty.').notEmpty();
  req.checkBody('email', 'Invalid Email').isEmail();
  req.checkBody('email', 'Email address is too short. Try again').len(4, 100);
  req.checkBody('password', 'Password should be at least 8 characters long').len(8, 30);
  req.checkBody('repeatPassword', 'Password should be at least 8 characters long').len(8, 30);
  req.checkBody('repeatPassword', 'Passwords do not match').equals(req.body.password);

  req.getValidationResult().then(results => {
    if (!results.isEmpty()) {
      console.log(`errors: ${JSON.stringify(results.array())}`);
      res.json({"Message": "errors"})
    } else {
      const saltRounds = 10;
      Bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        Models.user.create({
          userName: req.body.username,
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          email: req.body.email,
          password: hash
        }).then(() => {
          console.log("Successfully created user!");
          Models.user.findOne({
            where: {email: req.body.email}
          }).then( user => {
            const userId = user.dataValues.id;
            req.login(userId, err => {
              console.log('Login successful');
              res.json({redirect: '/'});
            });
          });
        }).catch(err => {
          console.log("Error creating user...");
          res.json({"Message": "ddddd"});
        });
      });
    }
  });
});

router.post('/login', (req, res, next) => {
  console.log("Logging in...");
});

router.post('/logout', (req, res, next) => {
  console.log("Logging out...");
  if (req.session.key) {
    req.session.destroy();
  }
});

Passport.serializeUser((userId, done) => {
  done(null, userId);
});

Passport.deserializeUser((userId, done) => {
  done(null, userId);
});


export default router;