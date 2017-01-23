import axios from 'axios';
import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

// Columns definition
const columns = [
  {
    key: 'firstName',
    name: 'First name',
    resizable: true,
    editable: true
  },
  {
    key: 'lastName',
    name: 'Last name',
    resizable: true,
    editable: true
  }
];

export default class UsersGrid extends Component {

  constructor(props) {
    super(props);

    this.state = { rows: [] };
  }

  componentDidMount() {
    this.loadUsers();
  }

  rowGetter(index) {
    return this.state.rows[index]
  }

  loadUsers() {
    axios.get('/fake-api/users.json').then((res) => {
      this.setState({ rows: res.data });
    },
    (err) => {
      this.setState({ message: String(err), open: true });
    });
  }

  handleRowUpdated(e) {
    //merge updated row with current row and re-render by setting state
    const rows = this.state.rows;
    Object.assign(rows[e.rowIdx], e.updated);
    this.setState({ rows });
  }


  render() {
    return(
      <div style={{ maxWidth: '1360px', margin: '40px auto'}}>
        <ReactDataGrid
        enableCellSelect={true}
        columns={columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        minHeight={640}
        onRowUpdated={this.handleRowUpdated} />
      </div>
    );
  }
}
