import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';
import PropTypes from 'prop-types';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return <main className={s.content}>
        <ProfileInfo profile={props.profile}
                     status={props.status} updateStatus={props.updateStatus}/>
        <Posts/>
    </main>
};

Profile.propTypes = {
    profile: PropTypes.array,
    status: PropTypes.string,
    updateStatusTC: PropTypes.func,
};

export default Profile;