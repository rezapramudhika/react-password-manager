import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { PasswordEditModal } from './PasswordEditModal'

Enzyme.configure({ adapter: new Adapter() });

describe('<PasswordEditModal />', () => {
    it('should has props password', () => {
        const wrapper = shallow(<PasswordEditModal password={{ password: '' }} />)
        // const input = wrapper.find('input#password').first().simulate('change', { target: { name: 'searchbox', value: 'a' } })
        // expect(wrapper.state().passwordValue).toEqual('a')
    })

    it('should has input new password', () => {
        const wrapper = shallow(<PasswordEditModal password={{ password: '123', loading: false }} editPassword={() => { }} editModalClose={() => { }} />)
        document.body.innerHTML =
            '<input type="text" className="form-control" id="passwordEditNew" value="123" />';
        const input = wrapper.find('input').first().simulate('change', { target: { name: 'pswEdit', value: '123' } })
        expect(wrapper.containsMatchingElement(
            <input id="passwordEditNew" />
        ))
        expect(wrapper.containsMatchingElement(
            <button id="submitEditPassword" type="button" className="btn btn-primary">Submit</button>
        ))
    })
});