import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from 'react-router-dom';

import Home from './Pages/Home';
import Customers from './Pages/Customers';
import ListCustomers from './Pages/Customers/List';
import Products from './Pages/Products';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/customers' component={Customers}/>
                <Route path='/list' component={ListCustomers}/>
                <Route path='/products' component={Products}/>
            </Switch>
        </BrowserRouter>
    )
}