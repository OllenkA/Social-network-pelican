import React from 'react';
import DialogsContainer from './Dialogs/DialogsContainer';
import s from './DialogPages.module.css';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import UsersContainer from './Users/UsersContainer';
import Headline from "../common/Headline/Headline";


const DialogPages = (props) => {

    return (
        <article className={s.page}>
            <Headline title={'DIALOGS'}/>
            <section className={s.dialogPage}>
                <nav className={s.user}>
                    <Route path='/dialogPages' render={() => <UsersContainer/>}/>
                </nav>
                <section className={s.verticalLine}/>
                <DialogsContainer/>
            </section>
        </article>
    )
};

DialogPages.propTypes = {
    state: PropTypes.object,
    users: PropTypes.string,
    messages: PropTypes.string,
    id: PropTypes.number,
    addMyMessage: PropTypes.func,
    updateMyMessage: PropTypes.func,
};

export default DialogPages;