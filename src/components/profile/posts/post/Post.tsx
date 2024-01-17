import React, { FC } from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likes: number
}
export const Post: FC<PostPropsType> = ({message, likes}) => {
    return (
        <div className={s.post}>
            <img src="/images/ava-post.png" alt="#" />
            <span>{message}</span>
            <span>like:{likes}</span>
        </div>
    );
};