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

class FormCategories extends Component {
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
        console.log(this.state.categoria)
    };

    handleInputChange = e => {
        const novaCategoria = {
            ...this.state.categoria,
            nome: e.target.value
        }

        this.setState({
            categoria: novaCategoria
        });
        console.log(this.state.categoria);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        if(!this.props.match.params.id){
            await api.post('/categoria', this.state.categoria);
        }else{
            await api.put(`/categoria`, this.state.categoria);
        }
        
        window.location.replace("/categorias");
    }

    renderBotao() {
        if(!this.props.match.params.id){
                return (
                <button type="submit" class="btn btn-primary">Criar Categoria</button>
            );
        }else{
            return(
                <button type="submit" class="btn btn-primary">Atualizar Categoria</button>
            );
        }
        
    }
    
    render(){
        const { categoria } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="inputNome">Nome</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            onChange={this.handleInputChange}
                            value={this.state.categoria.nome} 
                            id="inputNome" 
                            placeholder="Ex.: Alimentos"
                        >
                        </input>
                    </div>
                    {this.renderBotao()}
                </form>
            </div>
        );
    }
}

export default withRouter(FormCategories);