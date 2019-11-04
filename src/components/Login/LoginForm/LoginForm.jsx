import React from 'react';
import styles from '../../common/FormsControl/FormControls.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";


const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'email'} placeholder={'Email'}
                   component={Input}
                   validate={required}/>
        </div>
        <div>
            <Field name={'password'} placeholder={'Password'} type={'password'}
                   component={Input}
                   validate={required}/>
        </div>
        <div>
            <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
        </div>
        {props.error &&
        <div className={styles.formSummaryError}>
            {props.error}
        </div>
        }

        <div>
            <button>
                Login
            </button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;