import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string | undefined
    likes: number
}
export const Post = ({message, likes}: PostPropsType) => {
    return (
        <div className={s.post}>
            <img src="/images/ava-post.png" alt="#" />
            <span>{message}</span>
            <span>like:{likes}</span>
        </div>
    );
};