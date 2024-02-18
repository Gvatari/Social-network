import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import { Dialog } from './dialog/Dialog';
import { Message } from './message/Message';
import { dialogType, messageType } from '../..';

type DialogsPropsType = {
    dialogs: dialogType[]
    messages: messageType[]
}

export const Dialogs = ({dialogs, messages}: DialogsPropsType) => {
    return (
        <div className={s.dilogs}>
            <div className='dialogsItems'>
                {dialogs.map(d => <Dialog id={d.id} key={d.id} title={d.title} />)}

            </div>
            <div className='messages'>
                {messages.map(m => <Message key={m.id} message={m.message} />)}
            </div>
        </div>
    );
};

