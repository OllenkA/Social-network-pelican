import React from 'react';
import styles from './FormControls.module.css';


const FormControl = ({input, meta, child,...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? styles.error : ''}>
            <div>
                {props.children}
            </div>
            {hasError?<span>{meta.error}</span>:null}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl  {...props}><input {...input} {...restProps} /></FormControl>
};

// export const createField = (placeholder, name, validators, component) => {
//
// }