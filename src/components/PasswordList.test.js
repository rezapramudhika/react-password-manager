import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { PasswordList } from './PasswordList'

Enzyme.configure({ adapter: new Adapter() });

describe('<PasswordList />', () => {
    it('should has state searchResult', () => {
        const wrapper = shallow(<PasswordList password={{data:[], searchPassword:''}} getPasswords={()=>{}}/>)
        expect(wrapper.state().searchResult).toEqual([])
    })

    it('should return password based on search', () => {
        const wrapper = shallow(<PasswordList password={{data:[{url: 'test'}, {url: 'facebook'}], searchPassword:'fa'}} getPasswords={()=>{}}/>)
        expect(wrapper.state().searchResult).toEqual([{url: 'facebook'}])
    })

    it('should return password default', () => {
        const wrapper = shallow(<PasswordList password={{data:[{url: 'test'}, {url: 'facebook'}], searchPassword:''}} getPasswords={()=>{}}/>)
        expect(wrapper.state().searchResult).toEqual([{url: 'test'}, {url: 'facebook'}])
    })
});