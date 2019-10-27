import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserPageTC} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserPageTC(this.props.match.params.userId)
        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = 2
        // }
        // usersApi.getUserPage(userId).then(data => {
        //         this.props.setUserProfile(data);
        //     });
    }

    render() {

        if(!this.props.isAuth) return <Redirect to={'/login'}/>;

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserPageTC})(withUrlDataContainerComponent);