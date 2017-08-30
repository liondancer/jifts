import React, { PropTypes } from 'react';

const SignUpForm = ({ onSignUp, onFormChange, passwordMatch, passwordLength }) => {
  return (
    <div>
      <form onChange={ onFormChange }>
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="First Name" name="firstname" />
        <input type="text" placeholder="Last Name" name="lastname" />
        <input type="password" placeholder="Password" name="password" />
        <input type="password" placeholder="Repeat Password" name="repeatPassword" />
        { !passwordMatch && (
          <div>
            { "Passwords do not match" }
          </div>
        ) }
        { !passwordLength && (
          <div>{ "Password must be between 8 to 30 characters in length" }</div>
        ) }
        <button type="button" onClick={ onSignUp }>Sign Up</button>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  onSignUp: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
  passwordMatch: PropTypes.bool.isRequired,
  passwordLength: PropTypes.bool.isRequired
};

export default SignUpForm;