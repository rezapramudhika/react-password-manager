import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPasswords } from '../store/password/password.actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PasswordListRow from './PasswordListRow';
import PasswordSearchForm from './PasswordSearchForm';

export class PasswordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: []
        }
    }

    componentDidMount() {
        this.props.getPasswords();
    }

    search = () => {
        this.state.searchResult = []
        let arr = this.props.password.data;
        let keyword = this.props.password.searchPassword;
        arr.forEach(element => {
            var regex = new RegExp( keyword, 'gi' );
            if(element.url.match(regex)){
                this.state.searchResult.push(element);
            }
        });
        
    }

    render() {
        return (
            <div className="container">
                {this.search()}
                <div id="loginbox" className="mainbox  loginbox">
                    <PasswordSearchForm />
                    <div className="panel panel-info" >
                        <div className="panel-heading">
                            <div className="panel-title">Password List</div>
                        </div>
                        {
                            this.props.password.loading ?
                                <div className="panel-body">
                                    <Loader type="TailSpin" color="#000" height={80} width={80} />
                                </div> :
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
                                                this.props.password.searchPassword === '' ?
                                                    this.props.password.data.map(row =>
                                                        <PasswordListRow row={row} key={'psw'+row.key} />
                                                    ) :
                                                    this.state.searchResult.map(row =>
                                                        <PasswordListRow row={row} key={'psw'+row.key} />
                                                    )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        }
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
