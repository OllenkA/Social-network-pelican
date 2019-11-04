import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field className={s.text} component={ Textarea }
               name='myMessage' placeholder='Write message...'
               validate={[ required, maxLength10 ]}/>
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