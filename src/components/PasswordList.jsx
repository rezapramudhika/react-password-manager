import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPasswords } from '../store/password/password.actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PasswordListRow from './PasswordListRow';

class PasswordList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getPasswords();
    }

    render() {
        if (this.props.password.loading) {
            return (
                <div className="container">
                    <div id="loginbox" className="mainbox  loginbox">
                        <div className="panel panel-info" >
                            <div className="panel-heading">
                                <div className="panel-title">Password List</div>
                            </div>
                            <div className="panel-body">
                                <Loader type="TailSpin" color="#000" height={80} width={80} />
                            </div>
                        </div>
                    </div>
                    <Link to="/"><button type="button" className="btn btn-info pull-right">Add new password</button></Link>
                </div>
            )
        }
        return (
            <div className="container">
                <div id="loginbox" className="mainbox  loginbox">
                    <div className="panel panel-info" >
                        <div className="panel-heading">
                            <div className="panel-title">Password List</div>
                        </div>
                        <div className="panel-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>URL</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.password.data.map(row =>
                                            <PasswordListRow row={row} key={row.key} />
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Link to="/"><button type="button" className="btn btn-info pull-right">Add new password</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPasswords
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PasswordList);
