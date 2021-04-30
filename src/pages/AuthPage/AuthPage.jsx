import React from 'react'
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class AuthPage extends React.Component {
  state = {
    showLogin: true,
  }

  render() {
    return (
      <main className="AuthPage">
        <div>
          <button onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
            {this.state.showLogin ? 'CLICK HERE TO SIGN UP' : 'CLICK HERE TO LOG IN'}
          </button>
        </div>
        {/* Another ternary operator! */}
        {/* If showLogin is true, show the login form. If false, show the signup form */}
        {this.state.showLogin ? 
        <LoginForm setUserInState={this.props.setUserInState}/> : 
        <SignUpForm setUserInState={this.props.setUserInState} />}
      </main>
    );
  }
}

export default AuthPage;