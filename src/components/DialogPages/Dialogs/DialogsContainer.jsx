import React from 'react';
import PropTypes from 'prop-types';
import Dialogs from './Dialogs'
import { addMyMessageActionCreator, updateMyMessageActionCreator } from '../../../redux/dialog-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
      myMessage: state.dialogPage.myMessage,
      messages: state.dialogPage.messages,
      isAuth: state.auth.isAuth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      changeMyMessage: (text) => {
          dispatch(updateMyMessageActionCreator(text));
      },
      addMyMessage: () => {
          dispatch(addMyMessageActionCreator());
      },
      deleteMyMessage: () => {
          dispatch(updateMyMessageActionCreator(''));
      }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


// const DialogsContainer = (props) => {

//   return <StoreContext.Consumer>
//     {(store) => {
//       let state = store.getState().dialogPage;

//       let addMyMessage = () => {
//         store.dispatch(addMyMessageActionCreator());
//       }

//       let changeMyMessage = (text) => {
//         let action = updateMyMessageActionCreator(text);
//         store.dispatch(action);
//       }

//       let deleteMyMessage = () => {
//         let action = updateMyMessageActionCreator('');
//         store.dispatch(action);
//       }

//       return <Dialogs
//         addMyMessage={addMyMessage}
//         changeMyMessage={changeMyMessage} deleteMyMessage={deleteMyMessage}
//         messages={state} />
//     }
//     }
//   </StoreContext.Consumer>
// }

DialogsContainer.propTypes = {
  state: PropTypes.object,
  messages: PropTypes.string,
  id: PropTypes.number,
  addMyMessage: PropTypes.func,
  updateMyMessage: PropTypes.func,
};

export default DialogsContainer;