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

class FormViewProduct extends Component {
    state = {
        produto: {},
    };

    componentDidMount() {
       const id = this.props.match.params.id;
        this.loadProduto(id);
    }

    loadProduto = async (id) => {
        const response = await api.get(`/produto/${id}`);

        this.setState({produto: response.data});
    };
    
    render(){
        const { produto } = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="inputNome">Nome</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            onChange={this.handleNomeChange}
                            value={this.state.produto.nome} 
                            id="inputNome" 
                            placeholder="Ex.: Biscoito Treloso"
                            disabled="true"
                        >
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="inputPreco">Preço</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            onChange={this.handlePrecoChange}
                            value={this.state.produto.preco} 
                            id="inputPreco" 
                            placeholder="0.00"
                            disabled="true"
                        >
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="inputPeso">Peso</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            onChange={this.handlePesoChange}
                            value={this.state.produto.peso} 
                            id="inputPeso" 
                            placeholder="0.000"
                            disabled="true"
                        >
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="selectCategoria">Categoria</label>
                        <input 
                            class="form-control" 
                            disabled="true" 
                            value={produto.categoria != null ? produto.categoria.nome : ""}
                        >
                        </input>
                    </div>
                    <div class="form-check">
                        <input 
                            name="tipo" 
                            onChange={this.handleTipoChange}
                            checked={ this.state.produto.tipo ? "checked" : ""}
                            type="checkbox" 
                            class="form-check-input" 
                            id="exampleCheck1" 
                            disabled="true"
                        />
                        <label class="form-check-label" for="exampleCheck1">Tipo</label>
                    </div>
                </form>
            </div>
        );
    }

}

export default withRouter(FormViewProduct);