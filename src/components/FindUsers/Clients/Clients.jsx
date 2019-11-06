import React from 'react';
// import PropTypes from 'prop-types';
import s from './Clients.module.css';
import avaUser from '../../../asseces/images/ava.png';
import {NavLink} from "react-router-dom";


let Clients = (props) => {

    let clients = props.users.map(u => {
        return <article key={u.id} className={s.str}>
            <section className={s.but}>
                <header>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.ava} alt='This is me'
                             src={u.photos.small != null ? u.photos.small : avaUser}/>
                    </NavLink>
                </header>
                <footer>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  className={s.click} onClick={() => {
                            props.deleteFollowTC(u.id)
                        }}>
                            Unfollow
                        </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  className={s.click} onClick={() => {
                            props.postFollowTC(u.id)
                        }}>
                            Follow
                        </button>
                    }
                </footer>
            </section>
            <section className={s.border}>
                <article className={s.description}>
                    <h2>{u.name}</h2>
                    <h3>{u.status}</h3>
                </article>
                <article className={s.city}>
                    <h3>COUNTRY: {u.country}</h3>
                </article>
            </section>
        </article>
    });

    return <>
        {clients}
    </>
};

export default Clients;