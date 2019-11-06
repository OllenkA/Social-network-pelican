import React, {Component} from 'react';
import './App.css';
import DialogPages from './components/DialogPages/DialogPages';
import {Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MyPhotosContainer from './components/MyPhotos/MyPhotosContainer';
import NavContainer from './components/Nav/NavContainer';
import MyFriendsContainer from './components/MyFriends/MyFriendsContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <main className='app-wrapper'>
                <HeaderContainer/>
                <NavContainer/>
                <nav className='wrap'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/dialogPages' render={() => <DialogPages/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/myPhotos' render={() => <MyPhotosContainer/>}/>
                    <Route path='/findUsers' render={() => <FindUsersContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route exact path='/myFriends' render={() => <MyFriendsContainer/>}/>
                </nav>
            </main>
        )
    }
}

App.propTypes = {
    getAuthTC: PropTypes.func,
    initialized: PropTypes.bool,
};

const mapDispatchToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapDispatchToProps, {initializeApp})
)(App);