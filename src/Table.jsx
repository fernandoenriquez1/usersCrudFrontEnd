import React, { Component } from 'react';

class Table extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }



  render() {
    return (
      <table className="table mt-4">
        <thead className="table-primary">
          <tr>
            <th>Nombre</th>
            <th>Apellido paterno</th>
            <th>Apellido materno</th>
            <th>Fecha de nacimiento</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.paternalSurname}</td>
              <td>{item.maternalSurname}</td>
              <td>{item.birthDateFormat}</td>
              <td>{item.cellphoneNumber}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;