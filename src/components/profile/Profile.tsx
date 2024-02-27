import React from 'react';
import s from './Profile.module.css'
import { Posts } from './posts/Posts';
import { postType } from '../redux/state';

type ProfilePropsType = {
    posts: postType[]
    addPost: (message: string | undefined) => void
}

export const Profile = ({posts, addPost}: ProfilePropsType) => {
    return (
        <div className={s.content}>
            Content
            <Posts addPost={addPost} posts={posts} />
        </div>
    );
};