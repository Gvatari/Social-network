import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import { Dialog } from './dialog/Dialog';
import { Message } from './message/Message';

type dialogType = {
    id: number
    title: string
}
const dialog: dialogType[] = [
    { id: 1, title: 'Sveta' },
    { id: 2, title: 'Igor' },
    { id: 3, title: 'Alexey' },
    { id: 4, title: 'Sasha' },
    { id: 5, title: 'Pasha' },
]

type messageType = {
    id: number
    message: string
}
const message: messageType[] = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'I am gote it' },
    { id: 3, message: 'What ara you doing ?' },
]

export const Dialogs = () => {
    return (
        <div className={s.dilogs}>
            <div className='dialogsItems'>
                {dialog.map(d => <Dialog id={d.id} key={d.id} title={d.title} />)}

            </div>
            <div className='messages'>
                {message.map(m => <Message key={m.id} message={m.message} />)}
            </div>
        </div>
    );
};

