import React from 'react';
import s from './Dialogs.module.css';
import PropTypes from 'prop-types';


const Dialogs = (props) => {
  
  let addMyMessage = () => {
    props.addMyMessage();
  };

  let changeMyMessage = (e) => {
    let text = e.target.value;
    props.changeMyMessage(text);
  };
  
  let deleteMyMessage = () => {
    props.deleteMyMessage('');
  };

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
    <div>
      <textarea className={s.text}
        onChange={changeMyMessage}
        placeholder='Write message...'
        value={props.myMessage}/>
      <div>
        <button className={s.but} onClick={addMyMessage}>Send</button>
        <button className={s.but} onClick={deleteMyMessage}>Clear</button>
      </div>
    </div>
  </main>
};

Dialogs.propTypes = {
  state: PropTypes.object,
  // messages: PropTypes.string,
  id: PropTypes.number,
  addMyMessage: PropTypes.func,
  updateMyMessage: PropTypes.func,
};

export default Dialogs;