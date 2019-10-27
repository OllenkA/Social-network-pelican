import React from 'react';
import s from './MyFriends.module.css';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Headline from "../common/Headline/Headline";


const MyFriends = (props) => {

    let friends = props.state.map((friend, i) => {
        return (<h3 key={friend.id} className={s.friend}>
            <img className={s.ava} src={friend.photo} alt='This is my friend'/>
            <NavLink className={s.user} to={`/myFriends/${friend.id}`}>{friend.name}</NavLink>
        </h3>)
    });

    return (
        <main className={s.friends}>
            <Headline title={'MY FRIENDS'}/>
            {friends}
        </main>
    )
};

MyFriends.propTypes = {
    messages: PropTypes.string,
    id: PropTypes.number,
    photo: PropTypes.string,
};

export default MyFriends;