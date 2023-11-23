import React from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            paternalSurname:"",
            maternalSurname:"",
            birthDate:"",
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
        this.setState({ showModal: false });
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
            axios.post('https://localhost:7164/api/user', formData)
                .then(response => {
                    console.log('Respuesta de la API:', response.data);
                })
                .catch(error => {
                    console.error('Error al enviar los datos:', error);
                });
        }
        else{
            console.log("form invalido");
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
            errors.name = "El email no puede estar vacio";
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