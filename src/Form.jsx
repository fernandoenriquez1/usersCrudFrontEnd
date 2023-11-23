import React from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import Swal from 'sweetalert2';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            paternalSurname:"",
            maternalSurname:"",
            birthDate:null,
            cellphoneNumber:"",
            email:"",
            errors:{},
            showModal: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow() {
        this.setState({ showModal: true });
      }
    
      handleClose() {
        event.preventDefault();
        this.setState({ showModal: false });
        this.setState({ name: "" });
        this.setState({ paternalSurname: "" });
        this.setState({ maternalSurname: "" });
        this.setState({ birthDate: null });
        this.setState({ cellphoneNumber: "" });
        this.setState({ email: "" });
        this.setState({ errors: {} });
      }

    handleInputChange(event){
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.validateForm()){
            // Crear un objeto con los datos del formulario
            const formData = {
                name: this.state.name,
                paternalSurname: this.state.paternalSurname,
                maternalSurname: this.state.maternalSurname,
                birthDate: this.state.birthDate,
                email: this.state.email,
                cellphoneNumber: this.state.cellphoneNumber
            };

            // Realizar la solicitud POST a tu API
            axios.post('https://localhost:6001/api/user', formData)
                .then(response => {
                    this.props.onUserAdded();

                    this.handleClose();
                    Swal.fire({
                        title: 'Realizado',
                        text: 'Usuario guardado correctamente',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      });
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Error',
                        text: 'No fue posible guardar el usuario',
                        icon: 'warning',
                        confirmButtonText: 'Ok'
                      });
                });
        }
    }

    validateForm(){
        let valid = true;
        let errors = {};

        if(this.state.name == ""){
            errors.name = "El nombre no puede estar vacio";
            valid = false;
        }

        if(this.state.email == ""){
            errors.email = "El email no puede estar vacio";
            valid = false;
        }

        if(this.state.cellphoneNumber == ""){
            errors.cellphoneNumber = "El teléfono no puede estar vacio";
            valid = false;
        }

        if(!this.state.birthDate){
            errors.birthDate = "La fecha de nacimiento no puede estar vacia";
            valid = false;
        }

        this.setState({errors});
        return valid;
    }



    render(){
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Nuevo usuario
                </Button>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Agregar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={this.handleSubmit}>
                        <div class="form-group">    
                            <label>Nombre:</label>
                            <input type="text" class="form-control" placeholder="Ingresa tu nombre" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                            {this.state.errors.name && <small class="form-text text-danger">{this.state.errors.name}</small>}
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                <label>Apellido paterno:</label>
                                <input type="text" class="form-control"  placeholder="Apellido paterno" name="paternalSurname" value={this.state.paternalSurname} onChange={this.handleInputChange}/>
                                {this.state.errors.paternalSurname && <small class="form-text text-danger">{this.state.errors.paternalSurname}</small>}
                                </div>    
                            </div> 
                            <div class="col-6">
                                <div class="form-group">
                                <label>Apellido materno:</label>
                                <input type="text" class="form-control"  placeholder="Apellido materno" name="maternalSurname" value={this.state.maternalSurname} onChange={this.handleInputChange}/>
                                {this.state.errors.maternalSurname && <small class="form-text text-danger">{this.state.errors.maternalSurname}</small>}
                                </div>
                            </div>
                        </div>
                       
                       <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label>Fecha de nacimiento:</label>
                                    <input type="date" class="form-control"  name="birthDate" value={this.state.birthDate} onChange={this.handleInputChange}/>
                                    {this.state.errors.birthDate && <small class="form-text text-danger">{this.state.errors.birthDate}</small>}
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label>Teléfono:</label>
                                    <input type="number" class="form-control" placeholder="Teléfono" name="cellphoneNumber" value={this.state.cellphoneNumber} onChange={this.handleInputChange}/>
                                    {this.state.errors.cellphoneNumber && <small class="form-text text-danger">{this.state.errors.cellphoneNumber}</small>}
                                </div>
                            </div>
                       </div>
                       
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="text" class="form-control" placeholder="Ingresa tu email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                            {this.state.errors.email && <small class="form-text text-danger">{this.state.errors.email}</small>}
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" className="btn btn-sm btn-primary float-end">Guardar</button>
                                <button onClick={this.handleClose} className="btn btn-sm btn-warning float-end me-3">Cerrar</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Form;