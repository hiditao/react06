import { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import ShopingCarPage from "../pages/ShopingCarPage";
import AuthRoute from "../component/AuthRoute";




class MyRouter extends Component {
    render() {
        return (
            <div className="one">
                <Router>
                    <ul>
                        <li>
                            <Link to="/">主页</Link>
                        </li>
                        <li>
                            <Link to="/login">登录</Link>
                        </li>
                        <li>
                            <Link to="/shopingcar">购物车</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/" exact component={IndexPage}></Route>
                        <Route path="/login" component={LoginPage}></Route>
                        <AuthRoute path="/shopingcar" component={ShopingCarPage}></AuthRoute>
                    </Switch>
                </Router>

            </div>
        );
    }
}

export default MyRouter;