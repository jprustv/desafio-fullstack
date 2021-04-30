import React from 'react';
import './App.css';
import Navigation from './components/Navigation';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Navigation />
    </div>
  );
}

export default App;
