import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { PasswordSaveButton } from './PasswordSaveButton'
import Loader from 'react-loader-spinner';

Enzyme.configure({ adapter: new Adapter() });

describe('<PasswordSaveButton />', () => {
    it('should render loading', () => {
        const wrapper = shallow(<PasswordSaveButton password={{ loading: true }} createPassword={() => { }} />)
        expect(wrapper.containsMatchingElement(
            <span> <Loader type="TailSpin" color="#000" height={30} width={30} className="pull-right" /> Saving... </span>
        )).toBe(true)
    })

    it('should handle password save button', () => {
        const wrapper = shallow(<PasswordSaveButton password={{ loading: false }} createPassword={() => { }} />)
        document.body.innerHTML =
            '<div>' +
            '  <input id="url" value="test"/>' +
            '  <input id="username" value="username"/>' +
            '  <input id="password" value="1234"/>' +
            '</div>';
        expect(wrapper.containsMatchingElement(
            <input id="url" />
        ))
        expect(wrapper.containsMatchingElement(
            <input id="username" />
        ))
        expect(wrapper.containsMatchingElement(
            <input id="password" />
        ))
        expect(wrapper.containsAllMatchingElements([
            <button id="btn-login" className="btn btn-info pull-right width-100">Save</button>
        ]
        )).toBe(true)
        wrapper.find('#btn-login').props().onClick()
    })
});