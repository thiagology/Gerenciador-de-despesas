import React, {Component} from "react";
import api from '../../../services/api';
import {Link} from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import "./styles.css";
import TablePeople from '../components/table';

export default class People extends Component{
    render(){
        return(
            <div id="divPeople">
                <div>
                    <h1>Pessoas</h1>
                </div>
                <div id="idButton">
                    <a href="/pessoas/novo" class="btn btn-primary btn-lg" role="button" aria-pressed="true">Adicionar Pessoa</a>
                </div>
                <div>
                    <TablePeople />
                </div>
            </div>
        );
    }
}