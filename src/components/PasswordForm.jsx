import React, { Component } from 'react';

class PasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="container">
                <div id="loginbox" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 loginbox">
                    <div class="panel panel-info" >
                        <div class="panel-heading">
                            <div class="panel-title">Password Form</div>
                        </div>
                        <div class="panel-body pad-t-30" >
                            <div class="alert alert-danger text-justify display-none" role="alert">
                                <span class="glyphicon glyphicon-exclamation-sign mar-r-5" aria-hidden="true"></span>
                                <span class="sr-only">Error:</span>
                                Enter a valid email address
                            </div>
                            <form id="loginform" class="form-horizontal">
                                <div class="input-group mar-b-25">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
                                    <input id="url" type="text" class="form-control" name="url" placeholder="URL" />
                                </div>
                                <div class="input-group mar-b-25">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="username" type="text" class="form-control" name="username" placeholder="Username" />
                                </div>
                                <div class="input-group mar-b-25">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <input id="password" type="password" class="form-control" name="password" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 controls">
                                        <a id="btn-login" href="/" class="btn btn-info pull-right width-100">Save</a>
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