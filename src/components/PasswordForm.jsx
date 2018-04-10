import React, { Component } from 'react';
import PasswordSaveButton from './PasswordSaveButton';
import PasswordChecker from './PasswordChecker';

class PasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordValue: ''
        }
    }

    checker = (e) => {
        this.setState({
            passwordValue: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 loginbox">
                    <div className="panel panel-info" >
                        <div className="panel-heading">
                            <div className="panel-title">Password Form</div>
                        </div>
                        <div className="pad-t-30" >
                            <form id="loginform" className="form-horizontal">
                                <div className="input-group mar-b-25">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-link"></i></span>
                                    <input id="url" type="text" className="form-control" name="url" placeholder="URL" />
                                </div>
                                <div className="input-group mar-b-25">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="username" type="text" className="form-control" name="username" placeholder="Username" />
                                </div>
                                <div className="input-group mar-b-25">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input id="password" type="password" className="form-control" name="password" placeholder="Password" onChange={this.checker} />
                                </div>
                                <PasswordChecker pswVal={this.state.passwordValue} />
                                <div className="form-group">
                                    <div className="col-sm-12 controls">
                                        <PasswordSaveButton />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PasswordForm;