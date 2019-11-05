import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserPageTC, getUserStatusTC, updateStatusTC} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import PropTypes from "prop-types";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserPageTC(userId);
        this.props.getUserStatusTC(userId);
    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatusTC}
                        isAuth={this.props.isAuth}
        />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserPageTC, getUserStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

ProfileContainer.propTypes = {
    profile: PropTypes.object,
    status: PropTypes.string,
    getUserPageTC: PropTypes.func,
    getUserStatusTC: PropTypes.func,
    updateStatusTC: PropTypes.func,
};
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserPageTC})(withUrlDataContainerComponent);