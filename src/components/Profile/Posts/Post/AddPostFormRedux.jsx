import {Field, reduxForm} from "redux-form";
import React from 'react';
import s from "./Post.module.css";

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field className={s.enter} component='textarea' name='postMessage'
               placeholder='Start writting about your life... Please!' />
        <div>
            <button className={s.button}>
                Publish
            </button>
            <button className={s.button}>
                Clear
            </button>
        </div>
    </form>
};

export const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm);
