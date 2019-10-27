import React from 'react';
import PropTypes from 'prop-types';
import s from './Headline.module.css';


const Headline = (props) => {

    return <h1 className={s.title}>{props.title}</h1>


};

export default Headline;