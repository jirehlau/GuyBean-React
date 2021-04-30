import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Restaurants from './pages/Restaurants/Restaurants';
import AuthPage from './pages/AuthPage/AuthPage';
import AddRestaurantForm from './pages/AddRestaurantForm/AddRestaurantForm';


class App extends React.Component{
  state = {
    user:null,
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      // YOU DO: check expiry!
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      this.setState({user: userDoc})      
    }
  }
  
  render() {
    return (
     <BrowserRouter>
      <main className="App">
       
        { this.state.user ? 
            <Switch>
              <Route path='/restaurants' render={(props) => (
                <Restaurants {...props}/>
              )}/>
              <Route path='/AddRestaurantForm' render={(props) => (
                <AddRestaurantForm {...props}/>
              )}/>

              <Redirect to="/restaurants" />
            </Switch>
          :
          <div>
            <Route path='/' render={(props) => (
            <AuthPage setUserInState={this.setUserInState} {...props}/>
            )}/>
          </div>
        }
      </main>
      </BrowserRouter>
    );
  }
}

export default App;
