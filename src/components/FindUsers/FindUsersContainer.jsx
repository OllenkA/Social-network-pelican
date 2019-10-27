import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { setCurrentPage, toggleFollowingProgress,
    getUsersTC, deleteFollowTC, postFollowTC } from '../../redux/users-reducer';
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";


class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount)
        //     });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    };
    //     this.props.setCurrentPage(pageNumber);
    //     this.props.toggleIsFetching(true);
    //     usersApi.getUsers(pageNumber, this.props.pageSize)
    //         .then(data => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setUsers(data.items);
    //         });
    // };

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <FindUsers totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       deleteFollowTC={this.props.deleteFollowTC}
                       postFollowTC={this.props.postFollowTC}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

FindUsersContainer.propTypes = {
    messages: PropTypes.string,
    id: PropTypes.number,
    photo: PropTypes.string,
};

export default connect(mapStateToProps, {getUsersTC, deleteFollowTC, postFollowTC, setCurrentPage,
        toggleFollowingProgress})(FindUsersContainer);