import React from 'react';
import s from './Profile.module.css'
import { Posts } from './posts/Posts';
import { postType } from '../redux/state';

type ProfilePropsType = {
    newPostMessage: string
    newPostMessageEvent: (message: string) => void
    posts: postType[]
    addPost: () => void
}

export const Profile = ({posts, addPost, newPostMessage, newPostMessageEvent}: ProfilePropsType) => {
    return (
        <div className={s.content}>
            Content
            <Posts addPost={addPost} newPostMessageEvent={newPostMessageEvent} newPostMessage={newPostMessage}  posts={posts} />
        </div>
    );
};