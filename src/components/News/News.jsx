import React from 'react';
import s from './News.module.css';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Headline from "../common/Headline/Headline";
// import { NavLink } from 'react-router-dom';


const News = (props) => {

  return <div className={s.page}>
    <Headline title={'NEWS'}/>
  </div>
};

News.propTypes = {
  state: PropTypes.arrayOf,
  messages: PropTypes.string,
  id: PropTypes.number,
};

export default News;