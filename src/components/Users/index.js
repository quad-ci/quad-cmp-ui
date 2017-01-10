import axios from 'axios';
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Users extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers() {
    axios.get('/v1/api/users').then(res => {
      console.log('res', res);
      this.setState({ users: res.users })
    },
    (err, status) => {
      console.error(err, status);
    });
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Users', className)} {...props}>
        <h1>Users</h1>
      </div>
    )
  }
}
