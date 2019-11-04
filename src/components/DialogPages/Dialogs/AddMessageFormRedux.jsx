import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field className={s.text} component='textarea' name='myMessage' placeholder='Write message...'/>
        <div>
            <button className={s.but}>
                Send
            </button>
            <button className={s.but}>
                Clear
            </button>
        </div>
    </form>
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessageFormRedux;