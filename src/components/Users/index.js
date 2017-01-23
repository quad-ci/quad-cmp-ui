import React, { Component } from 'react';

import './style.css';

export default class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      open: false,
      users: []
    };
  }

  componentDidMount() {
    this.loadUsers();
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  loadUsers() {

  }

  render() {
    return (
      <div className="users" {...props}>
        <h1>Users</h1>
      </div>
    )
  }
}
