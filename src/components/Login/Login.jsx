import React from 'react';
import styles from './Login.module.css';
import Headline from "../common/Headline/Headline";
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {loginTC, logoutTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";



const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe);
        // console.log(formData)
    };

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <main className={styles.content}>
    <Headline title={'LOGIN'}/>
    <LoginReduxForm onSubmit={onSubmit} />
    </main>
};

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapDispatchToProps, {loginTC, logoutTC} )(Login);