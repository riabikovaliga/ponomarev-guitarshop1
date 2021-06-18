import React from 'react';
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Catalog from './components/catalog/catalog';
import Cart from './components/cart/cart';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <main className="app__main">
          <Switch>
            <Redirect from="/" to="/catalog" exact />
            <Route path="/catalog" exact>
              <Catalog/>
            </Route>
            <Route path="/cart" exact>
              <Cart/>
            </Route>
          </Switch>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
