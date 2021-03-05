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
import TableCategories from '../components/table';

export default class Categories extends Component{
    render(){
        return(
            <div id="divCategories">
                <div>
                    <h1>Categorias</h1>
                </div>
                <div id="idButton">
                    <a href="/categorias/novo" class="btn btn-primary btn-lg" role="button" aria-pressed="true">Adicionar Categoria</a>
                </div>
                <div>
                    <TableCategories />
                </div>
            </div>
        );
    }
}