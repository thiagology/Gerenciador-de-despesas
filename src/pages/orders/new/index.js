import React, {Component} from "react";
import api from '../../../services/api';
import {Link} from 'react-router-dom';

import "./styles.css";

export default class NewOder extends Component{

    state = {
        compra: {
            quantidade: 0,
            precoTotal: 0,
        },
        produto: {}
    }

    componentDidMount() {
        this.loadProduto();
     }

    loadProduto = () => {

        this.setState({produto: this.props.produto});
        this.setState({compra: {...this.state.compra, produto: this.state.produto}});

    };

    handleQuantidadeChange = e => {
        const novaCompra = {
            produto: this.props.produto,
            quantidade: parseInt(e.target.value),
            precoTotal: parseFloat(this.state.produto.preco) * parseFloat(e.target.value)
        }

        this.setState({
            compra: novaCompra
        });

        this.props.handleComprasChange(novaCompra);
        //console.log(novaCompra);
        //console.log(novaCompra);
    }


    render(){

        const { produto, compra } = this.state

        return (
                    <article key={produto.id}>
                        <strong class="title">{produto.nome}</strong>
                        Total R${compra.precoTotal.toFixed(2)}
                        <p class="preco">Preço: R${produto.preco != null ? produto.preco.toFixed(2) : ""}</p>
                        <p>{produto.categoria != null ? produto.categoria.nome : ""}</p>
                        <label class="qnt" for="quantity">Quantidade:</label>
                        <input 
                            className="input-number" 
                            type="number" 
                            id="quantity" 
                            name="quantity" 
                            min="0"
                            onChange={this.handleQuantidadeChange}
                        >
                        </input>
                    </article>
        );
    }
}