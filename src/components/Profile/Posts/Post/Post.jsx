import React from 'react';
import s from './Post.module.css';
import PropTypes from 'prop-types';
import {AddPostFormRedux} from "./AddPostFormRedux";


const Post = (props) => {

    let addNewPost = (value) => {
        props.addPostActionCreator(value.postMessage);
    };

    let like = props.posts.map((el, i) => {
        return (
            <article key={i}>
                <figure className={s.post}>
                    <img className={s.photo} src='https://yt3.ggpht.com/a/AGF-l7_k9w9W2vE7M5xuxPSEnDbzDB1nJHZNl3lqpA=s900-mo-c-c0xffffffff-rj-k-no' alt="myPhoto" />
                    {el.post}
                </figure>
                <button className={s.but}>
                    LIKE
                </button>
                <span className={s.like}>
                    {el.likesCount}
                </span>
            </article>
        )
    });

    return <article>
        <AddPostFormRedux onSubmit={addNewPost}/>
        <section>
          {like}
        </section>
    </article>
};

// const AddPostForm = (props) => {
//     return <form onSubmit={props.handleSubmit}>
//         <Field className={s.enter} component='textarea' name='postMessage'
//                placeholder='Start writting about your life... Please!' />
//         <div>
//             <button className={s.button}>
//                 Publish
//             </button>
//             <button className={s.button}>
//                 Clear
//             </button>
//         </div>
//     </form>
// };
//
// const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

Post.propTypes = {
    posts: PropTypes.array,
    addPostActionCreator: PropTypes.func,
};

export default Post;