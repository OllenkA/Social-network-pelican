import React from 'react';
import s from './Posts.module.css';
import PropTypes from 'prop-types';
import PostContainer from './Post/PostContainer';

const Posts = (props) => {

    return <div className={s.posts}>
        <div className={s.main}>My posts</div>
        <PostContainer />
    </div>
}

Posts.propTypes = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    updatePostText: PropTypes.func,
};

export default Posts;