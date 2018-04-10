import React, { Component } from 'react';

class PasswordChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    pswCheck = () => {
        //uppercase
        let uppercase = RegExp(/([A-Z])/g)
        if (this.props.pswVal.match(uppercase)) {
            let upp = document.querySelectorAll('.upp');
            upp[0].classList.add('display-none');
        } else {
            let upp = document.querySelectorAll('.upp')
            if (upp.length !== 0)
                upp[0].classList.remove('display-none');
        }

        //lowercase
        let lowercase = RegExp(/([a-z])/g)
        if (this.props.pswVal.match(lowercase)) {
            let low = document.querySelectorAll('.low');
            low[0].classList.add('display-none');
        } else {
            let low = document.querySelectorAll('.low')
            if (low.length !== 0)
                low[0].classList.remove('display-none');
        }

        //special
        let special = RegExp(/[^A-Za-z0-9\s]/g)
        if (this.props.pswVal.match(special)) {
            let spc = document.querySelectorAll('.spc');
            spc[0].classList.add('display-none');
        } else {
            let spc = document.querySelectorAll('.spc')
            if (spc.length !== 0)
                spc[0].classList.remove('display-none');
        }

        //number
        let number = RegExp(/[0-9]/g)
        if (this.props.pswVal.match(number)) {
            let num = document.querySelectorAll('.num');
            num[0].classList.add('display-none');
        } else {
            let num = document.querySelectorAll('.num')
            if (num.length !== 0)
                num[0].classList.remove('display-none');
        }

        //length
        if (this.props.pswVal.length >= 5) {
            let lngt = document.querySelectorAll('.lngt');
            lngt[0].classList.add('display-none');
        } else {
            let lngt = document.querySelectorAll('.lngt')
            if (lngt.length !== 0)
                lngt[0].classList.remove('display-none');
        }
    }

    render() {

        return (
            <div className="panel panel-default">
                <div className="panel-body text-justify">
                    {this.pswCheck()}
                    <p>Password Strength :</p>
                    <span className="upp">Must contain at least 1 uppercase character<br/></span>
                    <span className="low">Must contain at least 1 lowercase character<br/></span>
                    <span className="num">Must contain number<br/></span>
                    <span className="spc">Must contain any of special character (#$@!%...)<br/></span>
                    <span className="lngt">At lease 5 character<br/></span>
                </div>
            </div>
        )
    }
}

export default PasswordChecker;