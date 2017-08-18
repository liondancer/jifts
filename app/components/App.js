
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import LoginPage from "./auth/LogInPage";
import SignUpPage from "./auth/SignUpPage";
import Header from './common/Header';
import Footer from './common/Footer';

import React, {PropTypes} from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    return (
      <div>
        <Header isAuthenticated={ false } />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignUpPage}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

// App.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired
// };

// function mapStateToProps() {
//
// }
//
// function mapDispatchToProps() {
//
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;