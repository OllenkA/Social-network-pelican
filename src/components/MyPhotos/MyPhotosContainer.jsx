// import React from 'react';
import PropTypes from 'prop-types';
import { addPhotoActionCreator, updatePhotoActionCreator } from '../../redux/photo-reducer';
import MyPhotos from './MyPhotos';
import { connect } from 'react-redux';

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