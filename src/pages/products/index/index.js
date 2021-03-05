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

import TableProducts from '../components/table';

export default class Products extends Component{
    render(){
        return(
            <div id="divProducts">
                <div>
                    <h1>Produtos</h1>
                </div>
                <div id="idButton">
                    <Link 
                        to="/produtos/novo" 
                        class="btn btn-primary btn-lg" 
                        role="button" 
                        aria-pressed="true"
                    >
                        Adicionar Produtos
                    </Link>
                </div>
                <div>
                    <TableProducts />
                </div>
            </div>
        );
    }
}