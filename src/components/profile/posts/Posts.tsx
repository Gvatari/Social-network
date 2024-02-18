import React from 'react';
import s from './Posts.module.css'
import { Post } from './post/Post';
import { postType } from '../../..';

type PostsPropsType = {
    posts: postType[]
}

export const Posts = ({posts}: PostsPropsType) => {
    return (
        <div className={s.posts}>
            <div className={s.addPosts}>
                <textarea name='fieldPost'></textarea>
                <button className={s.addPost}>add post</button>
            </div>
            {posts.map(p => <Post message={p.message} key={p.id} likes={p.likes} />)}
        </div>
    );
};