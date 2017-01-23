import errorHelper from '../../utils/errorHelper.js';
import React from 'react';
import styles from './App.css';
import User from '../../model/User.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
  }

  componentDidMount() {
    User.getCurrent()
      .catch( errorHelper )
      .then( user => this.setState({ currentUser:user })  );
  }

  render() {
    return <div className={styles.app}>
      <h2>Welcome to the new React platform</h2>
      <h3>Current user: {this.state.currentUser.username}</h3>
    </div>
  }
}
