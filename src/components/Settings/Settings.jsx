import React from 'react';
import s from './Settings.module.css';
import PropTypes from 'prop-types';
import Headline from "../common/Headline/Headline";


const Settings = (props) => {

    return <div className={s.page}>
        <Headline title={'SETTINGS'}/>
    </div>

};

Settings.propTypes = {
    state: PropTypes.object,
    messages: PropTypes.string,
    id: PropTypes.number,
};

export default Settings;