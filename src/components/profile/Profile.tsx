import React from 'react';
import s from './Profile.module.css'
import { Posts } from './posts/Posts';
import { postType } from '../redux/state';

type ProfilePropsType = {
    posts: postType[]
    addPost: (message: string) => void
}

export const Profile = ({posts, addPost}: ProfilePropsType) => {
    return (
        <div className={s.content}>
            Content
            <Posts addPost={addPost} posts={posts} />
        </div>
    );
};