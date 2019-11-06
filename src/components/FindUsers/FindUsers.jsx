import React from 'react';
// import PropTypes from 'prop-types';
import s from './FindUsers.module.css';
import Headline from "../common/Headline/Headline";
import Clients from "./Clients/Clients";
import AllPages from "./AllPages/AllPages";


let FindUsers = (props) => {

    return <main className={s.main}>
        <Headline title={'ALL USERS'}/>
        <AllPages onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}
                  pageSize={props.pageSize} currentPage={props.currentPage}/>
        <Clients users={props.users} followingInProgress={props.followingInProgress}
                deleteFollowTC={props.deleteFollowTC}
                postFollowTC={props.postFollowTC}/>
    </main>
};

FindUsers.propTypes = {};

export default FindUsers;