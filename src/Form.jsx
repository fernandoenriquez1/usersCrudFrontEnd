import React from "react";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            surname:"",
            age:"",
            address:"",
            email:"",
            errors:{}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.validateForm()){

        }
        else{
            console.log("form invalido");
        }
    }

    validateForm(){
        let valid = true;
        let errors = {};

        if(this.state.name.length < 3){
            errors.name = "El nombre debe tener al menos 3 caracteres";
            valid = false;
        }

        this.setState({errors});
        return valid;
    }

    render(){
        return (
            <div class="card">
                <div class="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label>Nombre:</label>
                            <input type="text" class="form-control" placeholder="Ingresa tu nombre" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                            {this.state.errors.name && <small class="form-text text-danger">{this.state.errors.name}</small>}
                        </div>
                        <div class="form-group">
                            <label>Apellidos:</label>
                            <input type="text" class="form-control"  placeholder="Ingresa tus apellidos" name="surname" value={this.state.surname} onChange={this.handleInputChange}/>
                            {this.state.errors.surname && <small class="form-text text-danger">{this.state.errors.surname}</small>}
                        </div>
                        <div class="form-group">
                            <label>Edad:</label>
                            <input type="number" class="form-control"  placeholder="Ingresa tu edad" name="age" value={this.state.age} onChange={this.handleInputChange}/>
                            {this.state.errors.age && <small class="form-text text-danger">{this.state.errors.age}</small>}
                        </div>
                        <div class="form-group">
                            <label>Dirección:</label>
                            <input type="text" class="form-control" placeholder="Ingresa tu dirección" name="address" value={this.state.address} onChange={this.handleInputChange}/>
                            {this.state.errors.address && <small class="form-text text-danger">{this.state.errors.address}</small>}
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
                                <button type="submit" className="btn btn-sm btn-warning float-end me-3">Limpiar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;