import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Search from './pages/Search';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Navigation />
    </BrowserRouter>
  );
}

export default Routes;
