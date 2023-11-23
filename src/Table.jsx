import React, { Component } from 'react';
import axios from 'axios';
class Table extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Hacer la solicitud a la API usando Axios en componentDidMount
    axios.get('https://localhost:7164/api/user/search')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
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
          {this.state.data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.paternalSurname}</td>
              <td>{item.maternalSurname}</td>
              <td>{item.birthDate}</td>
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