import React, {Component} from "react";
import api from '../../../../services/api';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';
import $ from 'jquery';

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

class FormProducts extends Component {
    state = {
        produto: {},
        categorias: [],
    };

    componentDidMount() {
       const id = this.props.match.params.id;
        this.loadProduto(id);
        this.loadCategorias();
    }

    loadProduto = async (id) => {
        const response = await api.get(`/produto/${id}`);

        this.setState({produto: response.data});
    };

    loadCategorias = async () => {
        const response = await api.get(`/categorias`);

        this.setState({categorias: response.data});
    };

    handleNomeChange = e => {
        const novoProduto = {
            ...this.state.produto,
            nome: e.target.value
        }

        this.setState({
            produto: novoProduto
        });
    }

    handlePrecoChange = e => {
        const novoProduto = {
            ...this.state.produto,
            preco: parseFloat(e.target.value)
        }

        this.setState({
            produto: novoProduto
        });
    }

    handlePesoChange = e => {
        const novoProduto = {
            ...this.state.produto,
            peso: parseFloat(e.target.value)
        }

        this.setState({
            produto: novoProduto
        });
        console.log(this.state.produto);
    }

    handleSelectChange = e => {
        const novoProduto = {
            ...this.state.produto,
            categoria: this.state.categorias.find(categoria => categoria.id == e.target.value)
        }

        this.setState({
            produto: novoProduto
        });
    }

    handleTipoChange = () => {

        const novoProduto = {
            ...this.state.produto,
            tipo: !this.state.produto.tipo
        }

        this.setState({
            produto: novoProduto
        });
        console.log(this.state.produto);
    }

    handleSubmit = async (e) => {
        console.log(this.state.produto);

        e.preventDefault();

        if(!this.props.match.params.id){
            await api.post('/produto', this.state.produto);
        }else{
            await api.put(`/produto/put`, this.state.produto);
        }
        
        window.location.replace("/produtos");
    }

    renderBotao() {
        if(!this.props.match.params.id){
                return (
                <button type="submit" class="btn btn-primary">Criar Produto</button>
            );
        }else{
            return(
                <button type="submit" class="btn btn-primary">Atualizar Produto</button>
            );
        }
        
    }
    
    render(){
        const { produto, categorias } = this.state
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
                        >
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="selectCategoria">Categoria</label>
                        <select 
                            id="selectCategoria" 
                            onChange={this.handleSelectChange} 
                            value={produto.categoria != null ? produto.categoria.id : ""}
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
                    <div class="form-check">
                        <input 
                            name="tipo" 
                            onChange={this.handleTipoChange}
                            checked={ this.state.produto.tipo ? "checked" : ""}
                            type="checkbox" 
                            class="form-check-input" 
                            id="exampleCheck1" 
                        />
                        <label class="form-check-label" for="exampleCheck1">Tipo</label>
                    </div>
                    <br/>
                    {this.renderBotao()}
                </form>
            </div>
        );
    }
}

export default withRouter(FormProducts);