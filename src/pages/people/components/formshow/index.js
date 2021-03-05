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

class FormViewPerson extends Component {
    state = {
        pessoa: {},
    };

    componentDidMount() {
       const id = this.props.match.params.id;
        this.loadPessoa(id);
    }

    loadPessoa = async (id) => {
        const response = await api.get(`/comprador/${id}`);

        this.setState({pessoa: response.data});
    };
    
    render(){
        const { pessoa } = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="inputNome">Nome</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            onChange={this.handleInputChange}
                            value={this.state.pessoa.nome} 
                            id="inputNome" 
                            placeholder="Ex.: Julieta"
                            disabled="true"
                        >
                        </input>
                    </div>
                    <div class="form-check">
                        <input 
                            name="superComprador" 
                            onChange={this.handleSuperCompradorChange}
                            checked={ this.state.pessoa.superComprador ? "checked" : ""}
                            type="checkbox" 
                            class="form-check-input" 
                            id="exampleCheck1" 
                            disabled="true"
                        />
                        <label class="form-check-label" for="exampleCheck1">Super Comprador</label>
                    </div>
                </form>
            </div>
        );
    }

}

export default withRouter(FormViewPerson);