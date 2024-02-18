import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type postType = {
  id: number
  message: string
  likes: number
}

export type dialogType = {
  id: number
  title: string
}

export type messageType = {
  id: number
  message: string
}

const posts: postType[] = [
  { id: 1, message: 'Hi, we are you ?', likes: 3 },
  { id: 2, message: 'I am happiness', likes: 1 },
]

const dialogs: dialogType[] = [
  { id: 1, title: 'Sveta' },
  { id: 2, title: 'Igor' },
  { id: 3, title: 'Alexey' },
  { id: 4, title: 'Sasha' },
  { id: 5, title: 'Pasha' },
]

const messages: messageType[] = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'I am gote it' },
  { id: 3, message: 'What ara you doing ?' },
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);