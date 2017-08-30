import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../actions/logInActions';
import LogInForm from './LogInForm';


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