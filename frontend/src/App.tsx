import React from 'react';
import './App.css';
import { NavigationProvider } from './contexts/navigation';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <NavigationProvider>
        <Routes />
      </NavigationProvider>
    </div>
  );
}

export default App;
