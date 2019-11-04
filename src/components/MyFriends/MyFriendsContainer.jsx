// import React from 'react';
import PropTypes from 'prop-types';
import MyFriends from './MyFriends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
    state: state.myFriends.friends
    }
};


const MyFriendsContainer = connect(mapStateToProps) (MyFriends);

MyFriendsContainer.propTypes = {
    messages: PropTypes.string,
    id: PropTypes.number,
    photo: PropTypes.string,
};

export default MyFriendsContainer;