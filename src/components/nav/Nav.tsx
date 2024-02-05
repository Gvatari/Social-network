import React from 'react';
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={s.active} to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={s.active} to="/music">Music</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};