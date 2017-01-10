import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from './quad-logo.png';

import AppBar from 'material-ui/AppBar';
import classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import DashboadIcon from 'material-ui/svg-icons/action/dashboard';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import PowerIcon from 'material-ui/svg-icons/action/power-settings-new';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

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

  menu() {
    return (
      <IconMenu iconButtonElement={<IconButton><MenuIcon /></IconButton>} targetOrigin={{horizontal: 'right', vertical: 'top'}} anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Dashboard" leftIcon={<DashboadIcon />} containerElement={<Link to="/" style={this.style.button}></Link>}></MenuItem>
        <MenuItem primaryText="Members" leftIcon={<ViewListIcon />} containerElement={<Link to="/members" style={this.style.button}></Link>}></MenuItem>
        <MenuItem primaryText="Sign out" leftIcon={<PowerIcon />} containerElement={<Link to="/sign-out" style={this.style.button}></Link>}></MenuItem>
      </IconMenu>
    );
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <AppBar style={this.style.appBar} title="hello world" iconElementLeft={<img src={logo} alt="logo" style={this.style.quadLogo}></img>} iconElementRight={this.menu()}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;