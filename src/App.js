import React from 'react';
import Products from './pages/Products';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';

const App = () => {
  return (
    
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/ItemDetailContainer/:id" component={ItemDetailContainer} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
