import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Search from './pages/Search';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/detail" component={Detail} />
      </Switch>
      <Navigation />
    </BrowserRouter>
  );
}

export default Routes;
