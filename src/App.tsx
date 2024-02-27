import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Dialogs } from './components/dialogs/Dialogs';
import { Profile } from './components/profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { stateType } from './components/redux/state';

type AppPropsType = {
  state: stateType
  addPost: (message: string | undefined) => void
}

const App = ({ state, addPost }: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className='App-wrapper-content'>
          <Route path={'/profile'} component={() => <Profile addPost={addPost} posts={state.profilePage.posts} />} />
          <Route path={'/dialogs'} component={() => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />} />
          <Route path={'/news'} component={News} />
          <Route path={'/music'} component={Music} />
          <Route path={'/settings'} component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
