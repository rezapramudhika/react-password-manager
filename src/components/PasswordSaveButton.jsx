import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPassword } from '../store/password/password.actions';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';

class PasswordSaveButton extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    createPassword = () => {
        let url = document.querySelector('input#url').value;
        let username = document.querySelector('input#username').value;
        let password = document.querySelector('input#password').value;
        this.props.createPassword({
            url,
            username,
            password,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })
    }

    render() {
        if (this.props.password.loading) {
            return (
                <div>
                    <span> <Loader type="TailSpin" color="#000" height={30} width={30} className="pull-right" /> Saving... </span>
                </div>
            )
        }
        return (
            <a id="btn-login" className="btn btn-info pull-right width-100" onClick={this.createPassword}>Save</a>
        )
    }
}

const mapStateToProps = state => {
    return {
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    createPassword
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PasswordSaveButton);