import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';
import PropTypes from 'prop-types';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <main className={s.content}>
        <ProfileInfo profile={props.profile}/>
        <Posts/>
    </main>
};

Profile.propTypes = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    updatePostText: PropTypes.func,
};

export default Profile;