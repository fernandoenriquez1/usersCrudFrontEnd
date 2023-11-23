import React, { Component } from 'react';
import Form from "./Form";
import Table from "./Table";
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
      };
    }
  
    addUser = (newUser) => {
        this.setState(prevState => ({
          users: [...prevState.users, newUser]
        }));
      }

      loadUsers = () => {
        axios.get('https://localhost:6001/api/user/search')
          .then(response => {
            response.data.registros.forEach(element => {
                // Convertir a un objeto de fecha
                const dateObj = new Date(element.birthDate);
      
                // Extraer día, mes y año
                const day = dateObj.getDate().toString().padStart(2, '0');
                const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Meses comienzan en 0
                const year = dateObj.getFullYear();
      
                // Formatear en el nuevo formato
                const formattedDate = `${day}/${month}/${year}`;
      
                element.birthDateFormat = formattedDate;
              });

            this.setState({ users: response.data.registros });
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
      }

    componentDidMount() {
        this.loadUsers();
    }
  
    render() {
      return (
        <div>
          <Form onUserAdded={this.loadUsers} />
          <Table users={this.state.users} />
        </div>
      );
    }
  }

  export default App;