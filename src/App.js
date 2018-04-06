import React, { Component } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
// , Route, Switch 
import Navbar from './components/Navbar';
import PasswordForm from './components/PasswordForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <PasswordForm />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
