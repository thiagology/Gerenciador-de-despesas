import React, {Component} from "react";
import api from '../../../services/api';
import {Link} from 'react-router-dom';

import "../styles.css";

//import ItemLista from '../components/compras';

import NewOrder from '../../orders/new/index';

export default class ListaProdutos extends Component{
    state = {
        carrinho: {
            precoTotal: 0
        },
        produtos: [], // Todos os Produtos
        compras: [],
        precoTotal: 0
    };

    componentDidMount(){
        this.loadCarrinho();
        this.loadProdutos();
        this.loadCompras();
    }

    loadCarrinho = async (id) => {
        const response = await api.get(`/carrinho/${id}`);

        this.setState({carrinho: response.data});
    }

    loadProdutos = async () => {
        const response = await api.get('/produtos');

        this.setState({produtos: response.data});
    }

    loadCompras = async () => {
        const response = await api.get('/compras');

        this.setState({compras: response.data});
    }

    handleSubmit = async () => {

        const { compras } = this.state
        api.post('/compra', compras);
            
        window.location.replace("/inicio");
    
    }

    somaPrecos(compras){
        var soma = 0
        compras.forEach(compra => {
            soma += compra.precoTotal;
        });
        return soma;
    }

    handleComprasChange = async (novaCompra) => {

        const { compras } = this.state
        
        var jaTaNoCarrinho = compras.some(compra => compra.produto == novaCompra.produto);
        
        if(jaTaNoCarrinho){

            var indexCompra = compras.findIndex(compra => compra.produto == novaCompra.produto);
            compras.splice(indexCompra, 1);
            this.setState({compras: [...this.state.compras, novaCompra]});

            var soma = this.somaPrecos(compras);
            this.setState({carrinho: {precoTotal: soma}});
            console.log(`Resultado Total: ${soma}`);

        }else{
            this.setState({compras: [...this.state.compras, novaCompra]});

            var soma = this.somaPrecos(compras);
            this.setState({carrinho: {precoTotal: soma}});
            console.log(`Resultado Total: ${soma}`);
        }

    }

    render(){
        const{carrinho, produtos, compras, precoTotal} = this.state

        return (
            <div>
                <div>
                    <strong class>Total: </strong>
                    <label><strong>R${ carrinho.precoTotal != null ? carrinho.precoTotal.toFixed(2) : '0.00'}</strong></label>
                    <br></br>
                    <button onClick={this.handleSubmit} type="button" class="btn btn-outline-info btn-lg btn-block">Fechar Carrinho</button>
                </div>
                <div className="product-list">
                    {produtos.map(produto => (
                        <NewOrder produto={produto} handleComprasChange={(novaCompra) => this.handleComprasChange(novaCompra)} />
                    ))}
                    <div className="actions">
                        <button onClick={this.prevPage} >Anterior</button>
                        <button onClick={this.nextPage} >Próximo</button>
                    </div>
                </div>
            </div>
        );
    }
}