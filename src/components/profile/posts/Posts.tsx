import React, { LegacyRef } from 'react';
import s from './Posts.module.css'
import { Post } from './post/Post';
import { addPost, postType } from '../../redux/state';

type PostsPropsType = {
    posts: postType[]
    addPost: (message: string | undefined) => void
}

const currentElementRef: LegacyRef<HTMLTextAreaElement> = React.createRef();

const addPostHandler = () => {
    const text = currentElementRef.current?.value
    addPost(text)
    console.debug(text)
}

export const Posts = ({posts}: PostsPropsType) => {
    return (
        <div className={s.posts}>
            <div className={s.addPosts}>
                <textarea ref={currentElementRef} name='fieldPost'></textarea>
                <button className={s.addPost} onClick={addPostHandler}>add post</button>
            </div>
            {posts.map(p => <Post message={p.message} key={p.id} likes={p.likes} />)}
        </div>
    );
};