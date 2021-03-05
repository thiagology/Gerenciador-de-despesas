import React, {Component} from "react";
import api from '../../../../services/api';
import { withRouter } from "react-router";
import { Link, useParams } from "react-router-dom";
import $, { param } from 'jquery';

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
    NavbarText,
    Form
} from 'reactstrap';

import './styles.css';

class FormViewCategories extends Component {
    state = {
        categoria: {},
    };

    componentDidMount() {
       const id = this.props.match.params.id;
        this.loadCategoria(id);
    }

    loadCategoria = async (id) => {
        const response = await api.get(`/categoria/${id}`);

        this.setState({categoria: response.data});
    };
    
    render(){
        const { categoria } = this.state

        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="inputNome">Nome</label>
                        <input type="text" class="form-control" value={categoria.nome} id="inputNome" disabled="true"></input>
                    </div>
                </form>
            </div>
        );
    }

}

export default withRouter(FormViewCategories);