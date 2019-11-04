import React from 'react';
import s from './Posts.module.css';
import PostContainer from './Post/PostContainer';

const Posts = () => {

    return <div className={s.posts}>
        <div className={s.main}>My posts</div>
        <PostContainer />
    </div>
};


export default Posts;