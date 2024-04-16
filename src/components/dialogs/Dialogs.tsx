import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import { Dialog } from './dialog/Dialog';
import { Message } from './message/Message';
import { dialogType, messageType } from '../redux/state';

type DialogsPropsType = {
    dialogs: dialogType[]
    messages: messageType[]
    newDilogsMessage: string
    newDilogsMessageEvent: (message: string) => void
    addMessage: () => void
}

export const Dialogs = ({dialogs, messages, newDilogsMessage, newDilogsMessageEvent, addMessage}: DialogsPropsType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        newDilogsMessageEvent(e.target.value)
    }

    return (
        <div className={s.dilogs}>
            <div className='dialogsItems'>
                {dialogs.map(d => <Dialog id={d.id} key={d.id} title={d.title} />)}

            </div>
            <div className='messages'>
                <textarea value={newDilogsMessage} onChange={onChangeHandler}></textarea>
                <button onClick={addMessage}>Отправить</button>
                {messages.map(m => <Message key={m.id} message={m.message} />)}
            </div>
        </div>
    );
};

