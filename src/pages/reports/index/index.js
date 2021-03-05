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

import TableReports from '../components/table';

export default class Reports extends Component{

    state = {
        relatorios: {},
        categorias: [],
        produtos: [],
        gastou: 0.0,
    };

    componentDidMount() {
         this.loadCategorias();
         this.loadProducts();
     }

    loadCategorias = async () => {
        const response = await api.get(`/categorias`);

        this.setState({categorias: response.data});
    };

    loadProducts = async () => {
        const response = await api.get(`/produtos`);

        this.setState({produtos: response.data});
    };

    handleSelectChange = e => {

        var novosProdutos = this.state.produtos.filter(produto => produto.categoria.id == parseInt(e.target.value));
        this.setState({produtos: novosProdutos});
    }

    handleProductChange = e => {
        // Valores fictícios
        // Servem de guia visual para quando a API for atualizada

        if(e.target.value == "22"){
            this.setState({gastou: 57.00})
        }else if(e.target.value == "169"){
            this.setState({gastou: 35.60})
        }else{
            this.setState({gastou: 0.0})
        }
        
    }



    render(){
        const { categorias, produtos, gastou } = this.state

        return(
            <div id="divReports">
                <div>
                    <h1>Relatórios</h1>
                </div>
                <div class="form-group">
                        <label for="selectCategoria">Categoria</label>
                        <select 
                            id="selectCategoria" 
                            onChange={this.handleSelectChange} 
                            class="form-control"
                        >
                            <option>Selecione...</option>
                            { categorias.map(categoria => (
                                <option 
                                    key={categoria.id} 
                                    value={categoria.id}
                                >
                                    {categoria.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                <div>
                <div class="form-group">
                        <label for="selectProduto">Produto</label>
                        <select 
                            id="selectProduto" 
                            onChange={this.handleProductChange} 
                            class="form-control"
                        >
                            <option>Selecione...</option>
                            { produtos.map(produto => (
                                <option 
                                    key={produto.id} 
                                    value={produto.id}
                                >
                                    {produto.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    Gastou: R${gastou.toFixed(2)}
                <div></div>
                    <TableReports />
                </div>
            </div>
        );
    }
}