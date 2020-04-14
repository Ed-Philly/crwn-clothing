import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/header/header.component'

import './App.css';

const HatsPage = () => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '340px', margin: '25px 25px', backgroundColor: 'lightblue' }}>
    <h1>HATS PAGE</h1></div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/' component={ShopPage} />

      </Switch>
    </div>


  );
}

export default App;
