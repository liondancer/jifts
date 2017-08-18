import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as signUpActions from '../../actions/signupActions';


class SignUpPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.onSignUp = this.onSignUp.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  onFormChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  onSignUp(event) {
    event.preventDefault();
    this.props.actions.signUp(this.state);
  }

  render () {
    return (
      <div>
        <SignUpForm onFormChange={ this.onFormChange } onSignUp={ this.onSignUp } />
      </div>
    );
  }
}

const SignUpForm = ({ onSignUp, onFormChange }) => {
  return (
    <div>
      <form onChange={ onFormChange }>
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="First Name" name="firstname" />
        <input type="text" placeholder="Last Name" name="lastname" />
        <input type="password" placeholder="Password" name="password" />
        {/*<input type="password" placeholder="Repeat Password" name="repeat" />*/}
        <button type="button" onClick={ onSignUp }>Sign Up</button>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  onSignUp: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired
};

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
