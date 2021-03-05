import React, {Component} from "react";
import api from '../../../services/api';
import {Link} from 'react-router-dom';

import "../styles.css";

export default class ItemLista extends Component{
    constructor({carrinho, produto, compras}){

        const state = {
            compra: {
                carrinho,
                produto,
                quantidade: 0,
                precoTotal: 0,
            },
        };

        const componentDidMount = () => {
            this.loadCompra();
        }

        const loadCompra = async () => {
            const compra = compras.find(compra => compra.carrinho == carrinho && compra.produto == produto);

            this.setState({compra});
        };

        const handleInputChange = e => {
            const novaCompra = {
                ...this.state.compra,
                quantidade: e.target.value
            }

            this.setState({
                compra: novaCompra
            });
        }

        const handleSubmit = async (novaCompra) => {

            if(!this.state.compras.find(compra => compra.produto == novaCompra.produto)){
                await api.post('/compra', novaCompra);
            }else{
                await api.put(`/compra`, this.state.compra);
            }
        
        }

        const criarCompra = ({produto}) => {
            const novaCompra = {
                carrinho: this.state.carrinho,
                produto,
                quantidade: this.state.quantidade,
            }

            console.log(novaCompra);

            this.handleSubmit(novaCompra);
        }
    }

    

    render(){
        const{produto} = this.props.produto

        return (
            <div>
                <div className="product-list">
                        <article key={produto.id}>
                            <strong>{produto.nome}</strong>
                            <p>Preço: R${produto.preco}</p>
                            <p>{produto.categoria}</p>
                            <Link className="btn-add" type="button">Adicionar</Link>
                            <label for="quantity">Quantidade:</label>
                            <input 
                                className="input-number" 
                                type="number" 
                                id="quantity" 
                                name="quantity" 
                                min="0"
                                onChange={this.handleInputChange}
                            >
                            </input>
                        </article>
                </div>
            </div>
        );
    }
}