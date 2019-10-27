import React from 'react';
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = (props) => {
  let friends = props.friends.map((user, i) => {
  return (<h3 key = {i} className={s.friend}>
  <img className={s.ava} src={user.photo} alt='This is my friend'/>
  <NavLink className={s.user} to={`/myFriends/${user.id}`}>{user.name}</NavLink>
  </h3>)
  });
  
  return <nav className={s.nav}>
    <div className={s.menu}>
    <h2>
      <NavLink className={s.navlink} to='/profile' activeClassName={s.active}>Profile</NavLink>
    </h2>
    <h2>
      <NavLink className={s.navlink} to='/dialogPages' activeClassName={s.active}>Messages</NavLink>
    </h2 >
    <h2>
      <NavLink className={s.navlink} to='/news' activeClassName={s.active}>News</NavLink>
    </h2>
    <h2>
      <NavLink className={s.navlink} to='/music' activeClassName={s.active}>Music</NavLink>
    </h2>
    <h2>
      <NavLink className={s.navlink} to='/myPhotos' activeClassName={s.active}>My photos</NavLink>
    </h2>
    <h2>
      <NavLink className={s.navlink} to='/findUsers' activeClassName={s.active}>Find users</NavLink>
    </h2>
    <h2>
      <NavLink className={s.navlink} to='/settings' activeClassName={s.active}>Settings</NavLink>
    </h2>
    <h2>
      <NavLink className={s.navlink} to='/myFriends' activeClassName={s.active}>My friends</NavLink>
    </h2>
    </div>
      {friends}
  </nav>
}

Nav.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  photo: PropTypes.string,
};

export default Nav;