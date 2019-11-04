// import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post'
import { addPostActionCreator } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        // postMessage: state.profilePage.postMessage,
        posts: state.profilePage.posts
    }
};

const PostContainer = connect(mapStateToProps, {addPostActionCreator}) (Post);

PostContainer.propTypes = {
    posts: PropTypes.array,
    addPostActionCreator: PropTypes.func,
};

export default PostContainer;