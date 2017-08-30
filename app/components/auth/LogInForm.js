import React, { PropTypes } from 'react';

const LogInForm = ({ onLogin }) => {
  return (
  <div>
    <p>Log In Page</p>
    <form>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password"/>
      <button type="button" onClick={ onLogin } >Log In</button>
    </form>
  </div>
  );
};

LogInForm.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default LogInForm;

