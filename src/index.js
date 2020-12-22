import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./common/redux/store"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import MaterialsTable from './data-tables/ui/MaterialsTable'
import SalesTable from './data-tables/ui/SalesTable'
<<<<<<< HEAD
import Login from './login/ui/login'
=======
import ProductsTable from './data-tables/ui/ProductsTable'
>>>>>>> 437082700d4fca948a2260551c69106aa4687110

ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <Route component={App} path='/' exact />
        <Route component={MaterialsTable} path='/materials' />
        <Route component={ProductsTable} path='/products'/>
        <Route component={SalesTable} path='/sales'/>
        <Route component={Login} pathe='/login'/>
      </Switch>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
