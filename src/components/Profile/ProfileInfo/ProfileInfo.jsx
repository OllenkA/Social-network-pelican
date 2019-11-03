import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avaUser from '../../../asseces/images/ava.png'
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <article className={s.container}>
        {/*<figure>*/}
        {/*    <img className={s.bigPhoto}*/}
        {/*         src='http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg'*/}
        {/*         alt='city'/>*/}
        {/*</figure>*/}
        <section className={s.wrapper}>
            <img className={s.ava}
                 src={props.profile.photos.large != null
                     ? props.profile.photos.large: avaUser}
                // src='https://yt3.ggpht.com/a/AGF-l7_k9w9W2vE7M5xuxPSEnDbzDB1nJHZNl3lqpA=s900-mo-c-c0xffffffff-rj-k-no'
                 alt='myPhoto'/>

            <aside className={s.description}>
                <h1>NAME : {props.profile.fullName}</h1>
                <h5> <b>ABOUT ME :</b> {props.profile.aboutMe} </h5>
                <h5><b>COUNTRY :</b> Belarus </h5>
                <h5><b>I AM LOOKING A JOB:</b> {props.profile.lookingForAJob
                    ? "Yes" : "No" }
                    {props.profile.lookingForAJob?
                        <p>
                            <b>DESCRIPTION MY FUTURE JOB :</b>
                            {props.profile.lookingForAJobDescription}
                        </p>
                        : null}
                </h5>
            </aside>
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}/>

        </section>
    </article>
};

export default ProfileInfo;