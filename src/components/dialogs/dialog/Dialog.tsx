import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'

type DilogProps = {
    id: number
    title: string
}

export const Dialog = ({ id, title }: DilogProps) => {
    return <div className={s.dialog}><NavLink to={`/dialogs/${id}`}>{title}</NavLink></div>
}
