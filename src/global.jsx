import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import './global.scss';
import 'font-awesome/css/font-awesome.min.css';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import history from './router/history.jsx';
import Layout from './components/layout/layout.jsx';
import Home from './pages/home/index.jsx';
import Login from './pages/login/index.jsx';
import OrderList from './pages/order/list.jsx';
import UserList from './pages/user/list.jsx';
import ErrorPage from './pages/404/index.jsx';

import ProductRouter from './pages/product/router.jsx';
class App extends React.Component {
  render() {
    const LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/order/list" component={OrderList}></Route>
          <Redirect path="/order" to="/order/list"></Redirect>
          <Route path="/user/list" component={UserList}></Route>
          <Redirect path="/user" to="/user/list"></Redirect>
          <Route path="/product" component={ProductRouter}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </Layout>
    );
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" render={() => LayoutRouter}></Route>
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
