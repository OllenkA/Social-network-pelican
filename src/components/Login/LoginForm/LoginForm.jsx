import React from 'react';
import styles from '../../common/FormsControl/FormControls.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";


const LoginForm = ({handleSubmit, error}) => {

    return <form onSubmit={handleSubmit}>
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
        {error &&
        <div className={styles.formSummaryError}>
            {error}
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