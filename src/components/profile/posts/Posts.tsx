import React, { ChangeEvent } from 'react';
import s from './Posts.module.css'
import { Post } from './post/Post';
import { postType } from '../../redux/state';

type PostsPropsType = {
    newPostMessage: string
    posts: postType[]
    addPost: () => void
    newPostMessageEvent: (message: string) => void
}

export const Posts = ({posts, newPostMessage, newPostMessageEvent, addPost}: PostsPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        newPostMessageEvent(e.currentTarget.value)
    }

    return (
        <div className={s.posts}>
            <div className={s.addPosts}>
                <textarea value={newPostMessage} onChange={onChangeHandler} name='fieldPost'></textarea>
                <button className={s.addPost} onClick={addPost}>add post</button>
            </div>
            {posts.map(p => <Post message={p.message} key={p.id} likes={p.likes} />)}
        </div>
    );
};