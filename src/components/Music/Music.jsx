import React from 'react';
import s from './Music.module.css';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Headline from "../common/Headline/Headline";
// import { NavLink } from 'react-router-dom';


const Music = (props) => {

    return <main className={s.page}>
        <Headline title={'MUSIC'}/>
        {/* <audio src="https://sefon.me/mp3" type="audio/mp3"
  src="myAudio.ogg" type="audio/ogg"
  controls>
  </audio>
    <a href="">Скачайте музыку</a> */}
    </main>

};

Music.propTypes = {
    messages: PropTypes.string,
    id: PropTypes.number,
};

export default Music;