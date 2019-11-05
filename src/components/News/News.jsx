import React from 'react';
import s from './News.module.css';
// import PropTypes from 'prop-types';
import Headline from "../common/Headline/Headline";


const News = () => {

  return <div className={s.page}>
    <Headline title={'NEWS'}/>
  </div>
};

// News.propTypes = {
//   state: PropTypes.arrayOf,
//   messages: PropTypes.string,
//   id: PropTypes.number,
// };

export default News;