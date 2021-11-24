import React from 'react';
import Products from './pages/Products';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';

const App = () => {
  return (
    
      <BrowserRouter>
        <Header/> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/ItemDetailContainer/:id" component={ItemDetailContainer} />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
