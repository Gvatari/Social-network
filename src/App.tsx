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
import { storeType } from './components/redux/state';

type AppPropsType = {
  store: storeType
}

const App = ({ store }: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className='App-wrapper-content'>
          <Route path={'/profile'} component={() => <Profile addPost={store.addPost.bind(store)}
          state={store.getState()} newPostMessageEvent={store.newPostMessageEvent.bind(store)} />} />
          <Route path={'/dialogs'} component={() => <Dialogs state={store.getState()} newDilogsMessageEvent={store.newDilogsMessageEvent.bind(store)} addMessage={store.addMessage.bind(store)} />} />
          <Route path={'/news'} component={News} />
          <Route path={'/music'} component={Music} />
          <Route path={'/settings'} component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
