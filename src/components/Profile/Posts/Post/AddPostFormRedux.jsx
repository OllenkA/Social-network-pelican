import {Field, reduxForm} from "redux-form";
import React from 'react';
import s from "./Post.module.css";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";


const maxLength10  = maxLengthCreator(10);


const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field className={s.enter} component={ Textarea } name='postMessage'
               placeholder='Start writting about your life... Please!'
        validate={[ required, maxLength10 ]}/>
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