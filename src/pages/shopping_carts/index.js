import React, {Component} from "react";
import api from '../../services/api';
import {Link} from 'react-router-dom';

import "./styles.css";
import ListaProdutos from "./ListaProdutos";

export default class ShoppingCarts extends Component{

    render(){
        return (
            <div className="product-list">
                <div>
                    <h1>Carrinho</h1>
                </div>
                <ListaProdutos />                    
            </div>
        );
    }
}