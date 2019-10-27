import React from 'react';
import styles from './Login.module.css';
import Headline from "../common/Headline/Headline";



const Login = (props) => {
    return <main className={styles.content}>
    {/*<h1>LOGIN</h1>*/}
    <Headline title={'LOGIN'}/>
    </main>
};



export default Login;