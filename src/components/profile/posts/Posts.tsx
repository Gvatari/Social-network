import React from 'react';
import s from './Posts.module.css'
import { Post } from './post/Post';

export const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.addPosts}>
                <textarea name='fieldPost'></textarea>
                <button className={s.addPost}>add post</button>
            </div>
           <Post message={'Hi, we are you ?'} likes={3} />
           <Post message={'I am happiness'} likes={1}/>
        </div>
    );
};