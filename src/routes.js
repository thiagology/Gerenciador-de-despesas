import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './pages/inicial';
import Categories from './pages/categories/index';
import CategoriesNew from './pages/categories/new';
import CategoriesEdit from './pages/categories/edit';
import CategoriesView from './pages/categories/show';
import Products from './pages/products/index';
import ProductsNew from './pages/products/new';
import ProductsEdit from './pages/products/edit';
import ProductView from './pages/products/show';
import ShoppingCarts from './pages/shopping_carts';
import Stores from './pages/stores';
import People from './pages/people/index';
import PeopleNew from './pages/people/new';
import PeopleEdit from './pages/people/edit';
import PersonView from './pages/people/show';
import Reports from './pages/reports/index';
import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Inicial} />
            <Route path="/inicio" component={Inicial} />
            <Route exact path="/categorias" component={Categories} />
            <Route path="/categorias/novo" component={CategoriesNew} />
            <Route path="/categorias/editar/:id" component={CategoriesEdit} />
            <Route path="/categorias/mostrar/:id" component={CategoriesView} />
            <Route exact path="/produtos" component={Products} />
            <Route exact path="/produtos/novo" component={ProductsNew} />
            <Route path="/produtos/editar/:id" component={ProductsEdit} />
            <Route path="/produtos/mostrar/:id" component={ProductView} />
            <Route exact path="/carrinhos" component={ShoppingCarts} />
            <Route exact path="/lojas" component={Stores} />
            <Route exact path="/pessoas" component={People} />
            <Route exact path="/pessoas/novo" component={PeopleNew} />
            <Route path="/pessoas/editar/:id" component={PeopleEdit} />
            <Route path="/pessoas/mostrar/:id" component={PersonView} />
            <Route exact path="/relatorios" component={Reports} />
            <Route exact path="/rocketseat" component={Main} />
            <Route exact path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;