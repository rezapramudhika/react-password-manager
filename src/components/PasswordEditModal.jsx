import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editModalClose, editPassword } from '../store/password/password.actions';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';

export class PasswordEditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOldPassword: false,
            oldPasswordClassName: 'form-control'
        }
    }

    passwordOnChange = (e) => {
        if (e.target.value === this.props.password.password) {
            this.setState({
                isOldPassword: true,
                oldPasswordClassName: 'form-control'
            })
        } else {
            this.setState({
                isOldPassword: false,
                oldPasswordClassName: 'form-control error-border'
            })
        }
    }

    editPassword = () => {
        let newPassword = document.querySelector('#passwordEditNew').value;
        this.props.editPassword({
            key: this.props.password.key,
            url: this.props.password.url,
            username: this.props.password.username,
            password: newPassword,
            updatedAt: Date.now()
        })
        this.props.editModalClose();
        document.querySelector('#closeModalBtn').click();
    }

    render() {
        return (
            <div className="modal hide" id="edit-password-modal">
                <div className="modal-dialog text-justify">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button id="closeModalBtn" type="button" className="close" data-dismiss="modal" onClick={this.props.editModalClose}>&times;</button>
                            <h4>Edit Password</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>URL</label>
                                <input type="text" className="form-control" id="urlEdit" value={this.props.password.url} disabled />
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" id="usernameEdit" value={this.props.password.username} disabled />
                            </div>
                            <div className="form-group">
                                <label>Old Password</label>
                                {
                                    this.state.isOldPassword ?
                                        <input type="text" className={this.state.oldPasswordClassName} id="passwordEditOld" name="pswEdit" onChange={this.passwordOnChange} /> :
                                        <input type="text" className={this.state.oldPasswordClassName} id="passwordEditOld" name="pswEdit" onChange={this.passwordOnChange} />
                                }
                            </div>
                            <div className="form-group">
                                <label>New Password</label>
                                <input type="text" className="form-control" id="passwordEditNew" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            {
                                this.state.isOldPassword ?
                                    this.props.password.loading ?
                                        <div>
                                            <span> <Loader type="TailSpin" color="#000" height={30} width={30} className="pull-right" /> Saving... </span>
                                            <button type="button" className="btn btn-primary" disabled>Submit</button>
                                        </div>
                                        : <button id="submitEditPassword" type="button" className="btn btn-primary" onClick={this.editPassword}>Submit</button>
                                    : <button type="button" className="btn btn-primary" disabled>Submit</button>
                            }
                        </div>
                    </div>
                </div>
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
    editModalClose,
    editPassword
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PasswordEditModal);