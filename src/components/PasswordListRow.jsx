import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { editModalOpen, deletePassword } from '../store/password/password.actions';
import { bindActionCreators } from 'redux';

export class PasswordListRow extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    openModal = () => {
        this.props.editModalOpen({
            key: this.props.row.key,
            url: this.props.row.url,
            username: this.props.row.username,
            password: this.props.row.password
        })
    }

    deletePassword = () => {
        this.props.deletePassword({
            key: this.props.row.key
        });
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.row.url}</td>
                <td>{this.props.row.username}</td>
                <td>{this.props.row.password}</td>
                <td>{moment(this.props.row.createdAt).format("dddd, MMMM Do YYYY")}</td>
                <td>{moment(this.props.row.updatedAt).format("dddd, MMMM Do YYYY")}</td>
                <td>
                    <div className="btn-group">
                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="glyphicon glyphicon-option-vertical"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a id="openmodal" onClick={this.openModal} data-toggle="modal" data-target="#edit-password-modal">Edit</a></li>
                            <li><a id="deletePass" onClick={this.deletePassword}>Delete</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    editModalOpen,
    deletePassword
}, dispatch)

export default connect(null, mapDispatchToProps)(PasswordListRow);