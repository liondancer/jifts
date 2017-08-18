import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';


const AuthHeaderComponent = ({ isAuthenticated, userData }) => {
  return (
    <div>
      { isAuthenticated ? (
          <div>
            <p>{ userData.firstName }</p>
            <p>{ userData.lastName }</p>
            <p>{ userData.email }</p>
          </div>
        ) : (
          <div>
            <Link to="/signup">Sign Up</Link>
            {" | "}
            <Link to="/login">Log In</Link>
          </div>
        )
      }
    </div>
  );
};

AuthHeaderComponent.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userData: PropTypes.object
};

export default AuthHeaderComponent;