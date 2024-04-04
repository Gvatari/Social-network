import React from 'react';
import s from './Posts.module.css'
import { Post } from './post/Post';
import { addPost, postType } from '../../redux/state';

type PostsPropsType = {
    posts: postType[]
    addPost: (message: string) => void
}

const currentElementRef = React.createRef<HTMLTextAreaElement>();

const addPostHandler = () => {
    if (currentElementRef.current?.value) {
        addPost(currentElementRef.current?.value)
    }
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