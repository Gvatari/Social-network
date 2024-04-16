import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, newDilogsMessageEvent, newPostMessageEvent, state, stateType, subscribe } from './components/redux/state';

let rerenderEntireTree = (state: stateType) => {
    console.log('state changed')
    ReactDOM.render(
        <App state={state} newPostMessage={state.profilePage.newPostMessage} newPostMessageEvent={newPostMessageEvent} newDilogsMessage={state.dialogsPage.newDilogsMessage} newDilogsMessageEvent={newDilogsMessageEvent} addPost={addPost} addMessage={addMessage} />, document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);