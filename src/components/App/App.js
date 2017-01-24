import errorHelper from '../../utils/errorHelper';
import React, { Component } from 'react';
import styles from './App.css';
import User from '../../model/User';

import { Link } from 'react-router';

import logo from './quad-logo.png';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import DashboadIcon from 'material-ui/svg-icons/action/dashboard';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import PowerIcon from 'material-ui/svg-icons/action/power-settings-new';
import TimelineIcon from 'material-ui/svg-icons/action/timeline';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: []
    };

    this.style = {
      button: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.870588)'
      },
      appBar: {
        backgroundColor: '#0091EA'
      },
      quadLogo: {
        height: '36px',
        marginTop: '8px',
        marginLeft: '40px'
      }
    };
  }

  componentDidMount() {
    User.getCurrent()
      .catch( errorHelper )
      .then( user => this.setState({ currentUser:user })  );
  }

  menu() {
    return (
      <IconMenu iconButtonElement={<IconButton><MenuIcon /></IconButton>} targetOrigin={{horizontal: 'right', vertical: 'top'}} anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText={this.state.currentUser.username} leftIcon={<DashboadIcon />} containerElement={<Link to="/" style={this.style.button}></Link>}></MenuItem>
        <MenuItem primaryText="Members" leftIcon={<ViewListIcon />} containerElement={<Link to="/members" style={this.style.button}></Link>}></MenuItem>
        <MenuItem primaryText="Sign out" leftIcon={<PowerIcon />} containerElement={<Link to="/sign-out" style={this.style.button}></Link>}></MenuItem>
      </IconMenu>
    );
  }

  render() {
    return (
      <div className={styles.app}>
        <AppBar style={this.style.appBar} title="" iconElementLeft={<img src={logo} alt="logo" style={this.style.quadLogo}></img>} iconElementRight={this.menu()}/>
        <h2>Welcome to the new React platform</h2>
        <h3>Current user: {this.state.currentUser.username}</h3>
      </div>
    );
  }
}

export default App;