import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import setCurrentUser from '../src/redux/user/user.action'


import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id, ...snapshot.data()
            }
          }, () => { console.log(this.state); });


        });
      }

      setCurrentUser(userAuth);


    });


  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />

        </Switch>
      </div>


    );
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(null, mapDispatchToProps)(App);
