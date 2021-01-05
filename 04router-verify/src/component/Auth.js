import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Shopingcar from "./ShopingCar";
import ProviderAuth from "./ProviderAuth";
import AuthButton from "./AuthButton";

// 组件: 实现路由守卫
export default function Auth() {
    return (
        <ProviderAuth>
            <Router>
                <div>
                    <AuthButton />
                    <ul>
                        <li>
                            <Link to="/public">主页面</Link>
                        </li>
                        <li>
                            <Link to="/shopingcar">购物车</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/public">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        {/* 自定义路由组件PrivateRoute，封装需要权限的页面，如果没有权限，应该转发（重定向） */}
                        <PrivateRoute path="/shopingcar">
                            <Shopingcar />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </ProviderAuth>
    );
}
