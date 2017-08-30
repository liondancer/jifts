import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as signUpActions from '../../actions/signUpActions';
import SignUpForm from './SignUpForm';


class SignUpPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      passwordMatch: true,
      passwordLength: true
    };
    this.onSignUp = this.onSignUp.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onFormChange(event) {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  checkPasswordLength(p) {
    ( p.length > 7 && p.length < 31 ) ? this.setState({passwordLength: true}) : this.setState({passwordLength: false});
  }

  checkMatchinPasswords(p1, p2) {
    (p1 === p2) ? this.setState({passwordMatch: true}) : this.setState({passwordMatch: false});
  }

  onSignUp(event) {
    event.preventDefault();
    console.log(event);
    this.checkMatchinPasswords(this.state.password, this.state.repeatPassword);
    this.checkPasswordLength(this.state.password);
    if (this.state.passwordLength && this.state.passwordMatch) {
      this.props.actions.signUp(this.state);
    }
  }

  render () {
    return (
      <div>
        <SignUpForm
          onFormChange={ this.onFormChange }
          onSignUp={ this.onSignUp }
          passwordMatch={ this.state.passwordMatch }
          passwordLength={ this.state.passwordLength }
        />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signUpActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);