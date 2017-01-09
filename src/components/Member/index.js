import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Member', className)} {...props}>
        <h1>
          Member
        </h1>
      </div>
    );
  }
}