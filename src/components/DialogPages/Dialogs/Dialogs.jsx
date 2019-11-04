import React from 'react';
import s from './Dialogs.module.css';
import PropTypes from 'prop-types';
import AddMessageFormRedux from "./AddMessageFormRedux";


const Dialogs = (props) => {

    // let addNewMessage = (value) => {
    //     props.addMyMessageActionCreator(value.myMessage);
    // };

    let messages = props.messages.map((message, i) => {
        return (
            <div key={i} className={s.ava}>SMILE
                <span className={s.mess}>
          {message.message}
        </span>
            </div>
        )
    });


    return <main className={s.dialogs}>
        {messages}
        <AddMessageFormRedux onSubmit={props.addNewMessage}/>
    </main>
};

Dialogs.propTypes = {
    messages: PropTypes.array,
    message: PropTypes.string,
    id: PropTypes.number,
    addMyMessageActionCreator: PropTypes.func,
};

export default Dialogs;