import React from 'react';
import s from './Profile.module.css'
import { Posts } from './posts/Posts';
import { stateType } from '../redux/state';

type ProfilePropsType = {
    state: stateType
    newPostMessageEvent: (message: string) => void
    addPost: () => void
}

export const Profile = ({addPost, state, newPostMessageEvent}: ProfilePropsType) => {
    return (
        <div className={s.content}>
            Content
            <Posts addPost={addPost} newPostMessageEvent={newPostMessageEvent} newPostMessage={state.profilePage.newPostMessage} posts={state.profilePage.posts} />
        </div>
    );
};