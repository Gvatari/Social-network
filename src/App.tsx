import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Profile } from './components/profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
