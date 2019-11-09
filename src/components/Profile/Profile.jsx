import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';
import PropTypes from 'prop-types';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({profile, status, isAuth, updateStatus}) => {

    return <main className={s.content}>
        <ProfileInfo profile={profile} status={status}
                     isAuth={isAuth} updateStatus={updateStatus}/>
        <Posts/>
    </main>
};

Profile.propTypes = {
    profile: PropTypes.object,
    status: PropTypes.string,
    updateStatusTC: PropTypes.func,
};

export default Profile;