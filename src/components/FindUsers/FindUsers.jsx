import React from 'react';
// import PropTypes from 'prop-types';
import s from './FindUsers.module.css';
import Headline from "../common/Headline/Headline";
import avaUser from '../../asseces/images/ava.png';
import {NavLink} from "react-router-dom";


let FindUsers = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <main className={s.main}>
        <Headline title={'ALL USERS'}/>

        <div className={s.pages}>

            {pages.map((p) => {
                return <span className={props.currentPage === p ? s.selectedPage : null}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>
                        {p}
                    </span>
            })}
        </div>

        {props.users.map(u => {
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
        })
        }
    </main>
};

FindUsers.propTypes = {};

export default FindUsers;