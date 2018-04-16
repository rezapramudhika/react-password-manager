import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from './store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
