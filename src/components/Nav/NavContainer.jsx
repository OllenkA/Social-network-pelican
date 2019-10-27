import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    friends: state.myFriends.friends
  }
}

const NavContainer = connect(mapStateToProps) (Nav);

NavContainer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  photo: PropTypes.string,
};

export default NavContainer;