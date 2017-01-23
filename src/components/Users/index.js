import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import UsersGrid from '../UsersGrid';

import './style.css';

export default class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      open: false
    };
  }

  componentDidMount() {

  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="">
        <h1>Users test</h1>
        <UsersGrid />
        <Snackbar open={this.state.open} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleRequestClose.bind(this)} />
      </div>
    )
  }
}
