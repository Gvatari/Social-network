import React from 'react';
import s from './Profile.module.css'
import { Posts } from './posts/Posts';

export const Profile = () => {
    return (
        <div className={s.content}>
            Content
            <Posts />
        </div>
    );
};