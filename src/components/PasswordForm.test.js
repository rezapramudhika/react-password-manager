import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import PasswordForm from './PasswordForm'

Enzyme.configure({ adapter: new Adapter() });

describe('<PasswordForm />', () => {
    it('should change state when type in input tag', () => {
        const wrapper = shallow(<PasswordForm/>)
        const input = wrapper.find('input#password').first().simulate('change', { target: { name: 'searchbox', value: 'a' } })
        expect(wrapper.state().passwordValue).toEqual('a')
    })
});