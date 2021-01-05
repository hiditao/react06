
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useRouteMatch
} from "react-router-dom";
import CheckLogin from "./CheckLogin";

export default function User() {
    let { path, url} = useRouteMatch();

    return(
        <div>
            <h1>个人中心页面</h1>
            <Router>
                {/* 路由导航 */}
                {/* 子路由 */}
                <Link to={`${url}/login`}>登录</Link>
                <Link to={`${url}/regiter`}>注册</Link>

                <Switch>
                    {/* path值为：   /user/     */}
                    <Route exact path={path}>
                        <h1>欢饮来到个人中心</h1>
                    </Route>
                    <Route path={`${path}/:userId`}>
                        <CheckLogin />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}