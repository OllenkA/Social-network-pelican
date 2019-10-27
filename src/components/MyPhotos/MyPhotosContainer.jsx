import React from 'react';
import PropTypes from 'prop-types';
import { addPhotoActionCreator, updatePhotoActionCreator } from '../../redux/photo-reducer';
import MyPhotos from './MyPhotos';
import { connect } from 'react-redux';

// const MyPhotosContainer = (props) => {

//   return <StoreContext.Consumer>
//     {(store) => {
//       let state = store.getState().myPhotos;

//       let addPhoto = () => {
//         store.dispatch(addPhotoActionCreator());
//       }

//       let changePhoto = (photo) => {
//         let action = updatePhotoActionCreator(photo);
//         store.dispatch(action);
//       }

//       let deleteUrlPhoto = () => {
//         let action = updatePhotoActionCreator('');
//         store.dispatch(action);
//       }

//       return <MyPhotos addPhoto={addPhoto} changePhoto={changePhoto}
//         deleteUrlPhoto={deleteUrlPhoto} state={state} />
//     }
//     }
//   </StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
  return {
    myPhotos: state.myPhotos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  addPhoto: () => {
    dispatch(addPhotoActionCreator())
  },
  changePhoto: (photo) => {
    let action = updatePhotoActionCreator(photo);
    dispatch(action);
  },
  deleteUrlPhoto: () => {
    let action = updatePhotoActionCreator('');
    dispatch(action);
  }
  }
};

const MyPhotosContainer = connect(mapStateToProps, mapDispatchToProps) (MyPhotos);

MyPhotosContainer.propTypes = {
  state: PropTypes.object,
  messages: PropTypes.string,
  id: PropTypes.number,
};

export default MyPhotosContainer;