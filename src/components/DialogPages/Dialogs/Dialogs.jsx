import React from 'react';
import s from './Dialogs.module.css';
import PropTypes from 'prop-types';
import AddMessageFormRedux from "./AddMessageFormRedux";

const Dialogs = ({messages, addNewMessage}) => {
    let allMessages = messages.map((message, i) => {
        return (
            <div key={i} className={s.ava}>SMILE
                <span className={s.mess}>
                    {message.message}
                </span>
            </div>
        )
    });

    return <main className={s.dialogs}>
        {allMessages}
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </main>
};

Dialogs.propTypes = {
    messages: PropTypes.array,
    message: PropTypes.string,
    id: PropTypes.number,
    addMyMessageActionCreator: PropTypes.func,
};

export default Dialogs;