import React from 'react';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';



const Users = (props) => {
  let users = props.friends.map( (el, i)=> {
    return ( 
      <div key={i} className={s.users}>
      <NavLink className={s.user} to={`/dialogPages/${el.id}`}>{el.name}</NavLink>
      </div>
      )  
  });

  return <div className={s.main}>
    {/* <span className={s.area}><img  src='https://klike.net/uploads/posts/2018-11/1543310689_15.jpg' /></span> */}
    {users}
    </div>
};

Users.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  photo: PropTypes.string,
};

export default Users;