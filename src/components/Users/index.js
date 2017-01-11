import axios from 'axios';
import React, { Component } from 'react';
import classnames from 'classnames';
import Snackbar from 'material-ui/Snackbar';

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
    axios.get('/api/users').then((res) => {
      console.log('res', res)
      this.setState({ users: res.users });
    },
    (err) => {
      this.setState({ message: String(err), open: true });
    });
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Users', className)} {...props}>
        <h1>Users</h1>
        <Snackbar open={this.state.open} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleRequestClose.bind(this)} />
      </div>
    )
  }
}
