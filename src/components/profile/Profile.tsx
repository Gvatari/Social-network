import React from 'react';
import s from './Profile.module.css'
import { Posts } from './posts/Posts';
import { postType } from '../..';

type ProfilePropsType = {
    posts: postType[]
}

export const Profile = ({posts}: ProfilePropsType) => {
    return (
        <div className={s.content}>
            Content
            <Posts posts={posts} />
        </div>
    );
};