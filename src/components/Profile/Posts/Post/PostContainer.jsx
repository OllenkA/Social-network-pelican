import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const PostContainer = () => {

//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().profilePage;

//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }

//             let changeTextPost = (text) => {
//                 let action = updatePostTextActionCreator(text);
//                 store.dispatch(action);
//             }

//             let deletePost = () => {
//                 let action = updatePostTextActionCreator('');
//                 store.dispatch(action);
//             }

//             return <Post
//                 changeTextPost={changeTextPost} addPost={addPost}
//                 postMessage={state.postMessage}
//                 state={state}
//                 deletePost={deletePost} />
//         }
//         }
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
    return {
        postMessage: state.profilePage.postMessage,
        posts: state.profilePage.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTextPost: (text) => {
            dispatch(updatePostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        deletePost: () => {
            dispatch(updatePostTextActionCreator(''));
        }
    }
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps) (Post);

PostContainer.propTypes = {
    state: PropTypes.object,
    postMessage: PropTypes.string,
    addPost: PropTypes.func,
    updatePostText: PropTypes.func,
};

export default PostContainer;