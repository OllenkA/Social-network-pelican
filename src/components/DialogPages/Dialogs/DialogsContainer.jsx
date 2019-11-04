import React from 'react';
import PropTypes from 'prop-types';
import Dialogs from './Dialogs'
import {addMyMessageActionCreator} from '../../../redux/dialog-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


const DialogsContainer = (props) => {
    let addNewMessage = (value) => {
        props.addMyMessageActionCreator(value.myMessage);
    };
    return <Dialogs {...props} addNewMessage={addNewMessage}/>
};

const mapStateToProps = (state) => ({messages: state.dialogPage.messages});


export default compose(
    connect(mapStateToProps, {addMyMessageActionCreator}),
    withAuthRedirect
)(DialogsContainer);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

DialogsContainer.propTypes = {
    messages: PropTypes.array,
    id: PropTypes.number,
    addMyMessageActionCreator: PropTypes.func,
};