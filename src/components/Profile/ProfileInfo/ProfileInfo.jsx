import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avaUser from '../../../asseces/images/ava.png'



const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <article className={s.container}>
        <figure>
            <img className={s.bigPhoto}
                 src='http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg'
                 alt='city'/>
        </figure>
        <section className={s.wrapper}>
            <img className={s.ava}
                 src={props.profile.photos.large != null
                     ? props.profile.photos.large: avaUser}
                // src='https://yt3.ggpht.com/a/AGF-l7_k9w9W2vE7M5xuxPSEnDbzDB1nJHZNl3lqpA=s900-mo-c-c0xffffffff-rj-k-no'
                 alt='myPhoto'/>
            <aside className={s.description}>
                <h1>Name: {props.profile.fullName}</h1>
                <h5> About me: {props.profile.aboutMe} </h5>
                <h5>COUNTRY: Belarus </h5>
                <h5>I am looking job: {props.profile.lookingForAJob
                    ? "Yes" : "No" }
                    {props.profile.lookingForAJob? <h5>Description my future job:
                        {props.profile.lookingForAJobDescription}</h5>: null}
                </h5>
                {/*{props.profile.contacts.map(el => {*/}
                {/*    return <>*/}
                {/*    <h5>Contacts:</h5>*/}
                {/*        <ul>*/}
                {/*            <li><a href={el}>{el}</a></li>*/}
                {/*        </ul>*/}
                {/*    </>*/}
                {/*})*/}
                {/*}*/}

            </aside>
        </section>
    </article>
};

export default ProfileInfo;