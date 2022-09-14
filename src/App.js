import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main id="main-section">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
