import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { PasswordSearchForm } from './PasswordSearchForm'

Enzyme.configure({ adapter: new Adapter() });

describe('<PasswordSearchForm />', () => {
    it('should render input search ', () => {
        const wrapper = shallow(<PasswordSearchForm />)
        expect(wrapper.containsMatchingElement(
            <input type="text" className="form-control" placeholder="Search url here..." />)).toBe(true)
    })

    it('should change state when type in input tag', () => {
        // const searchOnChange = jest.fn();
        const wrapper = shallow(<PasswordSearchForm searchPassword={() => { }} />)
        const input = wrapper.find('input').first().simulate('change', { target: { name: 'searchbox', value: 'a' } })
        // expect(searchPassword).toHaveBeenLastCalledWith('a');
    })
});