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

class FormPeople extends Component {
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

    handleInputChange = e => {
        const novaPessoa = {
            ...this.state.pessoa,
            nome: e.target.value
        }

        this.setState({
            pessoa: novaPessoa
        });
        console.log(this.state.pessoa);
    }

    handleSuperCompradorChange = () => {

        const novaPessoa = {
            ...this.state.pessoa,
            superComprador: !this.state.pessoa.superComprador
        }

        this.setState({
            pessoa: novaPessoa
        });
        console.log(this.state.pessoa);
    }

    handleSubmit = async (e) => {
        console.log(this.state.pessoa);

        e.preventDefault();

        if(!this.props.match.params.id){
            await api.post('/comprador', this.state.pessoa);
        }else{
            await api.put(`/comprador/put`, this.state.pessoa);
        }
        
        window.location.replace("/pessoas");
    }

    renderBotao() {
        if(!this.props.match.params.id){
                return (
                <button type="submit" class="btn btn-primary">Criar Pessoa</button>
            );
        }else{
            return(
                <button type="submit" class="btn btn-primary">Atualizar Pessoa</button>
            );
        }
        
    }
    
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
                        />
                        <label class="form-check-label" for="exampleCheck1">Super Comprador</label>
                    </div>
                    <br/>
                    {this.renderBotao()}
                </form>
            </div>
        );
    }
}

export default withRouter(FormPeople);