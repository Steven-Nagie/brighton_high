import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Components
import CardProfile from './Shared/CardProfile';
import Title from './Shared/Title';
import LoginRequest from '../login/LoginRequest';
// Data
import { getDisplayingUsers } from '../../dataService.js';
// Images
import prof_pic from '../../assets/profile_pic.png'
// CSS
import './Profiles.css';

class Profiles extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        if(this.props.loggedIn) {
            getDisplayingUsers().then( users => {
                this.setState({users})
            })
        }
    }
    componentWillUpdate() {
        if(this.props.loggedIn && this.state.users.length === 0) {
            getDisplayingUsers().then( users => {
                this.setState({users})
            })
        }
    }

    render() {
        let profileList = this.state.users.map( user => {
            return (
                <Link to={`/user/${user.id}`} key={user.id}>
                    <CardProfile 
                        name={`${user.first_name} ${user.last_name}`}
                        attending={ (user.attending == null) ? "N/A" : "Yes" }
                        photo = { user.photo ? user.photo : null }
                    />
                </Link>
            )
        })

        return !this.props.loggedIn ? <LoginRequest></LoginRequest> :
            this.state.users.length === 0 ? <img src="https://media.giphy.com/media/11fxhMPSRtnbTa/giphy.gif" alt=""/> :
            (
            <div className="component-wrapper">
                <Title title="Classmate Profiles"/>

                <div className="profiles-table">
                    <div className="table-header">
                        <div>Name</div>
                        <div>Attending?</div>
                    </div>
     
                    {profileList}
                </div>
            </div>
        );
    }
}

export default Profiles;