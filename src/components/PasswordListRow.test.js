import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { PasswordListRow } from './PasswordListRow'

Enzyme.configure({ adapter: new Adapter() });

describe('<PasswordListRow />', () => {
    it('should open edit password modal', () => {
        const wrapper = shallow(<PasswordListRow row={{}} editModalOpen= {()=>{}} deletePassword={()=>{}} />)
        expect(wrapper.containsAllMatchingElements([
            <li><a id="openmodal" data-toggle="modal" data-target="#edit-password-modal">Edit</a></li>
            ]
              )).toBe(true)
              wrapper.find('#openmodal').props().onClick()
    })
    it('should handle delete button', () => {
        const wrapper = shallow(<PasswordListRow row={{}} editModalOpen= {()=>{}} deletePassword={()=>{}} />)
        expect(wrapper.containsAllMatchingElements([
            <li><a id="deletePass">Delete</a></li>
            ]
              )).toBe(true)
              wrapper.find('#deletePass').props().onClick()
    })
});