import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component {

    constructor() {
        super();
        this.state={
           "isLoggedIn": true
        }
    }

    render() {
        return (
            <div>
                <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
            </div>
        );
    }
}

// Login.propTypes = {};

export default Login;
