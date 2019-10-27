import React from 'react';
import s from './Post.module.css';
import PropTypes from 'prop-types';

const Post = (props) => {

    let addPost = () => {
        props.addPost(); 
    }

    let changeTextPost = (e) => {
        let text = e.target.value;
        props.changeTextPost(text);
    }

    let deletePost = () => {
        props.changeTextPost('');
    }

    let like = props.posts.map((el, i) => {
        
        return (
            <div key={i}>
                <div className={s.post}>
                    <img className={s.photo} src='https://yt3.ggpht.com/a/AGF-l7_k9w9W2vE7M5xuxPSEnDbzDB1nJHZNl3lqpA=s900-mo-c-c0xffffffff-rj-k-no' alt="myPhoto" />
                    {el.post}
                </div>
                <button className={s.but}>
                    LIKE
                </button>
                <span className={s.like}>
                    {el.likesCount}
                </span>
            </div>
        )
    });

    return <div>
        <textarea onChange={changeTextPost}
            className={s.enter}
            placeholder='Start writting about your life... Please!'
            value={props.postMessage}>
        </textarea>
        <button className={s.button} onClick={addPost}>Publish</button>
        <button className={s.button} onClick={deletePost}>Clear</button>
        <div>
          {like}
        </div>
    </div>
}

Post.propTypes = {
    state: PropTypes.object,
    postMessage: PropTypes.string,
    addPost: PropTypes.func,
    updatePostText: PropTypes.func,
};

export default Post;