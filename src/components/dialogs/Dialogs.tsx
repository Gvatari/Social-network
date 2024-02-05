import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

type DilogProps = {
    id: number
    title: string
}
const Dialog = ({ id, title }: DilogProps) => {
    return <div className={s.dialog}><NavLink to={`/dialogs/${id}`}>{title}</NavLink></div>
}

type MessageProps = {
    message: string
}
const Message = ({ message }: MessageProps) => {
    return <div className={s.message}>{message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dilogs}>
            <div className='dialogsItems'>
                <Dialog id={1} title='Sveta' />
                <Dialog id={2} title='Igor' />
                <Dialog id={3} title='Alexey' />
                <Dialog id={4} title='Sasha' />
                <Dialog id={5} title='Pasha' />
            </div>
            <div className='messages'>
                <Message message={'Hello'} />
                <Message message={'I am gote it'} />
                <Message message={'What ara you doing ?'} />
            </div>
        </div>
    );
};

