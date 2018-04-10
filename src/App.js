import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';
import PasswordEditModal from './components/PasswordEditModal';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={PasswordForm} />
            <Route path="/password-list" component={PasswordList} />
            <Redirect from='/' to='/' />
          </Switch>
          <PasswordEditModal/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
