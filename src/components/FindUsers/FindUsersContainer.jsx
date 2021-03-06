import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    setCurrentPage, toggleFollowingProgress,
    getUsersTC, deleteFollowTC, postFollowTC
} from '../../redux/users-reducer';
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUser
} from "../../redux/users-selectors";


class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    };

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
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

FindUsersContainer.propTypes = {
    messages: PropTypes.string,
    id: PropTypes.number,
    photo: PropTypes.string,
};

export default compose(
    connect(mapStateToProps, {getUsersTC, deleteFollowTC, postFollowTC, setCurrentPage, toggleFollowingProgress}
    ))(FindUsersContainer)

// export default withAuthRedirect(connect(mapStateToProps, {getUsersTC, deleteFollowTC, postFollowTC, setCurrentPage,
//         toggleFollowingProgress})(FindUsersContainer))

