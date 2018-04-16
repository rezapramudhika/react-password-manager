import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPassword } from '../store/password/password.actions';
import { bindActionCreators } from 'redux';

export class PasswordSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    searchOnChange = (e) => {
        this.props.searchPassword(e.target.value)
    }

    render() {
        return (
            <div className="input-group" style={{width: 400, marginBottom: 20}}>
                <span className="input-group-addon" id="basic-addon1"><span className="glyphicon glyphicon-search"></span></span>
                <input type="text" className="form-control" name="searchbox" placeholder="Search url here..." onChange={this.searchOnChange} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchPassword
}, dispatch)

export default connect(null, mapDispatchToProps)(PasswordSearchForm);