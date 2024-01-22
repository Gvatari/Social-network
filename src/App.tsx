import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Dialogs } from './components/dialogs/Dialogs';
import { Profile } from './components/profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className='App-wrapper-content'>
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;
