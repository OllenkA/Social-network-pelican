import React from 'react';
import styles from './Login.module.css';
import Headline from "../common/Headline/Headline";
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";



const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    };

    return <main className={styles.content}>
    <Headline title={'LOGIN'}/>
    <LoginReduxForm onSubmit={onSubmit} />
    </main>
};

const mapDispatchToProps = () => ({});

export default connect(mapDispatchToProps, {} )(Login);