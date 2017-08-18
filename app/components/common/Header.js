import React, { PropTypes } from 'react';
import AuthHeaderComponent from '../auth/AuthHeaderComponent';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  render() {
    return(
      <div>
        <AuthHeaderComponent isAuthenticated={ this.props.isAuthenticated } />
      </div>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default Header;