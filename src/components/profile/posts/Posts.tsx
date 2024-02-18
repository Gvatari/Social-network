import React from 'react';
import s from './Posts.module.css'
import { Post } from './post/Post';

type postType = {
    id: number
    message: string
    likes: number
}

const post: postType[] = [
    { id: 1, message: 'Hi, we are you ?', likes: 3 },
    { id: 2, message: 'I am happiness', likes: 1 },
]

export const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.addPosts}>
                <textarea name='fieldPost'></textarea>
                <button className={s.addPost}>add post</button>
            </div>
            {post.map(p => <Post message={p.message} key={p.id} likes={p.likes} />)}
        </div>
    );
};