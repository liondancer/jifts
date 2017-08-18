import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../actions/loginActions';


class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(event) {

  }

  render () {
    return (
      <div>
        <LogInForm onLogin={ this.onLogin } />
      </div>
    );
  }
}

const LogInForm = ({ onLogin }) => {
  return (
    <div>
      <p>Log In Page</p>
      <div>
        Google OAUTH 2
      </div>
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

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);