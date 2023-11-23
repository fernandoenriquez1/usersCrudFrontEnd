import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';

ReactDOM.render(
    [
    <Form/>,
    <Table/>
    ],
    document.getElementById('root')
)