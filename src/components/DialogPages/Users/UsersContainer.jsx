// import React from 'react';
import PropTypes from 'prop-types';
import Users from './Users';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    friends: state.dialogPage.users
  }
};

const UsersContainer = connect(mapStateToProps) (Users);

UsersContainer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  photo: PropTypes.string,
};

export default UsersContainer;